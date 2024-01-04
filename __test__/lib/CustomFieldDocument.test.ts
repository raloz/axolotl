// @vitest-environment happy-dom
import { describe, it, expect, vi, beforeEach } from "vitest";
import { gettingCustomFieldList } from "@app/lib/CustomFieldDocument";
import CustomEntityList from "@test/templates/CustomEntityList.html?raw";

beforeEach(() => {
  vi.clearAllMocks();
});

describe("getting the HTML Page with a full CustomField List", () => {
  it("fetching the HTML Page", async () => {
    vi.spyOn(window, "fetch").mockImplementationOnce(() => {
      return Promise.resolve({
        status: 200, 
        text: () => Promise.resolve(CustomEntityList),
      } as Response);
    });

    const r = await gettingCustomFieldList("custentity");

    expect(r).not.toBeNull();
    expect(r).toMatch('Campos de entidad personalizados');
  });

  it("fetching the HTML page with status code: Internal Server Error", async() => {
    vi.spyOn(window, "fetch").mockImplementationOnce(() => {
      return Promise.resolve({
        status: 500, 
        text: () => Promise.resolve("")
      } as Response)
    });

    const r = await gettingCustomFieldList("custentity");
    expect(r).toBe("")
  });

  it("fetching the HTML page with status code: Not Found Error", async() => {
    vi.spyOn(window, "fetch").mockImplementationOnce(() => {
      return Promise.resolve({
        status: 400, 
        text: () => Promise.resolve("")
      } as Response)
    });

    const r = await gettingCustomFieldList("custentity");
    expect(r).toBe("")
  });
});
