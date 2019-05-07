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
          <NameChooser grades={getExternalGrades()} setCode={setCode} />
        ) : (
          <Grades code={code} items={{ ...grades[code] }} />
        )
      ) : null}
    </div>
  );
}

function getExternalGrades() {
  const externalCodes = Object.keys(grades).filter(
    code => code.search("EXTERNO") > -1
  );
  return externalCodes.map(code => grades[code]);
}

export default App;
