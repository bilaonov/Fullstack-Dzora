import * as yup from 'yup'

export const loginSchema = yup.object().shape({
    email: yup.string().required('Обязательное поле'),
    password: yup.string().required('Обязательное поле'),
})

export const registerSchema = yup.object().shape({
    name: yup.string().required('Обязательное поле'),
    email: yup.string().required('Обязательное поле'),
    password: yup.string().required('Обязательное поле'),
    password2: yup.string().required('Обязательное поле'),
})
