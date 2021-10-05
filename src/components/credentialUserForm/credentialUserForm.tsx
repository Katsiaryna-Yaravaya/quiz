import "./index.css";

interface Props {
  title?: string | undefined;
  className: string;
  type: string;
  value: string;
  autoComplete?: string | undefined;
  name: string;
  placeholder?: string | undefined;
  onchange?: (e) => void;
  clickHandler?: (e) => void;
}

const CredentialUserForm = ({title, className, type, value, autoComplete, name, placeholder, onchange, clickHandler,}: Props) => {
  return (
    <input
      title={title}
      className={className}
      type={type}
      value={value}
      autoComplete={autoComplete}
      name={name}
      placeholder={placeholder}
      onChange={onchange}
      onClick={clickHandler}
    />
  );
};

export default CredentialUserForm;
