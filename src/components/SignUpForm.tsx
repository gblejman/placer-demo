import useForm from "./form/useForm";
import { FieldError } from "./form/FieldError";
import { isEmail } from "../utils";

const initialData = {
  firstName: undefined,
  lastName: undefined,
  state: undefined,
  city: undefined,
  email: undefined,
  password: undefined,
};

const validateFn = (data: unknown) => {
  const errors = {};

  if (!isEmail(data["email"])) {
    errors["email"] = "Must be a valid email";
  }

  Object.keys(initialData).forEach((key) => {
    if (!data[key]) {
      errors[key] = "Required";
    }
  });

  return errors;
};

export const SignupForm = () => {
  const { data, errors, register, handleSubmit } = useForm({
    initialData,
    validateFn,
  });
  console.log(data);

  const onSubmit = (data: unknown) => {
    console.log("Submit data", data);
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate style={styles.form}>
      <h3 style={styles.title}>Sign Up</h3>

      <div style={styles.section}>
        <label htmlFor="firstName" style={styles.label}>
          First Name
        </label>
        <input
          type="text"
          {...register("firstName")}
          autoFocus
          required
          style={styles.input}
        />
        <FieldError id="firstName" errors={errors} />
      </div>

      <div style={styles.section}>
        <label htmlFor="lastName" style={styles.label}>
          Last Name
        </label>
        <input
          type="text"
          {...register("lastName")}
          required
          style={styles.input}
        />
        <FieldError id="lastName" errors={errors} />
      </div>

      <div style={styles.section}>
        <label htmlFor="state" style={styles.label}>
          State
        </label>
        <select {...register("state")} required style={styles.input}>
          <option key="state1" value="state1">
            state1
          </option>
          <option key="state2" value="state2">
            state2
          </option>
        </select>
        <FieldError id="state" errors={errors} />
      </div>

      <div style={styles.section}>
        <label htmlFor="city" style={styles.label}>
          City
        </label>
        <select {...register("city")} required style={styles.input}>
          <option key="city1" value="city1">
            city1
          </option>
          <option key="city2" value="city2">
            city2
          </option>
        </select>
        <FieldError id="city" errors={errors} />
      </div>

      <div style={styles.section}>
        <label htmlFor="email" style={styles.label}>
          Email
        </label>
        <input
          type="email"
          {...register("email")}
          required
          style={styles.input}
        />
        <FieldError id="email" errors={errors} />
      </div>

      <div style={styles.section}>
        <label htmlFor="password" style={styles.label}>
          Password
        </label>
        <input
          type="password"
          {...register("password")}
          required
          autoComplete="current-password"
          style={styles.input}
        />
        <FieldError id="password" errors={errors} />
      </div>

      <div style={styles.section}>
        <button type="submit" style={styles.submitButton}>
          Submit
        </button>
      </div>
    </form>
  );
};

const styles = {
  form: {
    width: 400,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "yellow",
    backgroundColor: "white",
  },
  title: { margin: 5, textAlign: "center" },
  section: { display: "flex", flexDirection: "column", margin: 10 },
  label: { fontSize: 15, marginBottom: 5 },
  input: { height: 30, borderRadius: 5, marginBottom: 5 },
  submitButton: {
    width: "100%",
    padding: 5,
    height: 30,
  },
};
