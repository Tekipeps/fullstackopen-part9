import React, { useState } from "react";
import axios from "axios";
import { apiBaseUrl } from "../constants";
import { useParams } from "react-router-dom";
import { SinglePatient, Entry } from "../types";
import { useStateValue } from "../state";
import { Header, Icon, Segment, Button } from "semantic-ui-react";
import { addSinglePatient } from "../state/reducer";
import EntryDetails from "./EntryDetails";
import EntryCodes from "./EntryCodes";
import NewEntryModal from "../NewEntryModal";

const SinglePatientPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [{ singlePatients }, dispatch] = useStateValue();
  const [error, setError] = useState<string | undefined>();
  const [patient, setPatient] = useState<SinglePatient | undefined>();
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  React.useEffect(() => {
    const getPatient = async () => {
      try {
        const { data: singlePatient } = await axios.get<SinglePatient>(
          `${apiBaseUrl}/patients/${id}`
        );
        dispatch(addSinglePatient(singlePatient));
      } catch (error) {
        console.log(error);
      }
    };
    if (id && Object.keys(singlePatients).includes(id)) {
      const foundPatient = Object.values(singlePatients).find(
        (p) => p.id === id
      );
      setPatient(foundPatient);
      // console.log("gotten from state");
    } else {
      getPatient();
      // console.log("gotten from api");
    }
  }, [id, dispatch, singlePatients]);

  if (!patient) return null;
  const openModal = (): void => setModalOpen(true);

  const closeModal = (): void => {setModalOpen(false); setError(undefined)};
  const submitNewEntry = (): void => {};

  return (
    <div>
      <Header as="h2">
        {patient.name}{" "}
        {patient.gender === "male" ? (
          <Icon name="mars" />
        ) : (
          <Icon name="venus" />
        )}
      </Header>
      <p>ssn: {patient.ssn}</p>
      <p>occupation: {patient.occupation}</p>
      {patient.entries.length > 0 ? (
        <Header as="h3">entries</Header>
      ) : (
        <Header as="h3">no entries</Header>
      )}

      {patient.entries.map((e: Entry) => (
        <Segment key={e.id}>
          <EntryDetails entry={e} />
        </Segment>
      ))}

      {patient.entries.map((e: Entry) => (
        <EntryCodes key={e.id} codes={e.diagnosisCodes} />
      ))}
      <NewEntryModal
        modalOpen={modalOpen}
        onClose={closeModal}
        onSubmit={submitNewEntry}
        error={error}
      />
      <Button onClick={() => openModal()}>new entry</Button>
    </div>
  );
};

export default SinglePatientPage;
