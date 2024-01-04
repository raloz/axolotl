export async function gettingCustomFieldList(
  fieldType: string
): Promise<string> {
  const result = await fetch(`/app/common/custom/${fieldType}.nl`);

  if (result.status >= 400) {
    return "";
  }

  const page = await result.text();

  return page;
}
