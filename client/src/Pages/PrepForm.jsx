import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  CheckBoxInput,
  SelectInput,
  TextArea,
  TextInput,
} from "../components";
import { validationSchema } from "../schemas";

const PrepForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values, actions) => {
    try {
      await axios.post(
        "https://coach-form-server.onrender.com/api/v1/form",
        values
      );

      actions.resetForm();
      navigate("thank-you", { state: values });
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
          link: "",
          assignment: "",
          cohortType: "",
          addDetails: "",
          emailResponses: false,
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <TextInput
              label="Name"
              name="name"
              type="text"
              placeholder="Name"
            />

            <TextInput
              label="Email"
              name="email"
              type="email"
              placeholder="Email"
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
              label="Which Cohort are you in?"
              name="cohortType"
              placeholder="Please select a cohort"
            >
              <option value="">Please select a cohort</option>
              <option value="FSWD Term 1">FSWD Term 1</option>
              <option value="FSWD Term 2">FSWD Term 2</option>
              <option value="FSWD Term 3">FSWD Term 3</option>
            </SelectInput>

            <TextArea
              label="Additional details you would like to share"
              name="addDetails"
              placeholder="Add in any additional details you can think of..."
            />

            <CheckBoxInput name="emailResponses">
              Send me a copy of my responses.
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
};

export default PrepForm;
