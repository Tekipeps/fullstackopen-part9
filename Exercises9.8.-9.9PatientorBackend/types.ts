export interface DiagnoseEntry {
  code: string;
  name: string;
  latin?: string;
}
export type Diagnoses = Array<DiagnoseEntry>;
export type NonSensitiveDiagnoseEntry = Omit<DiagnoseEntry, "comment">;
