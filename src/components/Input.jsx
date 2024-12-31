export default function Input({
  children,
  type,
  connect,
  defaultValue = "",
  onChange,
  disabled,
}) {
  return (
    <>
      <label htmlFor={connect}>{children}</label>
      <input
        type={type}
        id={connect}
        value={defaultValue}
        onChange={onChange}
        disabled={disabled}
      />
    </>
  );
}
