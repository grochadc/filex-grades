import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import axios from "axios";
import { primaryTheme, secondaryTheme } from "./styles/theme";
import Form from "./components/Form";
import Grades from "./components/Grades";
import NameChooser from "./components/NameChooser";

const Title = styled.h1`
  text-align: center;
`;
const Section = styled.section`
background: ${({ theme }) => theme.background}
color: ${({ theme }) => theme.primary}
  height: 35vh;
  display: flex;
  flex-direction:column;
  justify-content: center;
  &:nth-of-type(2n) {
    height: 65vh
    background-color: white;
    color: black;
  }
`;

function App() {
  const [code, setCode] = useState();
  const [external] = useFetch("http://localhost:3001/external");
  return (
    <div>
      <ThemeProvider theme={primaryTheme}>
        <Section>
          <Title>Teacher Gonzalo's Final Grades</Title>
          <Form setCode={setCode} />
        </Section>
      </ThemeProvider>
      <ThemeProvider theme={secondaryTheme}>
        <Section>
          {code ? (
            code === "EXTERNO" ? (
              <NameChooser setCode={setCode} grades={external} />
            ) : (
              <Grades code={code} />
            )
          ) : null}
        </Section>
      </ThemeProvider>
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
