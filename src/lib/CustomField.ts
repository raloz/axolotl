export function extractRoute(document: Document): string[] {
  const TableRows: HTMLElement[] = Array.from(
    document.querySelectorAll("#div__bodytab tr a")
  );

  const routes: string[] = TableRows.map((el: HTMLElement): string =>
    (el?.getAttribute("href") || "").replace("&e=T", "")
  );

  return routes;
}
