


import * as Yup from 'yup';

let regexPass = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";

export const SignupSchema = Yup.object({
    selectedCategory: Yup.string().required('Please select a category'),

    name: Yup.string().when('selectedCategory', {
        is: 'employer',
        then: () => Yup.string().min(2).max(25).required("Please Enter Your Name"),
        otherwise: () => Yup.string().nullable(),
    }),

    username: Yup.string().when('selectedCategory', {
        is: 'candidate',
        then: () => Yup.string().min(2).max(25).required("Please Enter Your User Name"),
        otherwise: () => Yup.string().nullable(),
    }),

    email: Yup.string().when('selectedCategory', {
        is: 'candidate',
        then: () => Yup.string().email().required("Please Enter Your Email"),
        otherwise: () => Yup.string().nullable(),
    }),

    Eemail: Yup.string().when('selectedCategory', {
        is: 'employer',
        then: () => Yup.string().email().required("Please Enter Your Email"),
        otherwise: () => Yup.string().nullable(),
    }),

    password: Yup.string().when('selectedCategory', {
        is: 'candidate',
        then: () => Yup.string().min(6).required("Password must be at least 6 characters long.").matches(regexPass, "Password must be include uppercase, lowercase, number, and symbol"),
        otherwise: () => Yup.string().nullable(),
    }),

    Epassword: Yup.string().when('selectedCategory', {
        is: 'employer',
        then: () => Yup.string().min(8).required("Password must be at least 8 characters long").matches(regexPass, "Password must be include uppercase, lowercase, number, and symbol"),
        otherwise: () => Yup.string().nullable(),
    }),

    Cpassword: Yup.string().when('selectedCategory', {
        is: 'candidate',
        then: () => Yup.string().oneOf([Yup.ref('password'), null], "Passwords must match").required("Please Confirm Your Password"),
        otherwise: () => Yup.string().nullable(),
    }),

    ECpassword: Yup.string().when('selectedCategory', {
        is: 'employer',
        then: () => Yup.string().oneOf([Yup.ref('Epassword'), null], "Passwords must match").required("Please Confirm Your Password"),
        otherwise: () => Yup.string().nullable(),
    }),

    designation: Yup.string().when('selectedCategory', {
        is: 'employer',
        then: () => Yup.string().required("Please Select Your Designation"),
        otherwise: () => Yup.string().nullable(),
    }),

    companyname: Yup.string().when('selectedCategory', {
        is: 'employer',
        then: () => Yup.string().min(1).max(35).required("Please Enter Your Company Name"),
        otherwise: () => Yup.string().nullable(),
    }),
});
