import { useEffect } from "react";
import Layout from "./layout/Layout";
import { ScrollRestoration } from "react-router-dom";

function App() {
  useEffect(() => {
    document.documentElement.classList.add("light");
  }, []);

  return (
    <>
      <Layout />
      <ScrollRestoration />
    </>
  );
}

export default App;
