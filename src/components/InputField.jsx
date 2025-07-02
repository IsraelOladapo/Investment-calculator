export default function InputField({ inputData, label, ...props }) {
  return (
    <div>
      <label>{label}</label>
      <input {...props} type="number" onChange={inputData} required />
    </div>
  );
}
