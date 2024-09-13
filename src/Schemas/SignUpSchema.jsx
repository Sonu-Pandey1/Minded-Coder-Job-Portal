import * as Yup from "yup"

export const SignupSchema = Yup.object({
    name: Yup.string().min(2).max(25).required("Please Enter Your name"),
    username: Yup.string().min(2).max(25).required("Please Enter Your User Name"),
    user: Yup.string().required("Please Select Your Type"),
    email: Yup.string().email().required("Please Enter Your Email"),
    e_email: Yup.string().email().required("Please Enter Your Email"),
    password: Yup.string().min(6).required("Please Enter Your Password"),
    e_password: Yup.string().min(8).required("Please Enter Your Password"),
    designation: Yup.string().required("Please Select Your Designation"),
    companyname: Yup.string().min(1).max(35).required("Please Enter Your Company Name"),
    c_password: Yup.string().oneOf([Yup.ref("password"), null], "Please Must Match"),
    e_c_password: Yup.string().oneOf([Yup.ref("password"), null], "Please Must Match"),

});