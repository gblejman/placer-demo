import { FormEvent } from "react";

// import React from 'react'
export const SignupForm = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h3 style={styles.title}>Sign Up</h3>

      <div style={styles.section}>
        <label htmlFor="firstName" style={styles.label}>
          First Name
        </label>
        <input id="firstName" name="firstName" style={styles.input} />
        <span style={styles.labelError}>Required</span>
      </div>

      <div style={styles.section}>
        <label htmlFor="lastName" style={styles.label}>
          Last Name
        </label>
        <input id="lastName" name="lastName" type="text" style={styles.input} />
        <span style={styles.labelError}>Required</span>
      </div>

      <div style={styles.section}>
        <label htmlFor="state" style={styles.label}>
          State
        </label>
        <select id="state" name="state" style={styles.input}>
          <option key="state1" value="state1">
            state1
          </option>
          <option key="state2" value="state2">
            state2
          </option>
        </select>
        <span style={styles.labelError}>Required</span>
      </div>

      <div style={styles.section}>
        <label htmlFor="city" style={styles.label}>
          City
        </label>
        <select id="city" name="city" style={styles.input}>
          <option key="city1" value="city1">
            city1
          </option>
          <option key="city2" value="city2">
            city2
          </option>
        </select>
        <span style={styles.labelError}>Required</span>
      </div>

      <div style={styles.section}>
        <label htmlFor="email" style={styles.label}>
          Email
        </label>
        <input id="email" name="email" type="email" style={styles.input} />
        <span style={styles.labelError}>Required</span>
      </div>

      <div style={styles.section}>
        <label htmlFor="password" style={styles.label}>
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          style={styles.input}
        />
        <span style={styles.labelError}>Required</span>
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
  labelError: { fontSize: 13, fontStyle: "italic", color: "red" },
  input: { height: 30, borderRadius: 5, marginBottom: 5 },
  submitButton: {
    width: "100%",
    padding: 5,
    height: 30,
  },
};
