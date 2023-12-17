"use client";
import { useFormStatus } from "react-dom";

const FormButton = ({ children, className }) => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className={`btn btn-primary ${className}`}
      disabled={pending}
    >
      {pending && <span className="loading loading-spinner"></span>}
      {children}
    </button>
  );
};

export default FormButton;
