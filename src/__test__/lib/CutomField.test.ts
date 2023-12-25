// @vitest-environment happy-dom
import { describe, it, expect } from "vitest";
import { extractRoute } from "@/lib/CustomField";

describe("getting the url field from HTML document", () => {
  it("definitionFieldRoutes it is a function", () => {
    expect(extractRoute).toBeTypeOf("function");
  });

  it("getting url from the custom field list page", () => {
    const document = window.document;
    document.body.innerHTML = `<table id="div__bodytab" border="0" cellspacing="0" cellpadding="0" width="100%" style>
    <tbody>
    <tr class="uir-list-row-tr uir-list-row-even" id="row0">
      <td valign="top" class="listtextctr uir-list-row-cell" style="">164</td>
      <td valign="top" class="listtext uir-list-row-cell" style=""><a href="/app/common/custom/entitycustfield.nl?id=5516&amp;e=T" target="_self" class="dottedlink">RFC</a></td>
      <td valign="top" class="listtext uir-list-row-cell" style="">&nbsp;</td>
      <td valign="top" class="listtext uir-list-row-cell" style="">custentity36</td>
      <td valign="top" class="listtextrt uir-list-row-cell" style="">5516
      </td>
      <td valign="top" class="listtext uir-list-row-cell" style="">Free-Form Text</td>
      <td valign="top" class="listtext uir-list-row-cell" style="">&nbsp;</td>
      <td valign="top" class="listtext uir-list-row-cell" style="">Accounting</td>
      <td valign="top" class="listtextctr uir-list-row-cell" style="">Y</td>
      <td valign="top" class="listtextctr uir-list-row-cell" style="">&nbsp;</td>
      <td valign="top" class="listtextctr uir-list-row-cell" style="">Y</td>
      <td valign="top" class="listtextctr uir-list-row-cell" style="">&nbsp;</td>
      <td valign="top" class="listtextctr uir-list-row-cell" style="">&nbsp;</td>
      <td valign="top" class="listtextctr uir-list-row-cell" style="">&nbsp;</td>
      <td valign="top" class="listtextctr uir-list-row-cell" style="">&nbsp;</td>
      <td valign="top" class="listtextctr uir-list-row-cell" style="">&nbsp;</td>
      <td valign="top" class="listtextctr uir-list-row-cell" style="">&nbsp;</td>
      <td valign="top" class="listtextctr uir-list-row-cell" style="">&nbsp;</td>
      <td valign="top" class="listtextctr uir-list-row-cell" style="">&nbsp;</td>
    </tr>
    <tr class="uir-list-row-tr uir-list-row-even" id="row0">
      <td valign="top" class="listtextctr uir-list-row-cell" style="">164</td>
      <td valign="top" class="listtext uir-list-row-cell" style=""><a href="/app/common/custom/entitycustfield.nl?id=5517&amp;e=T" target="_self" class="dottedlink">RFC</a></td>
      <td valign="top" class="listtext uir-list-row-cell" style="">&nbsp;</td>
      <td valign="top" class="listtext uir-list-row-cell" style="">custentity36</td>
      <td valign="top" class="listtextrt uir-list-row-cell" style="">5516
      </td>
      <td valign="top" class="listtext uir-list-row-cell" style="">Free-Form Text</td>
      <td valign="top" class="listtext uir-list-row-cell" style="">&nbsp;</td>
      <td valign="top" class="listtext uir-list-row-cell" style="">Accounting</td>
      <td valign="top" class="listtextctr uir-list-row-cell" style="">Y</td>
      <td valign="top" class="listtextctr uir-list-row-cell" style="">&nbsp;</td>
      <td valign="top" class="listtextctr uir-list-row-cell" style="">Y</td>
      <td valign="top" class="listtextctr uir-list-row-cell" style="">&nbsp;</td>
      <td valign="top" class="listtextctr uir-list-row-cell" style="">&nbsp;</td>
      <td valign="top" class="listtextctr uir-list-row-cell" style="">&nbsp;</td>
      <td valign="top" class="listtextctr uir-list-row-cell" style="">&nbsp;</td>
      <td valign="top" class="listtextctr uir-list-row-cell" style="">&nbsp;</td>
      <td valign="top" class="listtextctr uir-list-row-cell" style="">&nbsp;</td>
      <td valign="top" class="listtextctr uir-list-row-cell" style="">&nbsp;</td>
      <td val
    </tbody>
  </table>`;

    expect(extractRoute(document)).toStrictEqual([
      "/app/common/custom/entitycustfield.nl?id=5516",
      "/app/common/custom/entitycustfield.nl?id=5517",
    ]);
  });

  it("getting url from an empty custom field list page", () => {
    const document = window.document;
    document.body.innerHTML = `<table id="div__bodytab" border="0" cellspacing="0" cellpadding="0" width="100%" style><tbody></tbody></table>`;
    
    expect(extractRoute(document)).toStrictEqual([]);
  });
});
