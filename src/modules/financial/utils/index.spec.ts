import { FinancialRecord } from "../entities/FinancialRecord";

import { suggestNextCode } from ".";

describe("suggestNextCode", () => {
  it("should suggest '1.1' for a new child of '1' with no existing children", () => {
    const records = [
      {
        id: "45e2a0c9-a861-419b-89bd-5284f5553e5b",
        code: "1",
        title: "Record 1",
        parentId: "",
      },
      {
        id: "8268c784-63b5-4391-bb2d-6b37446f0720",
        code: "2",
        title: "Record 2",
        parentId: "",
      },
    ] as FinancialRecord[];

    const parentId = "45e2a0c9-a861-419b-89bd-5284f5553e5b";
    const nextCodeSuggested = suggestNextCode(records, parentId);
    expect(nextCodeSuggested).toBe("1.1");
  });

  it("should suggest '2.1' for a new child of '2' with no existing children", () => {
    const records = [
      {
        id: "45e2a0c9-a861-419b-89bd-5284f5553e5b",
        code: "1",
        title: "Record 1",
        parentId: "",
      },
      {
        id: "8268c784-63b5-4391-bb2d-6b37446f0720",
        code: "2",
        title: "Record 2",
        parentId: "",
      },
    ] as FinancialRecord[];

    const parentId = "8268c784-63b5-4391-bb2d-6b37446f0720";
    const nextCodeSuggested = suggestNextCode(records, parentId);
    expect(nextCodeSuggested).toBe("2.1");
  });

  it("should suggest '1.2' for an additional child of '1' with existing child '1.1'", () => {
    const records: FinancialRecord[] = [
      {
        id: "45e2a0c9-a861-419b-89bd-5284f5553e5b",
        code: "1",
        title: "Record 1",
        parentId: "",
      },
      {
        id: "bb376e30-2082-4c69-b0c0-9328668c19de",
        code: "1.1",
        title: "Record 1.1",
        parentId: "45e2a0c9-a861-419b-89bd-5284f5553e5b",
      },
    ] as FinancialRecord[];

    const parentId = "45e2a0c9-a861-419b-89bd-5284f5553e5b";
    const nextCodeSuggested = suggestNextCode(records, parentId);
    expect(nextCodeSuggested).toBe("1.2");
  });

  it("should suggest '1.3' for an additional child of '1' with existing children '1.1' and '1.2'", () => {
    const records: FinancialRecord[] = [
      {
        id: "45e2a0c9-a861-419b-89bd-5284f5553e5b",
        code: "1",
        title: "Record 1",
        parentId: "",
      },
      {
        id: "bb376e30-2082-4c69-b0c0-9328668c19de",
        code: "1.1",
        title: "Record 1.1",
        parentId: "45e2a0c9-a861-419b-89bd-5284f5553e5b",
      },
      {
        id: "6db32494-8b13-4561-9197-d37086501748",
        code: "1.2",
        title: "Record 1.2",
        parentId: "45e2a0c9-a861-419b-89bd-5284f5553e5b",
      },
    ] as FinancialRecord[];

    const parentId = "45e2a0c9-a861-419b-89bd-5284f5553e5b";
    const nextCodeSuggested = suggestNextCode(records, parentId);
    expect(nextCodeSuggested).toBe("1.3");
  });

  it("should suggest '1.3' for an additional child of '1' with existing children '1.1' and '1.2' in unordered arrangement", () => {
    const records: FinancialRecord[] = [
      {
        id: "45e2a0c9-a861-419b-89bd-5284f5553e5b",
        code: "1",
        title: "Record 1",
        parentId: "",
      },
      {
        id: "6db32494-8b13-4561-9197-d37086501748",
        code: "1.2",
        title: "Record 1.2",
        parentId: "45e2a0c9-a861-419b-89bd-5284f5553e5b",
      },
      {
        id: "bb376e30-2082-4c69-b0c0-9328668c19de",
        code: "1.1",
        title: "Record 1.1",
        parentId: "45e2a0c9-a861-419b-89bd-5284f5553e5b",
      },
    ] as FinancialRecord[];

    const parentId = "45e2a0c9-a861-419b-89bd-5284f5553e5b";
    const nextCodeSuggested = suggestNextCode(records, parentId);
    expect(nextCodeSuggested).toBe("1.3");
  });

  it("should suggest '1.2.1' for a new child of '1.2' with no existing children", () => {
    const records: FinancialRecord[] = [
      {
        id: "45e2a0c9-a861-419b-89bd-5284f5553e5b",
        code: "1",
        title: "Record 1",
        parentId: "",
      },
      {
        id: "bb376e30-2082-4c69-b0c0-9328668c19de",
        code: "1.1",
        title: "Record 1.1",
        parentId: "45e2a0c9-a861-419b-89bd-5284f5553e5b",
      },
      {
        id: "6db32494-8b13-4561-9197-d37086501748",
        code: "1.2",
        title: "Record 1.2",
        parentId: "45e2a0c9-a861-419b-89bd-5284f5553e5b",
      },
    ] as FinancialRecord[];

    const parentId = "6db32494-8b13-4561-9197-d37086501748";
    const nextCodeSuggested = suggestNextCode(records, parentId);
    expect(nextCodeSuggested).toBe("1.2.1");
  });

  it("should suggest '1.2.2' for an additional child of '1.2' with existing child '1.2.1'", () => {
    const records: FinancialRecord[] = [
      {
        id: "45e2a0c9-a861-419b-89bd-5284f5553e5b",
        code: "1",
        title: "Record 1",
        parentId: "",
      },
      {
        id: "bb376e30-2082-4c69-b0c0-9328668c19de",
        code: "1.1",
        title: "Record 1.1",
        parentId: "45e2a0c9-a861-419b-89bd-5284f5553e5b",
      },
      {
        id: "6db32494-8b13-4561-9197-d37086501748",
        code: "1.2",
        title: "Record 1.2",
        parentId: "45e2a0c9-a861-419b-89bd-5284f5553e5b",
      },
      {
        id: "a4d36712-f6dd-412e-85d3-2fe7d0b03e3a",
        code: "1.2.1",
        title: "Record 1.2.1",
        parentId: "6db32494-8b13-4561-9197-d37086501748",
      },
    ] as FinancialRecord[];

    const parentId = "6db32494-8b13-4561-9197-d37086501748";
    const nextCodeSuggested = suggestNextCode(records, parentId);
    expect(nextCodeSuggested).toBe("1.2.2");
  });

  it("should suggest '1.2.3' for an additional child of '1.2' with existing children '1.2.1' and '1.2.2'", () => {
    const records: FinancialRecord[] = [
      {
        id: "45e2a0c9-a861-419b-89bd-5284f5553e5b",
        code: "1",
        title: "Record 1",
        parentId: "",
      },
      {
        id: "bb376e30-2082-4c69-b0c0-9328668c19de",
        code: "1.1",
        title: "Record 1.1",
        parentId: "45e2a0c9-a861-419b-89bd-5284f5553e5b",
      },
      {
        id: "6db32494-8b13-4561-9197-d37086501748",
        code: "1.2",
        title: "Record 1.2",
        parentId: "45e2a0c9-a861-419b-89bd-5284f5553e5b",
      },
      {
        id: "70ed45bf-de4a-4ae3-80ea-fbc4fac89f60",
        code: "1.2.1",
        title: "Record 1.2.1",
        parentId: "6db32494-8b13-4561-9197-d37086501748",
      },
      {
        id: "94a92160-9572-4a64-b9f3-6ffa1928dd35",
        code: "1.2.2",
        title: "Record 1.2.2",
        parentId: "6db32494-8b13-4561-9197-d37086501748",
      },
    ] as FinancialRecord[];

    const parentId = "6db32494-8b13-4561-9197-d37086501748";
    const nextCodeSuggested = suggestNextCode(records, parentId);
    expect(nextCodeSuggested).toBe("1.2.3");
  });

  it("should suggest '1.3' for an additional child of '1' when '1.2' has maximum number of children (999)", () => {
    const records: FinancialRecord[] = [
      {
        id: "45e2a0c9-a861-419b-89bd-5284f5553e5b",
        code: "1",
        title: "Record 1",
        parentId: "",
      },
      {
        id: "bb376e30-2082-4c69-b0c0-9328668c19de",
        code: "1.1",
        title: "Record 1.1",
        parentId: "45e2a0c9-a861-419b-89bd-5284f5553e5b",
      },
      {
        id: "6db32494-8b13-4561-9197-d37086501748",
        code: "1.2",
        title: "Record 1.2",
        parentId: "45e2a0c9-a861-419b-89bd-5284f5553e5b",
      },
      {
        id: "a4d36712-f6dd-412e-85d3-2fe7d0b03e3a",
        code: "1.2.999",
        title: "Record 1.2.999",
        parentId: "6db32494-8b13-4561-9197-d37086501748",
      },
    ] as FinancialRecord[];

    const parentId = "6db32494-8b13-4561-9197-d37086501748";
    const nextCodeSuggested = suggestNextCode(records, parentId);
    expect(nextCodeSuggested).toBe("1.3");
  });

  it("should suggest '1.3' for an additional child of '1' when '1.2' has maximum number of children (999) in different arrangement", () => {
    const records: FinancialRecord[] = [
      {
        id: "45e2a0c9-a861-419b-89bd-5284f5553e5b",
        code: "1",
        title: "Record 1",
        parentId: "",
      },
      {
        id: "bb376e30-2082-4c69-b0c0-9328668c19de",
        code: "1.1",
        title: "Record 1.1",
        parentId: "45e2a0c9-a861-419b-89bd-5284f5553e5b",
      },
      {
        id: "6db32494-8b13-4561-9197-d37086501748",
        code: "1.2",
        title: "Record 1.2",
        parentId: "45e2a0c9-a861-419b-89bd-5284f5553e5b",
      },
      {
        id: "a4d36712-f6dd-412e-85d3-2fe7d0b03e3a",
        code: "1.2.999",
        title: "Record 1.2.999",
        parentId: "6db32494-8b13-4561-9197-d37086501748",
      },
    ] as FinancialRecord[];

    const parentId = "6db32494-8b13-4561-9197-d37086501748";
    const nextCodeSuggested = suggestNextCode(records, parentId);
    expect(nextCodeSuggested).toBe("1.3");
  });

  it("should suggest '999.1' for a new child of '999' with no existing children", () => {
    const records: FinancialRecord[] = [
      {
        id: "45e2a0c9-a861-419b-89bd-5284f5553e5b",
        code: "1",
        title: "Record 1",
        parentId: "",
      },
      {
        id: "3046ab0f-c427-4703-91eb-fed29ed38580",
        code: "2",
        title: "Record 2",
        parentId: "",
      },
      {
        id: "0d0b27c6-bda2-425c-8d69-75f5d2e127a9",
        code: "999",
        title: "Record 999",
        parentId: "",
      },
      {
        id: "bb376e30-2082-4c69-b0c0-9328668c19de",
        code: "1.1",
        title: "Record 1.1",
        parentId: "45e2a0c9-a861-419b-89bd-5284f5553e5b",
      },
      {
        id: "6db32494-8b13-4561-9197-d37086501748",
        code: "1.2",
        title: "Record 1.2",
        parentId: "45e2a0c9-a861-419b-89bd-5284f5553e5b",
      },
      {
        id: "a4d36712-f6dd-412e-85d3-2fe7d0b03e3a",
        code: "1.2.999",
        title: "Record 1.2.999",
        parentId: "6db32494-8b13-4561-9197-d37086501748",
      },
    ] as FinancialRecord[];

    const parentId = "0d0b27c6-bda2-425c-8d69-75f5d2e127a9";
    const nextCodeSuggested = suggestNextCode(records, parentId);
    expect(nextCodeSuggested).toBe("999.1");
  });

  it("should return an empty string for a new child of '999' when '999' has maximum number of children (999)", () => {
    const records: FinancialRecord[] = [
      {
        code: "1",
        id: "430c8955-6982-4a0e-8238-51d7564f7f08",
        parentId: "",
        title: "Conta A",
      },
      {
        code: "999",
        id: "9e4ac307-2797-4085-b285-c56aad7c07ca",
        parentId: "",
        title: "aa",
      },
      {
        code: "999.998",
        id: "39b75795-0ee1-4d25-b1f5-56ed09318bf4",
        parentId: "9e4ac307-2797-4085-b285-c56aad7c07ca",
        title: "ag",
      },
      {
        code: "999.999",
        id: "a0e2a438-cdb9-483f-b000-7703fa5312a8",
        parentId: "9e4ac307-2797-4085-b285-c56aad7c07ca",
        title: "bb",
      },
    ] as FinancialRecord[];

    const parentId = "9e4ac307-2797-4085-b285-c56aad7c07ca";
    const nextCodeSuggested = suggestNextCode(records, parentId);
    expect(nextCodeSuggested).toBe("");
  });
});
