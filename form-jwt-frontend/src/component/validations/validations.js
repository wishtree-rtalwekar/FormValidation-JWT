import * as yup from "yup";

const schema = yup.object().shape({
    firstName: yup
        .string()
        .required("First name should not be empty.")
        .min(3, "First name must be at least 3 characters.")
        .max(32, "First name must be at most 32 characters."),
    lastName: yup
        .string()
        .required("Last name should not be empty.")
        .min(3, "Last name must be at least 3 characters.")
        .max(32, "Last name must be at most 32 characters."),
    email: yup
        .string()
        .email()
        .required("Email should not be empty and invalid."),
    password: yup
        .string()
        .required("Password should not be empty and invalid.")
        .min(8, "Password must be at least 8 characters.").
        max(32, "Password name must be at most 32 characters."),
    role: yup
        .string()
        .required("Select atleast one role.")
});




const login_schema = yup.object().shape({   
    email: yup
        .string()
        .email()
        .required("Email should not be empty and invalid."),
    password: yup
        .string()
        .required("Password should not be empty and invalid.")
        .min(8, "Password must be at least 8 characters.").
        max(32, "Password name must be at most 32 characters."),
   
});

export  {schema,login_schema}