import * as Yup from 'yup';

export const SignInSchema = Yup.object({

    email: Yup.string().email().required("Please Enter Your User email."),
    password: Yup.string().min(6).required("Please Enter Currect Password."),
    remember: Yup.boolean(), 
});
