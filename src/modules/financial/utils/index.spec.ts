import { FinancialRecord } from "../entities/FinancialRecord";

import { suggestNextCode } from ".";

describe("suggestNextCode", () => {
  it("should suggest the next code correctly for parent '1'", () => {
    const records = [
      {
        id: "45e2a0c9-a861-419b-89bd-5284f5553e5b",
        code: "1",
        title: "Record 1",
        parentId: null,
      },
      {
        id: "8268c784-63b5-4391-bb2d-6b37446f0720",
        code: "2",
        title: "Record 2",
        parentId: null,
      },
    ] as FinancialRecord[];

    const parentId = "45e2a0c9-a861-419b-89bd-5284f5553e5b";
    const nextCodeSuggested = suggestNextCode(records, parentId);
    expect(nextCodeSuggested).toBe("1.1");
  });

  it("should suggest the next code correctly for parent '2'", () => {
    const records = [
      {
        id: "45e2a0c9-a861-419b-89bd-5284f5553e5b",
        code: "1",
        title: "Record 1",
        parentId: null,
      },
      {
        id: "8268c784-63b5-4391-bb2d-6b37446f0720",
        code: "2",
        title: "Record 2",
        parentId: null,
      },
    ] as FinancialRecord[];

    const parentId = "8268c784-63b5-4391-bb2d-6b37446f0720";
    const nextCodeSuggested = suggestNextCode(records, parentId);
    expect(nextCodeSuggested).toBe("2.1");
  });

  it("should suggest the next code correctly for parent '1' sibling", () => {
    const records: FinancialRecord[] = [
      {
        id: "45e2a0c9-a861-419b-89bd-5284f5553e5b",
        code: "1",
        title: "Record 1",
        parentId: null,
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

  it("should suggest the next code correctly for parent '1' sibling 2", () => {
    const records: FinancialRecord[] = [
      {
        id: "45e2a0c9-a861-419b-89bd-5284f5553e5b",
        code: "1",
        title: "Record 1",
        parentId: null,
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

  it("should suggest the next code correctly for parent '1' sibling not ordered", () => {
    const records: FinancialRecord[] = [
      {
        id: "45e2a0c9-a861-419b-89bd-5284f5553e5b",
        code: "1",
        title: "Record 1",
        parentId: null,
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

  it("should suggest the next code correctly for parent '1.1'", () => {
    const records: FinancialRecord[] = [
      {
        id: "45e2a0c9-a861-419b-89bd-5284f5553e5b",
        code: "1",
        title: "Record 1",
        parentId: null,
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

  it("should suggest the next code correctly for parent '1.1' sibling", () => {
    const records: FinancialRecord[] = [
      {
        id: "45e2a0c9-a861-419b-89bd-5284f5553e5b",
        code: "1",
        title: "Record 1",
        parentId: null,
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

  it("should suggest the next code correctly for parent '1.12.1'", () => {
    const records: FinancialRecord[] = [
      {
        id: "45e2a0c9-a861-419b-89bd-5284f5553e5b",
        code: "1",
        title: "Record 1",
        parentId: null,
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

  it("should suggest the next code correctly for parent '1.2.999", () => {
    const records: FinancialRecord[] = [
      {
        id: "45e2a0c9-a861-419b-89bd-5284f5553e5b",
        code: "1",
        title: "Record 1",
        parentId: null,
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

  it("should suggest the next code correctly for parent '1.2.999", () => {
    const records: FinancialRecord[] = [
      {
        id: "45e2a0c9-a861-419b-89bd-5284f5553e5b",
        code: "1",
        title: "Record 1",
        parentId: null,
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
});
