import { SignupForm } from "./components/SignUpForm";

const App = () => {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        padding: 24,
      }}
    >
      <SignupForm />
    </main>
  );
};

export default App;
