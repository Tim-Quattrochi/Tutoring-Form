import { useField } from "formik";
import { RiErrorWarningLine } from "react-icons/ri";

const SelectInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error ? (
        <div className="error-container">
          <span>
            <RiErrorWarningLine stroke="red" fill="red" />
          </span>
          <div className="error">{meta.error}</div>
        </div>
      ) : null}
    </>
  );
};

export default SelectInput;
