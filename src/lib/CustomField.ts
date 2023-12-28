export function extractRoute(document: Document): string[] {
  const TableRows: HTMLElement[] = Array.from(
    document.querySelectorAll("#div__bodytab tr.uir-list-row-tr td:nth-child(2) > a")
  );
  const routes: string[] = TableRows.map((el: HTMLElement): string =>
    (el?.getAttribute("href") || "").replace("&e=T", "")
  );

  return routes.filter(el => el !== '');
}

export function extractProperty(document: Document): any {
  const CustomFieldType = document?.querySelector("input#type") as HTMLElement;
  const ContainerField: HTMLElement[] = Array.from(
    document.querySelectorAll('[data-nsps-type="field"]')
  );
  const definition = ContainerField.map(
    (el: HTMLElement): { label: string; value: string } => ({
      label: gettingFieldLabel(
        el?.querySelector('[data-nsps-type="label"] > a') as HTMLAnchorElement
      ),
      value: gettingFieldLabelValue(
        el?.querySelector('[data-nsps-type="field_input"]') as HTMLElement
      ),
    })
  );

  const [label] = definition.filter((el) => el.label === "label");
  const [id] = definition.filter((el) => el.label === "id");
  const [internalId] = definition.filter((el) => el.label === "internal_id");
  const [owner] = definition.filter((el) => el.label === "owner");
  const [description] = definition.filter((el) => el.label === "description");
  const [type] = definition.filter((el) => el.label === "type");

  const field = {
    internalId: Number(internalId.value),
    id: id.value,
    label: label.value,
    owner: owner.value,
    type: type.value,
    description: description.value,
    xml: `app.netsuite.com/app/suiteapp/devframework/xml/xmlexport.nl?recordtype=${CustomFieldType?.getAttribute(
      "value"
    )}&id=${Number(internalId.value)}`,
  };
  console.log(field);
  return field;
}

export function gettingFieldLabel(element: HTMLAnchorElement): string {
  const RegEx = /APP:FORMLABEL:[a-zA-Z_]{1,}/g;
  const [pathToLabel] = RegEx.exec(element?.getAttribute("onclick") || "") || [
    "",
  ];

  return pathToLabel?.replace("APP:FORMLABEL:", "").toLowerCase().trim();
}

export function gettingFieldLabelValue(element: HTMLElement): string {
  return (element?.textContent || "").toLocaleLowerCase().trim();
}
