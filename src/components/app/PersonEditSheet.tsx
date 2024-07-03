import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import PersonEditForm from "./PersonEditForm";
import { observer } from "mobx-react-lite";
import { Person, useStoreContext } from "../../store";
import { DEFAULT_VALUES_FOR_EMPTY_PERSON_RECORD } from "./personFormSchema";
import { defaultTo, pipe } from "ramda";

function PersonEditSheet() {
  const store = useStoreContext();

  const handleClose = () => {
    store.personEditFormContext = null;
    store.editSelectedPersonId = null;
  };

  const handleUpdate = (updatedPersonRecord: Omit<Person, "id">) =>
    store.updatePerson(store.editSelectedPersonId!, updatedPersonRecord);

  const handleCreate = (newPersonRecord: Omit<Person, "id">) =>
    store.addNewPerson(newPersonRecord);

  return (
    <Sheet
      open={store.personEditFormContext !== null}
      onOpenChange={(open) => !open && handleClose()}
    >
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit person</SheetTitle>
        </SheetHeader>
        <PersonEditForm
          defaultValues={defaultFormValuesOr(store.selectedPerson)}
          onSave={
            store.personEditFormContext === "edit"
              ? pipe(handleUpdate, handleClose)
              : pipe(handleCreate, handleClose)
          }
        />
      </SheetContent>
    </Sheet>
  );
}

const defaultFormValuesOr = defaultTo(DEFAULT_VALUES_FOR_EMPTY_PERSON_RECORD);

export default observer(PersonEditSheet);
