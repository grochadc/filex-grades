import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import axios from "axios";
import { primaryTheme, secondaryTheme } from "./styles/theme";
import Form from "./components/Form";
import Grades from "./components/Grades";
import NameChooser from "./components/NameChooser";

import heroku_domain_port from "./variables";

const Title = styled.h1`
  text-align: center;
`;
const Section = styled.section`
background: ${({ theme }) => theme.background}
color: ${({ theme }) => theme.primary}
  height: 40%;
  display: flex;
  flex-direction:column;
  justify-content: center;
  &:nth-of-type(2n) {
    height: 60%
    background-color: white;
    color: black;
    align-items: center;
  }
`;

function App() {
  const [code, setCode] = useState();
  const [external] = useFetch(
    process.env.NODE_ENV === "production"
      ? `${heroku_domain_port}/external`
      : "http://localhost:3000/external"
  );
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
