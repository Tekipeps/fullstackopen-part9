import React from "react";
import axios from "axios";
import { Diagnosis } from "../types";
import { apiBaseUrl } from "../constants";
import { useStateValue, setDiagnosisList } from "../state";

const EntryCodes: React.FC<{ codes: Array<Diagnosis["code"]> | undefined }> = ({
  codes,
}) => {
  const [{ diagnoses }, dispatch] = useStateValue();
  React.useEffect(() => {
    const fetchDiagnoses = async () => {
      const { data } = await axios.get(`${apiBaseUrl}/diagnoses/`);
      dispatch(setDiagnosisList(data));
    };
    fetchDiagnoses();
  }, [dispatch]);

  if (!codes) return null;
  return (
    <>
      {Object.values(diagnoses).map((d) =>
        codes.includes(d.code) ? (
          <li key={d.code}>
            {d.code} {d.name}
          </li>
        ) : null
      )}
    </>
  );
};

export default EntryCodes;
