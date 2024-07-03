import type { Person } from "./store";

export const previewData = {
  people: [
    {
      id: "1",
      firstName: "John",
      lastName: "Woods",
      email: "woods.john@example.com",
      phone: "+17328971829",
      company: "C Technologies",
    },
    {
      id: "2",
      firstName: "Jane",
      lastName: "Doe",
      email: "jane.doe@example.com",
      phone: "+14257778899",
      company: "Acme Corp",
    },
    {
      id: "3",
      firstName: "Michael",
      lastName: "Smith",
      email: "michael.smith@example.com",
      phone: "+15237779988",
      company: "Tech Solutions",
    },
  ] as Person[],
};
