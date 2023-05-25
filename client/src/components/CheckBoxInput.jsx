import { useField } from "formik";

const CheckBoxInput = ({ children, ...props }) => {
  const [field, meta] = useField({...props, type: "checkbox"});

  return (
    <>
         <div>
       <label className="checkbox">
         <input type="checkbox" {...field} {...props} />
         {children}
       </label>
       {meta.touched && meta.error ? (
         <div className="error">{meta.error}</div>
       ) : null}
     </div>
    </>
  );
};

export default CheckBoxInput;
