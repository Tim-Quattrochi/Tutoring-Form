import { Formik, Form } from "formik";
import TextInput from "./components/TextInput";
import axios from "axios";
import SelectInput from "./components/SelectInput";
import CheckBoxInput from "./components/CheckBoxInput";

import { validationSchema } from "./schemas";

function App() {
  const handleSubmit = async (values, actions) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/form",
        values
      );
      console.log(response.data);
      actions.resetForm();
    } catch (error) {
      console.log(error);
    }
  };

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
          cohortType: "",
          acceptedTOS: false,
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
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

            <SelectInput
              label="select cohort"
              name="cohortType"
              placeholder="Please select a cohort"
            >
              <option value="">Please select a cohort</option>
              <option value="FSWD Term 1">FSWD Term 1</option>
              <option value="FSWD Term 2">FSWD Term 2</option>
              <option value="FSWD Term 3">FSWD Term 3</option>
            </SelectInput>

            <CheckBoxInput name="acceptedTOS">
              I agree to confirm appointment via Slack DM
            </CheckBoxInput>

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
