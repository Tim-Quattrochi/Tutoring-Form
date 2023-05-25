import { useField } from "formik";

const TextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="addDetails">
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default TextArea;
