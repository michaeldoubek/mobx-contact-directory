import PersonCard from "./components/app/PersonCard";
import PersonEditSheet from "./components/app/PersonEditSheet";
import { Button } from "./components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import { observer } from "mobx-react-lite";
import { useStoreContext } from "./store";

function App() {
  const store = useStoreContext();

  return (
    <main className="p-4">
      <PersonEditSheet />
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {store.people.map((person) => (
          <PersonCard
            {...person}
            onEdit={() => {
              store.personEditFormContext = "edit";
              store.editSelectedPersonId = person.id;
            }}
          />
        ))}
      </section>
      <section className="text-center my-16">
        <Button
          onClick={() => {
            store.personEditFormContext = "create";
          }}
        >
          <PlusIcon className="mr-2 h-4 w-4" /> Add new
        </Button>
      </section>
    </main>
  );
}

export default observer(App);
