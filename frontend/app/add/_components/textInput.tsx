export default function TextInputComponent({ name, value, onChange }) {
  return (
    <input
      className="grow"
      type="text"
      id={name}
      name={name}
      value={value}
      onChange={onChange}
    />
  )
}
