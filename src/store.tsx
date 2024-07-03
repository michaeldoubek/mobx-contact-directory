import { computed, makeAutoObservable } from "mobx";
import { previewData } from "./previewData";
import { createContext, ReactNode, useContext } from "react";
import { v4 as uuid } from "uuid";

export type Person = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
};

class Store {
  people: Person[] = previewData.people;
  personEditFormContext: "edit" | "create" | null = null;
  editSelectedPersonId: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  @computed
  get selectedPerson() {
    return (
      this.people.find((person) => person.id === this.editSelectedPersonId) ??
      null
    );
  }

  addNewPerson(person: Omit<Person, "id">) {
    this.people = [...this.people, { id: uuid(), ...person }];
  }

  updatePerson(id: string, updatedPersonRecord: Omit<Person, "id">) {
    this.people = this.people.map((person) =>
      person.id === id ? { id, ...updatedPersonRecord } : person,
    );
  }
}

const StoreContext = createContext<Store>(new Store());
export const useStoreContext = () => useContext(StoreContext);
export function StoreContextProvider(props: { children: ReactNode }) {
  return (
    <StoreContext.Provider value={new Store()}>
      {props.children}
    </StoreContext.Provider>
  );
}
