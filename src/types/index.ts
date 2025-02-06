export type Patient = {
    id: string,
    name: string,
    owner: string,
    email: string,
    date: string,
    symptoms: string
}

export type DraftPatient = Omit <Patient, 'id'>