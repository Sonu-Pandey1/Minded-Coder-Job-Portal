import * as Yup from 'yup';

export const SignInSchema = Yup.object({

    username: Yup.string().email().required("Please Enter Your User Name."),
    password: Yup.string().min(6).required("Please Enter Currect Password.")

});
