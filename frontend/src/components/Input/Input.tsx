export const Input = ({
  value,
  onChange,
}: {
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Enter task title"
      className="w-full p-2 border rounded"
    />
  );
};
