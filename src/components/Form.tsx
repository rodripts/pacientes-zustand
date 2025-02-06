import { useForm } from 'react-hook-form';
import { Error } from './Error';
import { DraftPatient } from '../types';
import { usePatientStore } from '../store/store';
import { useEffect } from 'react';
import { toast } from 'react-toastify'

export const Form = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset
  } = useForm<DraftPatient>();

  const {addPatient, updatePatient, patients, activeId} = usePatientStore()

  const registerPatient = (data: DraftPatient) => {
    if(activeId){
      updatePatient(data)
      toast.info('Paciente aactualizado')
    } else {
      addPatient(data)
      toast.success('Paciente agregado')
    }
    reset()
  }

  useEffect(() => {
    if(activeId) {
      const activePatient = patients.filter(patient => patient.id === activeId)[0]
      setValue('name', activePatient.name)
      setValue('owner', activePatient.owner)
      setValue('email', activePatient.email)
      setValue('date', activePatient.date)
      setValue('symptoms', activePatient.symptoms)

    }
  }, [activeId])

  return (
    <div className="m-6 bg-white p-6 rounded-md">
        <h3 className="font-bold uppercase">Añade pacientes</h3>
        <form className="flex flex-col" action="" onSubmit={handleSubmit(registerPatient)}>
          <label htmlFor="" className="font-semibold mt-2">Paciente</label>
          <input className="border-1 rounded-md p-2 border-gray-400" type="text" {...register('name', {required: 'Este campo es obligatorio'})}/>
          {errors.name && (
            <Error>
              {errors.name.message?.toString()}
            </Error>
          )}

          <label htmlFor="" className="font-semibold mt-2">Propietario</label>
          <input className="border-1 rounded-md p-2 border-gray-400" type="text" {...register('owner', {required: 'Este campo es obligatorio'})}/>
          {errors.owner && (
            <Error>
              {errors.owner?.message?.toString()}
            </Error>
          )}

          <label htmlFor="" className="font-semibold mt-2">Email</label>
          <input className="border-1 rounded-md p-2 border-gray-400" type="text" {...register("email", {
            required: "El Email es Obligatorio",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Email No Válido'
            }
          })} />
          {errors.email && (
            <Error>
              {errors.email?.message?.toString()}
            </Error>
          )}

          <label htmlFor="" className="font-semibold mt-2">Fecha de alta</label>
          <input className="border-1 rounded-md p-2 border-gray-400" type="date" {...register('date', {required:'Este campo es obligatorio'})}/>
          {errors.date && (
            <Error>
              {errors.date?.message?.toString()}
            </Error>
          )}

          <label htmlFor="" className="font-semibold mt-2">Sintomas</label>
          <textarea className="border-1 rounded-md p-2 border-gray-400" {...register('symptoms',{required: 'Este campo es obligatorio'})}></textarea>
          {errors.symptoms && (
            <Error>
              {errors.symptoms?.message?.toString()}
            </Error>
          )}


          <button className="bg-yellow-500 text-white px-4 py-2 rounded-md my-4 font-semibold">Guardar paciente</button>

        </form>
    </div>
  )
}
