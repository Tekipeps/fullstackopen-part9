import React from "react";
import { HospitalEntry } from "../types";
import { Modal, Segment } from "semantic-ui-react";
import { AddEntryForm, EntryFormValues } from "./AddEntryForm";

type NewFormEntry = Omit<HospitalEntry, "id" | "date">;

interface Props {
  modalOpen: boolean;
  onClose: () => void;
  onSubmit: (values: EntryFormValues) => void;
  error?: string;
}
const NewEntryModal: React.FC<Props> = ({
  modalOpen,
  onClose,
  onSubmit,
  error,
}) => {
  return (
    <Modal open={modalOpen} onClose={onClose} centered={false} closeIcon>
      <Modal.Header>Add Entry</Modal.Header>
      <Modal.Content>
        {error && (
          <Segment inverted color="red">
            {`Error: ${error}`}
          </Segment>
        )}
        <AddEntryForm onSubmit={onSubmit} onCancel={onClose} />
      </Modal.Content>
    </Modal>
  );
};

export default NewEntryModal;
