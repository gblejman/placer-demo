import { FormEvent, useState } from "react";

const noop = () => undefined;

export type FormErrors = {
  [key: string]: string;
};

/**
 * Handles form data, validation and submission
 * @param initialData the initial field data
 * @param validateFn a fn to validate data. Should return an error object keyed by id (currently single error per field)
 * @returns
 */
const useForm = ({ initialData, validateFn }) => {
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState<FormErrors>({});

  /**
   * Generate bindings for an input by id
   * Ie: <input {...register('name')} />
   * @param id the field id
   * @returns the bindings to spread over the input
   */
  const register = (id: string) => {
    return {
      id,
      name: id,
      value: data.value,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setData((prev) => ({ ...prev, [id]: e.target.value }));
      },
    };
  };

  /**
   * Provides a function to bind to the form onSubmit handler
   * @param submitFn the function to be called should data be valid
   * @returns
   */
  const handleSubmit =
    (submitFn = noop) =>
    async (e: FormEvent) => {
      e.preventDefault();

      try {
        const errors = await validateFn(data);

        if (Object.keys(errors).length) {
          setErrors(errors);
        } else {
          submitFn(data);
        }
      } catch (error) {
        console.log("Failed to validate", error);
        throw error;
      }
    };

  return {
    data,
    errors,
    register,
    handleSubmit,
  };
};

export default useForm;
