import Header from "./component/Header";
import Section from "./component/Section";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Section
        name="About me"
        content="I am an advocate of self-improvement and I want to help people improve their lives through knowledge and application "
      />
      <Section
        name="Contact me"
        content="Email: sample_john_smith@mail.com | LinkedIn: https://www.linkedin.com/"
      />
    </div>
  );
}

export default App;
