import React, { useState } from "react";
import axios from "axios";
import { apiBaseUrl } from "../constants";
import { useParams } from "react-router-dom";
import { SinglePatient } from "../types";
import { useStateValue } from "../state";
import { Header, Icon } from "semantic-ui-react";

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
        dispatch({ type: "ADD_SINGLE_PATIENT", payload: singlePatient });
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

  return (
    <div>
      <Header as="h2">
        {patient?.name}{" "}
        {patient?.gender === "male" ? (
          <Icon name="mars" />
        ) : (
          <Icon name="venus" />
        )}
      </Header>
    </div>
  );
};

export default SinglePatientPage;
