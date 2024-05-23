export default function LabelComponent({ children, name }) {
  return (
    <label
      className="input input-bordered flex items-center gap-2"
      htmlFor={name}>
      name
      {children}
    </label>
  )
}
