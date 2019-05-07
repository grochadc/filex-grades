import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Form from "./components/Form";
import Grades from "./components/Grades";
import NameChooser from "./components/NameChooser";
import grades from "./data/grades.json";

const GlobalStyle = createGlobalStyle`
body {
  color: white;
  background-color:#282c34;
}
`;

const Title = styled.h1`
  text-align: center;
`;

function App() {
  const [code, setCode] = useState();
  return (
    <div>
      <GlobalStyle />
      <Title>Teacher Gonzalo's Final Grades</Title>
      <Form setCode={setCode} />
      {code ? (
        code === "EXTERNO" ? (
          <NameChooser
            names={["Julia", "Karen", "Leticia"]}
            setCode={setCode}
          />
        ) : (
          <Grades code={code} />
        )
      ) : null}
    </div>
  );
}

export default App;
