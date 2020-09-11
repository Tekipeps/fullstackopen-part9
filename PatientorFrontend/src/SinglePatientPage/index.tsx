import React from "react";
import axios from "axios";
import { apiBaseUrl } from "../constants";
import { useParams } from "react-router-dom";

const SinglePatientPage: React.FC = () => {
  const { id } = useParams();
  React.useEffect(() => {
    const getPatient = async () => {
      try {
        const data = await axios.get<void>(`${apiBaseUrl}/patients/${id}`);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getPatient();
  }, [id]);
  return <div>{id}</div>;
};

export default SinglePatientPage;
