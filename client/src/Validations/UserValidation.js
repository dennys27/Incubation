import * as yup from "yup";


export const loginSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    pasword:yup.string().min(4).max(10).required()
})