import * as yup from 'yup'

export const loginSchema = yup.object().shape({
    email: yup.string().email('Некоректный email').required('Введите почту'),
    password: yup.string().min(6, '​Минимальная длина пароля 6 символов').required(),
})

export const registerSchema = yup.object().shape({
    name: yup.string().required('Введите имя'),
    email: yup.string().email('Неправильный email').required('Введите почту'),
    password: yup.string().min(6, '​Минимальная длина пароля 6 символов').required(),
    password2: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Пароли не совпадают')
        .required('Обязательное поле'),
})
