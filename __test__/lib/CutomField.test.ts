// @vitest-environment happy-dom
import { describe, it, expect } from "vitest";
import CustomEntityList from "@test/templates/CustomEntityList.html?raw";
import { extractRoute } from "@app/lib/CustomField";

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

/*describe("getting the field properties from HTML document", () => {
  const document = window.document;
  document.body.innerHTML = `<form name="main_form" style="margin: 0; font-size: 0px; padding-bottom: 10px;">
  <table border="0" cellspacing="0" cellpadding="0" width="100%">
  <tbody>
    <tr>
      <td valign="top">
        <table border="0" class="table_fields" cellspacing="0" cellpadding="0" data-colnumber="3">
          <tbody>
            <tr>
              <td>
                <div class="uir-field-wrapper" data-nsps-label="Label" data-nsps-type="field" data-field-type="text"
                  data-walkthrough="Field:label" data-nsps-id="field_Label__1703531750825">
                  <span id="label_fs_lbl_uir_label" class="smallgraytextnolink uir-label" data-nsps-type="field_label">
                    <span id="label_fs_lbl" class="smallgraytextnolink" style="" data-nsps-type="label">
                      <a tabindex="-1" title="What's this?" href='javascript:void("help")' style="cursor: help"
                        onclick="return nlFieldHelp('Field Help', 'label', this, 'entitycustomfield', 'NA', '-1', 'UI', 'EDIT_CUSTENTITYFIELD', 'TSTDRV2014884', 'RECORD', 'F', '', 'Custom%20Entity%20Field', 'APP:FORMLABEL:LABEL', '')"
                        class="smallgraytextnolink" onmouseover="this.className='smallgraytext'; return true;"
                        onmouseout="this.className='smallgraytextnolink'; ">
                        Label
                      </a>
                    </span></span><span class="uir-field inputreadonly" data-nsps-type="field_input">
                    RFC
                  </span>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div class="uir-field-wrapper" data-nsps-label="ID" data-nsps-type="field" data-field-type="identifier"
                  data-walkthrough="Field:scriptid" data-nsps-id="field_ID__1703531750825">
                  <span id="scriptid_fs_lbl_uir_label" class="smallgraytextnolink uir-label"
                    data-nsps-type="field_label"><span id="scriptid_fs_lbl" class="smallgraytextnolink" style=""
                      data-nsps-type="label">
                      <a tabindex="-1" title="What's this?" href='javascript:void("help")' style="cursor: help"
                        onclick="return nlFieldHelp('Field Help', 'scriptid', this, 'entitycustomfield', 'NA', '-1', 'UI', 'EDIT_CUSTENTITYFIELD', 'TSTDRV2014884', 'RECORD', 'F', '', 'Custom%20Entity%20Field', 'APP:FORMLABEL:ID', '')"
                        class="smallgraytextnolink" onmouseover="this.className='smallgraytext'; return true;"
                        onmouseout="this.className='smallgraytextnolink'; ">ID</a>
                    </span></span><span class="uir-field inputreadonly" data-nsps-type="field_input">
                    custentity36
                  </span>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div class="uir-field-wrapper" data-nsps-label="Internal ID" data-nsps-type="field"
                  data-field-type="integer" data-walkthrough="Field:id" data-nsps-id="field_InternalID__1703531750825">
                  <span id="id_fs_lbl_uir_label" class="smallgraytextnolink uir-label"
                    data-nsps-type="field_label"><span id="id_fs_lbl" class="smallgraytextnolink" style=""
                      data-nsps-type="label">
                      <a tabindex="-1" title="What's this?" href='javascript:void("help")' style="cursor: help"
                        onclick="return nlFieldHelp('Field Help', 'id', this, 'entitycustomfield', 'NA', '-1', 'UI', 'EDIT_CUSTENTITYFIELD', 'TSTDRV2014884', 'RECORD', 'F', '', 'Custom%20Entity%20Field', 'APP:FORMLABEL:INTERNAL_ID', '')"
                        class="smallgraytextnolink" onmouseover="this.className='smallgraytext'; return true;"
                        onmouseout="this.className='smallgraytextnolink'; ">Internal ID</a>
                    </span></span><span class="uir-field inputreadonly" data-nsps-type="field_input">
                    5516
                  </span>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div class="uir-field-wrapper" data-nsps-label="Owner" data-nsps-type="field" data-field-type="select"
                  data-walkthrough="Field:owner" data-nsps-id="field_Owner__1703531750825">
                  <span id="owner_fs_lbl_uir_label" class="smallgraytextnolink uir-label"
                    data-nsps-type="field_label"><span id="owner_fs_lbl" class="smallgraytextnolink" style=""
                      data-nsps-type="label">
                      <a tabindex="-1" title="What's this?" href='javascript:void("help")' style="cursor: help"
                        onclick="return nlFieldHelp('Field Help', 'owner', this, 'entitycustomfield', 'NA', '-1', 'UI', 'EDIT_CUSTENTITYFIELD', 'TSTDRV2014884', 'RECORD', 'F', '', 'Custom%20Entity%20Field', 'APP:FORMLABEL:OWNER', '')"
                        class="smallgraytextnolink" onmouseover="this.className='smallgraytext'; return true;"
                        onmouseout="this.className='smallgraytextnolink'; ">Owner</a>
                    </span></span><span class="uir-field inputreadonly" data-nsps-type="field_input">
                    <span class="inputreadonly"><a id="qsTarget_1650743736"
                        onmouseover="if (typeof getExtTooltip != 'undefined')var tip = getExtTooltip('qsTarget_1650743736', 'EMPLOYEE', 'DEFAULT_TEMPLATE', 2105,null);if(tip != undefined) tip.hoverShow(event);"
                        class="dottedlink" href="/app/common/entity/employee.nl?id=2105">Olivia King<span
                          style="padding-left: 5px"></span><img class="uir-hover-icon hoverindicator"
                          src="/images/hover/icon_hover.png?v=2023.2" alt="" border="0"
                          style="vertical-align: middle" /></a></span>
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
      <td valign="top">
        <table class="table_fields" border="0" cellspacing="0" cellpadding="0">
          <tbody>
            <tr>
              <td>
                <div class="uir-field-wrapper uir-long-text" data-nsps-label="Description" data-nsps-type="field"
                  data-field-type="textarea" data-walkthrough="Field:description"
                  data-nsps-id="field_Description__1703531750825">
                  <span id="description_fs_lbl_uir_label" class="smallgraytextnolink uir-label"
                    data-nsps-type="field_label"><span id="description_fs_lbl" class="smallgraytextnolink" style=""
                      data-nsps-type="label">
                      <a tabindex="-1" title="What's this?" href='javascript:void("help")' style="cursor: help"
                        onclick="return nlFieldHelp('Field Help', 'description', this, 'entitycustomfield', 'NA', '-1', 'UI', 'EDIT_CUSTENTITYFIELD', 'TSTDRV2014884', 'RECORD', 'F', '', 'Custom%20Entity%20Field', 'APP:FORMLABEL:DESCRIPTION', '')"
                        class="smallgraytextnolink" onmouseover="this.className='smallgraytext'; return true;"
                        onmouseout="this.className='smallgraytextnolink'; ">Description</a>
                    </span></span><span class="uir-field inputreadonly uir-resizable" data-nsps-type="field_input">
                    &nbsp;
                  </span>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div class="uir-field-wrapper" data-nsps-label="Type" data-nsps-type="field" data-field-type="select"
                  data-walkthrough="Field:fieldtype" data-nsps-id="field_Type__1703531750825">
                  <span id="fieldtype_fs_lbl_uir_label" class="smallgraytextnolink uir-label"
                    data-nsps-type="field_label"><span id="fieldtype_fs_lbl" class="smallgraytextnolink" style=""
                      data-nsps-type="label">
                      <a tabindex="-1" title="What's this?" href='javascript:void("help")' style="cursor: help"
                        onclick="return nlFieldHelp('Field Help', 'fieldtype', this, 'entitycustomfield', 'NA', '-1', 'UI', 'EDIT_CUSTENTITYFIELD', 'TSTDRV2014884', 'RECORD', 'F', '', 'Custom%20Entity%20Field', 'APP:FORMLABEL:TYPE', '')"
                        class="smallgraytextnolink" onmouseover="this.className='smallgraytext'; return true;"
                        onmouseout="this.className='smallgraytextnolink'; ">Type</a>
                    </span></span><span class="uir-field inputreadonly" data-nsps-type="field_input">
                    <span class="inputreadonly">Free-Form Text</span>
                  </span>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div class="uir-field-wrapper" data-nsps-label="List/Record" data-nsps-type="field"
                  data-field-type="select" data-walkthrough="Field:selectrecordtype"
                  data-nsps-id="field_List/Record__1703531750825">
                  <span id="selectrecordtype_fs_lbl_uir_label" class="smallgraytextnolink uir-label"
                    data-nsps-type="field_label"><span id="selectrecordtype_fs_lbl" class="smallgraytextnolink" style=""
                      data-nsps-type="label">
                      <a tabindex="-1" title="What's this?" href='javascript:void("help")' style="cursor: help"
                        onclick="return nlFieldHelp('Field Help', 'selectrecordtype', this, 'entitycustomfield', 'NA', '-1', 'UI', 'EDIT_CUSTENTITYFIELD', 'TSTDRV2014884', 'RECORD', 'F', '', 'Custom%20Entity%20Field', 'APP:FORMLABEL:LISTRECORD', '')"
                        class="smallgraytextnolink" onmouseover="this.className='smallgraytext'; return true;"
                        onmouseout="this.className='smallgraytextnolink'; ">List/Record</a>
                    </span></span><span class="uir-field inputreadonly" data-nsps-type="field_input">
                    <span class="inputreadonly"></span>
                  </span>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div class="uir-field-wrapper uir-inline-tag uir-onoff" data-nsps-label="Store Value"
                  data-nsps-type="field" data-field-type="checkbox" data-walkthrough="Field:storevalue"
                  data-nsps-id="field_StoreValue__1703531750825">
                  <span class="uir-field inputreadonly" data-nsps-type="field_input">
                    <span id="storevalue_fs" class="checkbox_read_ck"><img class="checkboximage"
                        src="/images/nav/ns_x.gif" alt="Checked" /></span>
                  </span>
                  <span id="storevalue_fs_lbl_uir_label" class="smallgraytextnolink uir-label"
                    data-nsps-type="field_label"><span id="storevalue_fs_lbl" class="checkboxSpan smallgraytextnolink"
                      style="" data-nsps-type="label">
                      <a tabindex="-1" title="What's this?" href='javascript:void("help")' style="cursor: help"
                        onclick="return nlFieldHelp('Field Help', 'storevalue', this, 'entitycustomfield', 'NA', '-1', 'UI', 'EDIT_CUSTENTITYFIELD', 'TSTDRV2014884', 'RECORD', 'F', '', 'Custom%20Entity%20Field', 'APP:FORMLABEL:STORE_VALUE', '')"
                        class="smallgraytextnolink" onmouseover="this.className='smallgraytext'; return true;"
                        onmouseout="this.className='smallgraytextnolink'; ">Store Value</a>
                    </span></span>
                </div>

                <div class="uir-field-wrapper uir-inline-tag uir-onoff" data-nsps-label="Use Encrypted Format"
                  data-nsps-type="field" data-field-type="checkbox" data-walkthrough="Field:encryptatrest"
                  data-nsps-id="field_UseEncryptedFormat__1703531750825">
                  <span class="uir-field inputreadonly" data-nsps-type="field_input">
                    <span id="encryptatrest_fs" class="checkbox_read_unck"><img class="checkboximage"
                        src="/images/nav/ns_x.gif" alt="Unchecked" /></span>
                  </span>
                  <span id="encryptatrest_fs_lbl_uir_label" class="smallgraytextnolink uir-label"
                    data-nsps-type="field_label"><span id="encryptatrest_fs_lbl"
                      class="checkboxSpan smallgraytextnolink" style="" data-nsps-type="label">
                      <a tabindex="-1" title="What's this?" href='javascript:void("help")' style="cursor: help"
                        onclick="return nlFieldHelp('Field Help', 'encryptatrest', this, 'entitycustomfield', 'NA', '-1', 'UI', 'EDIT_CUSTENTITYFIELD', 'TSTDRV2014884', 'RECORD', 'F', '', 'Custom%20Entity%20Field', 'APP:FORMLABEL:USE_ENCRYPTED_FORMAT', '')"
                        class="smallgraytextnolink" onmouseover="this.className='smallgraytext'; return true;"
                        onmouseout="this.className='smallgraytextnolink'; ">Use Encrypted Format</a>
                    </span></span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
      <td valign="top">
        <table class="table_fields" border="0" cellspacing="0" cellpadding="0">
          <tbody>
            <tr>
              <td>
                <div class="uir-field-wrapper uir-onoff" data-nsps-label="Show In List" data-nsps-type="field"
                  data-field-type="checkbox" data-walkthrough="Field:showinlist"
                  data-nsps-id="field_ShowInList__1703531750825">
                  <span class="uir-field inputreadonly" data-nsps-type="field_input">
                    <span id="showinlist_fs" class="checkbox_read_unck"><img class="checkboximage"
                        src="/images/nav/ns_x.gif" alt="Unchecked" /></span>
                  </span>
                  <span id="showinlist_fs_lbl_uir_label" class="smallgraytextnolink uir-label"
                    data-nsps-type="field_label"><span id="showinlist_fs_lbl" class="checkboxSpan smallgraytextnolink"
                      style="" data-nsps-type="label">
                      <a tabindex="-1" title="What's this?" href='javascript:void("help")' style="cursor: help"
                        onclick="return nlFieldHelp('Field Help', 'showinlist', this, 'entitycustomfield', 'NA', '-1', 'UI', 'EDIT_CUSTENTITYFIELD', 'TSTDRV2014884', 'RECORD', 'F', '', 'Custom%20Entity%20Field', 'APP:FORMLABEL:SHOW_IN_LIST', '')"
                        class="smallgraytextnolink" onmouseover="this.className='smallgraytext'; return true;"
                        onmouseout="this.className='smallgraytextnolink'; ">Show In List</a>
                    </span></span>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div class="uir-field-wrapper uir-onoff" data-nsps-label="Global Search" data-nsps-type="field"
                  data-field-type="checkbox" data-walkthrough="Field:globalsearch"
                  data-nsps-id="field_GlobalSearch__1703531750825">
                  <span class="uir-field inputreadonly" data-nsps-type="field_input">
                    <span id="globalsearch_fs" class="checkbox_read_unck"><img class="checkboximage"
                        src="/images/nav/ns_x.gif" alt="Unchecked" /></span>
                  </span>
                  <span id="globalsearch_fs_lbl_uir_label" class="smallgraytextnolink uir-label"
                    data-nsps-type="field_label"><span id="globalsearch_fs_lbl" class="checkboxSpan smallgraytextnolink"
                      style="" data-nsps-type="label">
                      <a tabindex="-1" title="What's this?" href='javascript:void("help")' style="cursor: help"
                        onclick="return nlFieldHelp('Field Help', 'globalsearch', this, 'entitycustomfield', 'NA', '-1', 'UI', 'EDIT_CUSTENTITYFIELD', 'TSTDRV2014884', 'RECORD', 'F', '', 'Custom%20Entity%20Field', 'APP:FORMLABEL:GLOBAL_SEARCH', '')"
                        class="smallgraytextnolink" onmouseover="this.className='smallgraytext'; return true;"
                        onmouseout="this.className='smallgraytextnolink'; ">Global Search</a>
                    </span></span>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div class="uir-field-wrapper uir-onoff" data-nsps-label="Record is Parent" data-nsps-type="field"
                  data-field-type="checkbox" data-walkthrough="Field:isparent"
                  data-nsps-id="field_RecordisParent__1703531750825">
                  <span class="uir-field inputreadonly" data-nsps-type="field_input">
                    <span id="isparent_fs" class="checkbox_read_unck"><img class="checkboximage"
                        src="/images/nav/ns_x.gif" alt="Unchecked" /></span>
                  </span>
                  <span id="isparent_fs_lbl_uir_label" class="smallgraytextnolink uir-label"
                    data-nsps-type="field_label"><span id="isparent_fs_lbl" class="checkboxSpan smallgraytextnolink"
                      style="" data-nsps-type="label">
                      <a tabindex="-1" title="What's this?" href='javascript:void("help")' style="cursor: help"
                        onclick="return nlFieldHelp('Field Help', 'isparent', this, 'entitycustomfield', 'NA', '-1', 'UI', 'EDIT_CUSTENTITYFIELD', 'TSTDRV2014884', 'RECORD', 'F', '', 'Custom%20Entity%20Field', 'APP:FORMLABEL:RECORD_IS_PARENT', '')"
                        class="smallgraytextnolink" onmouseover="this.className='smallgraytext'; return true;"
                        onmouseout="this.className='smallgraytextnolink'; ">Record is Parent</a>
                    </span></span>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div class="uir-field-wrapper uir-onoff" data-nsps-label="Available to SuiteSignOn"
                  data-nsps-type="field" data-field-type="checkbox" data-walkthrough="Field:availabletosso"
                  data-nsps-id="field_AvailabletoSuiteSignOn__1703531750825">
                  <span class="uir-field inputreadonly" data-nsps-type="field_input">
                    <span id="availabletosso_fs" class="checkbox_read_unck"><img class="checkboximage"
                        src="/images/nav/ns_x.gif" alt="Unchecked" /></span>
                  </span>
                  <span id="availabletosso_fs_lbl_uir_label" class="smallgraytextnolink uir-label"
                    data-nsps-type="field_label"><span id="availabletosso_fs_lbl"
                      class="checkboxSpan smallgraytextnolink" style="" data-nsps-type="label">
                      <a tabindex="-1" title="What's this?" href='javascript:void("help")' style="cursor: help"
                        onclick="return nlFieldHelp('Field Help', 'availabletosso', this, 'entitycustomfield', 'NA', '-1', 'UI', 'EDIT_CUSTENTITYFIELD', 'TSTDRV2014884', 'RECORD', 'F', '', 'Custom%20Entity%20Field', 'APP:FORMLABEL:AVAILABLE_TO_SUITESIGNON', '')"
                        class="smallgraytextnolink" onmouseover="this.className='smallgraytext'; return true;"
                        onmouseout="this.className='smallgraytextnolink'; ">Available to SuiteSignOn</a>
                    </span></span>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div class="uir-field-wrapper uir-onoff" data-nsps-label="Inactive" data-nsps-type="field"
                  data-field-type="checkbox" data-walkthrough="Field:inactive"
                  data-nsps-id="field_Inactive__1703531750825">
                  <span class="uir-field inputreadonly" data-nsps-type="field_input">
                    <span id="inactive_fs" class="checkbox_read_unck"><img class="checkboximage"
                        src="/images/nav/ns_x.gif" alt="Unchecked" /></span>
                  </span>
                  <span id="inactive_fs_lbl_uir_label" class="smallgraytextnolink uir-label"
                    data-nsps-type="field_label"><span id="inactive_fs_lbl" class="checkboxSpan smallgraytextnolink"
                      style="" data-nsps-type="label">
                      <a tabindex="-1" title="What's this?" href='javascript:void("help")' style="cursor: help"
                        onclick="return nlFieldHelp('Field Help', 'inactive', this, 'entitycustomfield', 'NA', '-1', 'UI', 'EDIT_CUSTENTITYFIELD', 'TSTDRV2014884', 'RECORD', 'F', '', 'Custom%20Entity%20Field', 'APP:FORMLABEL:INACTIVE', '')"
                        class="smallgraytextnolink" onmouseover="this.className='smallgraytext'; return true;"
                        onmouseout="this.className='smallgraytextnolink'; ">Inactive</a>
                    </span></span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>
<input name="id" id="id" type="hidden" value="5516">
<input name="type" id="type" type="hidden" value="custentityfield">
</form>`;

  expect(extractProperty(document)).toStrictEqual(["", ""]);
});

describe("getting the label field from the HTML element", () => {
  it("scrapping onclick attribute to get the field label", () => {
    const document = window.document;
    document.body
      .append(`<a tabindex="-1" title="What's this?" href='javascript:void("help")' style="cursor: help"
    onclick="return nlFieldHelp('Field Help', 'scriptid', this, 'entitycustomfield', 'NA', '-1', 'UI', 'EDIT_CUSTENTITYFIELD', 'TSTDRV2014884', 'RECORD', 'F', '', 'Custom%20Entity%20Field', 'APP:FORMLABEL:OWNER', '')"
    class="smallgraytextnolink" onmouseover="this.className='smallgraytext'; return true;"
    onmouseout="this.className='smallgraytextnolink'; ">PROPIETARIO</a>`);

    const element = document.querySelector("a") as HTMLAnchorElement;
    const label = gettingFieldLabel(element);
    
    expect(label).toBeTypeOf("string");
    expect(label).not.toBe("");
    expect(label).toBe("owner");
  });
});*/
