import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import axios from "axios";
import { primaryTheme, secondaryTheme } from "./styles/theme";
import Form from "./components/Form";
import GradesTable from "./components/GradesTable";
import NameChooser from "./components/NameChooser";
import News from "./components/News";

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

const Warning = styled.h2`
  color: ${({ theme }) => theme.warning};
`;

function App() {
  const [code, setCode] = useState();
  const [external] = useFetch(
    `${db_fetch_url}/external`,
    code === "EXTERNO" ? true : undefined
  );
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
          {code ? null : <News />}
          {code ? (
            code === "EXTERNO" && external ? (
              <NameChooser setCode={setCode} grades={external} />
            ) : grades.length ? (
              <GradesTable grades={grades[0]} />
            ) : grades.error === "404" ? (
              <div>
                <Warning>Estudiante no encontrado.</Warning>
                <Warning>Favor de de revisar el codigo.</Warning>{" "}
              </div>
            ) : null
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
        console.log("Called axios");
        axios
          .get(url)
          .then(({ data }) => {
            if (data.length === 0) {
              setData({ error: "404" });
            } else {
              setData(data);
            }
          })
          .catch(err => alert(err.message));
      } else if (dependency === undefined) {
        setData([]);
      }
    },
    [url, dependency]
  );
  return [data];
}
export default App;
