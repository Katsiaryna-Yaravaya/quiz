import {useForm, ValidationRule} from "react-hook-form";
import {useEffect, useState} from "react";
import './index.css'

interface Props {
  className: string,
  fieldName: string,
  errorClassName:string,
  errorNotification: string,
  autoComplete?: string,
  type?: string,
  options: {
    required?: boolean,
    pattern?:  ValidationRule<RegExp> | undefined,
    min?: number,
    max?: number,
    minLength?: number
  }
}

const RegistrationsInput = ({className,  fieldName, errorClassName, errorNotification, options: {required, pattern, min, max}, autoComplete }: Props) => {
  const { register, formState: {errors} } = useForm({mode:'onBlur'});

  const [errorMessage, setErrorMessage]=useState('')
  const emptyOrder = !Object.keys(errors).length

  useEffect(()=> {
    !emptyOrder ? setErrorMessage(' error') : setErrorMessage('')
  },[emptyOrder] )

  return(
      <>
          <input className={className + errorMessage} autoComplete={autoComplete} {...register(fieldName, {required, pattern, min, max})}/>
          {!emptyOrder && <span className={errorClassName}>{errorNotification}</span>}
      </>
  )
}

export default RegistrationsInput
