import { Controller, type Control, type FieldErrors } from "react-hook-form";
import { Input } from "./ui/input";
import type { controlObj, FormRules } from "@/types";

interface FormControllerProps extends FormRules {
  name: keyof controlObj;
  type: string;
  placeholder: string;
  className?: string;
  control: Control<controlObj>;
  errors: FieldErrors<controlObj>;
}

const FormController = ({
  name,
  type,
  className,
  placeholder,
  required,
  minLength,
  maxLength,
  pattern,
  control,
  errors,
}: FormControllerProps) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <Controller
          name={name}
          control={control}
          rules={{
            required: required && { value: true, message: required },
            minLength: minLength && minLength,
            maxLength: maxLength && maxLength,
            pattern: pattern && pattern,
          }}
          render={({ field }) => (
            <Input
              type={type}
              placeholder={placeholder}
              className={className ? className : ""}
              {...field}
            />
          )}
        />
        {errors[name] && (
          <p className="text-red-500">{String(errors[name]?.message)}</p>
        )}
      </div>
    </>
  );
};

export default FormController;
