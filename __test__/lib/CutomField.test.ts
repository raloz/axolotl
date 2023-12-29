// @vitest-environment happy-dom
import { describe, it, expect } from "vitest";
import CustomEntityList from "@test/templates/CustomEntityList.html?raw";
import CustomEntityFieldRFC from "@test/templates/CustomEntityField-RFC.html?raw";

import {
  extractRoute,
  extractProperty,
  gettingFieldLabel,
  gettingFieldLabelValue,
} from "@app/lib/CustomField";

describe("getting urls from the CustomField List HTML Page", () => {
  it("scrapping the CustomEntity List", () => {
    const BaseRoute = "/app/common/custom/entitycustfield.nl";

    /** Se inyecta el template de la página de NetSuite de listado de campos */
    const document = window.document;
    document.body.innerHTML = CustomEntityList;

    const customEntintyRoutes = extractRoute(document);

    expect(customEntintyRoutes.length).toBe(255);
    expect(customEntintyRoutes).toContainEqual(`${BaseRoute}?id=1917`);
    expect(customEntintyRoutes).toContainEqual(`${BaseRoute}?id=5516`);
    expect(customEntintyRoutes).toContainEqual(`${BaseRoute}?id=8962`);
    expect(customEntintyRoutes).toContainEqual(`${BaseRoute}?id=7936`);
    expect(customEntintyRoutes).toContainEqual(`${BaseRoute}?id=53`);
  });

  it("scrapping the CustomEntity Empty List", () => {
    /** Se inyecta el template vacío de listado de campos */
    const document = window.document;
    document.body.innerHTML = `<table id="div__bodytab" border="0" cellspacing="0" cellpadding="0" width="100%" style>
      <tbody></tbody>
  </table>`;

    expect(extractRoute(document)).toStrictEqual([]);
  });
});

describe("getting single field properties from the CustomEntity: RFC Field", () => {
  it("getting the Label prop", () => {
    /** Se inyecta el elemento para obtener el label del campo */
    const document = window.document;
    document.body.innerHTML = `<body><a tabindex="-1" title="¿Qué es esto?"
      href="javascript:void(&quot;help&quot;)"
      style="cursor:help"
      onclick="return nlFieldHelp('Ayuda de campo', 'label', this, 'entitycustomfield', 'NA', '-1', 'UI', 'EDIT_CUSTENTITYFIELD', 'TSTDRV2014884', 'RECORD', 'F', '', 'Campo%20de%20entidad%20personalizado', 'APP:FORMLABEL:LABEL', '')"
      class="smallgraytextnolink"
      onmouseover="this.className='smallgraytext'; return true;"
      onmouseout="this.className='smallgraytextnolink'; ">Etiqueta</a></body>`;

    const element: HTMLAnchorElement = document.querySelector(
      "body > a"
    ) as HTMLAnchorElement;
    const fieldLabel = gettingFieldLabel(element);

    expect(fieldLabel).toBe("label");
  });

  it("getting the Value prop", () => {
    /** Se inyecta el elemento para obtener el valor del campo */
    const document = window.document;
    document.body.innerHTML = `<body><span class="uir-field inputreadonly"
        data-nsps-type="field_input">
        RFC (3)
    </span></body>`;

    const element: HTMLElement = document.querySelector(
      "body > span"
    ) as HTMLElement;
    const fieldLabel = gettingFieldLabelValue(element);

    expect(fieldLabel).toBe("rfc (3)");
  });
});

describe("getting field object from the CustomEntity HTML Page", () => {
  it("scrapping the CustomEntity RFC HTML", () => {
    /** Se inyecta el template de la página de NetSuite del Campo RFC */
    const document = window.document;
    document.body.innerHTML = CustomEntityFieldRFC;

    const Field: Field = extractProperty(document);

    expect(Field.internalId).toBe(11039);
    expect(Field.id).toBe("custentity_mx_rfc");
    expect(Field.label).toBe("rfc (3)");

    expect(Field).toMatchInlineSnapshot(`
      {
        "description": "",
        "id": "custentity_mx_rfc",
        "internalId": 11039,
        "label": "rfc (3)",
        "owner": "sergio ponce",
        "public": true,
        "type": "texto de formato libre",
        "xml": "app.netsuite.com/app/suiteapp/devframework/xml/xmlexport.nl?recordtype=custentityfield&id=11039",
      }
    `);
  });
});
