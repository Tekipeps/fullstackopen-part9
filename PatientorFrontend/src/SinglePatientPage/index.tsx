import React, { useState } from "react";
import axios from "axios";
import { apiBaseUrl } from "../constants";
import { useParams } from "react-router-dom";
import { SinglePatient, Entry } from "../types";
import { useStateValue } from "../state";
import { Header, Icon, Card } from "semantic-ui-react";
import { addSinglePatient } from "../state/reducer";
// import EntryCodes from "./EntryCodes";
import EntryDetails from "./EntryDetails";

const SinglePatientPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [{ singlePatients }, dispatch] = useStateValue();
  const [patient, setPatient] = useState<SinglePatient | undefined>();
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
      console.log("gotten from state");
    } else {
      getPatient();
      console.log("gotten from api");
    }
  }, [id, dispatch, singlePatients]);

  if (!patient) return null;

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
      <p>ssn: {patient?.ssn}</p>
      <p>occupation: {patient?.occupation}</p>
      <Header as="h3">entries</Header>
      <Card.Group>
        {patient.entries.map((e: Entry) => (
          <EntryDetails entry={e} key={e.id} />
        ))}
      </Card.Group>
    </div>
  );
};

export default SinglePatientPage;
