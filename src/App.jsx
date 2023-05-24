import { ErrorMessage, Field, Formik, Form } from "formik";
import * as Yup from "yup";
import TextInput from "./components/TextInput";

import "./App.css";

function App() {
  return (
    <div>
      <h1>1 on 1 Coaching Prep for Tim Quattrochi</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          cohort: "",
          link: "",
          assignment: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Name is Required"),

          email: Yup.string()
            .email("Invalid email address")
            .required("Email is Required"),
          cohort: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Cohort is Required"),
          link: Yup.string()
            .url()
            .url("Invalid URL")
            .required("Repo URL is Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <TextInput
              label="name"
              name="name"
              type="text"
              placeholder="name"
            />

            <TextInput
              label="email"
              name="email"
              type="email"
              placeholder="email"
            />

            <TextInput
              label="What is the name of your program/cohort?"
              name="cohort"
              type="text"
              placeholder="cohort"
            />
            <TextInput
              label="Please paste your repository link below"
              name="link"
              type="text"
              placeholder="GitHub Repo"
            />
            <TextInput
              label="Which assignment are we working on today?"
              name="assignment"
              type="text"
              placeholder=""
            />

            <button type="submit" disabled={isSubmitting}>
              {" "}
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
