export const Button = ({
  text,
  handler,
}: {
  text?: string;
  handler?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      onClick={handler}
      className="w-full mt-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
    >
      {text}
    </button>
  );
};
