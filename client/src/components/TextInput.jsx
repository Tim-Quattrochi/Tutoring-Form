import { useField } from "formik";
import { RiErrorWarningLine } from "react-icons/ri";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error ? (
        <div className="error-container">
          <span>
            <RiErrorWarningLine fill="red" />
          </span>
          <div className="error">{meta.error}</div>
        </div>
      ) : null}
    </>
  );
};

export default TextInput;
