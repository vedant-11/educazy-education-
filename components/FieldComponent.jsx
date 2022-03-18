import { Field } from "formik";

const FieldComponent = (fieldProps) => {
  const { name, id, placeholder, type, label } = fieldProps;
  return (
    <div className="flex flex-col items-start w-full">
      <label className="text-white text-lg font-medium capitalize">
        {label ? label : placeholder ? placeholder : name}
      </label>
      <Field
        id={id ? id : name}
        name={name}
        placeholder={`Enter your ${placeholder ? placeholder : name}`}
        type={type ? type : "text"}
        className=""
      />
    </div>
  );
};
export default FieldComponent;
