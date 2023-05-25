import * as yup from "yup";

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is Required"),
  name: yup
    .string()
    .max(30, "Must be 15 characters or less")
    .required("Name is Required"),
  cohort: yup
    .string()
    .max(15, "Must be 15 characters or less")
    .required("Cohort is Required"),
  link: yup
    .string()
    .url()
    .url("Invalid URL")
    .required("Repo URL is Required"),
  cohortType: yup
    .string()
    .oneOf(["FSWD Term 1", "FSWD Term 2", "FSWD Term 3", "Other"])
    .required("Please select a cohort."),
    acceptedTOS: yup.boolean()
    .required('Required')
    .oneOf([true], 'You must accept the terms and conditions.'),
});
