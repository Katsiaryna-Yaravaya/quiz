import {FieldValues, UseFormRegister, ValidationRule} from "react-hook-form";

import {useEffect, useState} from "react";

interface Props {
    className: string,
    fieldName: string,
    errorClassName: string,
    placeholder?: string,
    errorNotification: string,
    autoComplete?: string,
    type?: string,
    options: {
        required?: boolean,
        pattern?: ValidationRule<RegExp> | undefined,
        min?: number,
        max?: number,
        minLength?: number,
        maxLength?: number
    },
    error: { [p: string]: any },
    register: UseFormRegister<FieldValues>,
}

const RegistrationsInput = ({className, error, fieldName, errorClassName, errorNotification,
                                options: {required, pattern, min, max, minLength, maxLength},
                                autoComplete, placeholder, type, register}: Props) => {

    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        !!error ? setErrorMessage(' error') : setErrorMessage('')
    }, [error])

    return (
        <>
            <input className={className + errorMessage} type={type} placeholder={placeholder}
                   autoComplete={autoComplete} {...register(fieldName, {required, pattern, min, max, minLength, maxLength})}/>
            {!!error && <span className={errorClassName}>{errorNotification}</span>}
        </>
    )
}

export default RegistrationsInput
