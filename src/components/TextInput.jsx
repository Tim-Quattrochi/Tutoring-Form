import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  console.log(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

export default TextInput;
