import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import axios from "axios";
import Form from "./components/Form";
import Grades from "./components/Grades";
import NameChooser from "./components/NameChooser";

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
  const [external] = useFetch("http://localhost:3001/external");
  return (
    <div>
      <GlobalStyle />
      <Title>Teacher Gonzalo's Final Grades</Title>
      <Form setCode={setCode} />
      {code ? (
        code === "EXTERNO" ? (
          <NameChooser setCode={setCode} grades={external} />
        ) : (
          <Grades code={code} />
        )
      ) : null}
    </div>
  );
}

function useFetch(url) {
  const [data, setData] = useState();
  useEffect(
    () => {
      axios(url).then(({ data }) => setData(data));
    },
    [url]
  );
  return [data];
}
export default App;
