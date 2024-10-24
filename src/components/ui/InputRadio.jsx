import { forwardRef } from "react";

export const InputRadio = forwardRef(function InputRadio(props, ref) {
  return (
    <input
      className="peer relative appearance-none w-5 h-5 border rounded-full border-gray-300 checked:bg-blue-100"
      {...props}
      ref={ref}
    />
  );
});

export default InputRadio;
