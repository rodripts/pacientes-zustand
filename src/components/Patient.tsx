import { usePatientStore } from "../store/store"
import { toast } from "react-toastify"


type PatientProps = {
  name: string
  owner:string
  email:string
  date:string
  symptoms:string
  id: string
}

export const Patient = ({name, owner, email, date, symptoms, id}: PatientProps) => {
  const {deletePatient, getPatientById} = usePatientStore()

  return (
    <div className="bg-white m-6 p-6 rounded-md shadow-md">
        <div>
            <h3>ID: <span className="font-bold">{id}</span></h3>
            <h3>Nombre: <span className="font-bold">{name}</span> </h3>
            <h3>Propietario: <span className="font-bold">{owner}</span> </h3>
            <h3>Email: <span className="font-bold">{email}</span> </h3>
            <h3>Fecha de salida: <span className="font-bold">{date}</span> </h3>
            <h3>Sintomas: <span className="font-bold">{symptoms}</span> </h3>
        </div>
        <div className="flex justify-between my-4">
            <button onClick={() => getPatientById(id)} className="bg-yellow-500 text-white px-4 py-2 rounded-md font-semibold">Editar</button>
            <button onClick={() => {deletePatient(id), toast('Paciente eliminado correctamente', {type:'error'})}} className="bg-yellow-500 text-white px-4 py-2 rounded-md font-semibold">Eliminar</button>
        </div>
    </div>
  )
}
