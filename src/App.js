import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import axios from "axios";
import { primaryTheme, secondaryTheme } from "./styles/theme";
import Form from "./components/Form";
import GradesTable from "./components/GradesTable";
import NameChooser from "./components/NameChooser";

import { db_fetch_url } from "./variables";

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
  const [external] = useFetch(`${db_fetch_url}/external`, true);
  const [grades] = useFetch(
    `${db_fetch_url}/grades?codigo=${code}`,
    code === "EXTERNO" ? undefined : code
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
              /*If we get an empty arr we pass a deault obj*/
              <GradesTable
                grades={grades.length ? grades[0] : { codigo: "EXTERNO_" }}
              />
            )
          ) : null}
        </Section>
      </ThemeProvider>
    </div>
  );
}

function useFetch(url, dependency) {
  const [data, setData] = useState();
  useEffect(
    () => {
      if (dependency) {
        axios(url).then(({ data }) => setData(data));
      } else if (dependency === undefined) {
        setData([]);
      }
    },
    [url, dependency]
  );
  return [data];
}
export default App;
