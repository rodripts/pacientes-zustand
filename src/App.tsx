import { Form } from "./components/Form"
import { Patient } from "./components/Patient"
import { usePatientStore } from "./store/store"
import { ToastContainer } from "react-toastify"

function App() {
  const {patients} = usePatientStore()
  return (
    <>
      <div className="w-3/4 m-auto">
        <h1 className="my-4 font-bold text-4xl text-center text-yellow-500">Seguimiento de pacientes</h1>
        <div className="flex flex-col justify-between text-black md:h-screen md:flex-row">
          <Form />
          <div className="overflow-y-scroll">
            {
              patients.length === 0 ? (
                <h3 className="font-bold uppercase text-center my-6">Todavia no tienes pacientes...</h3>
              ) 
              : (
                <h3 className="font-bold uppercase text-center">Lista de pacientes</h3>
              )
            }
            {patients.map(patient => (
              <Patient
                key={patient.id}
                id={patient.id}
                name={patient.name}
                owner={patient.owner}
                email={patient.email}
                date={patient.date}
                symptoms={patient.symptoms}
              />
            ))}
          </div>
        </div>
      </div>
      <ToastContainer/>
    </>
  )
}

export default App
