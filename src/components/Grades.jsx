import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import heroku_domain_port from "../variables";

const Table = styled.table`
  border-radius: 5px;
  &,
  td {
    border: 1px solid;
  }
  tbody td {
    text-align: center;
  }
  td:nth-child(1) {
    font-weight: bold;
  }
  margin: auto;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const Grades = props => {
  const [data, setData] = useState({});
  useEffect(
    () => {
      axios(
        process.env.NODE_ENV === "production"
          ? `${heroku_domain_port}/grades?codigo=${props.code}`
          : `http://localhost:3000/grades?codigo=${props.code}`
      ).then(({ data }) => setData(data[0]));
    },
    [props.code]
  );
  return (
    <Container>
      <Table>
        <tbody>
          <tr>
            <td>Code:</td>
            <td>{data.codigo}</td>
          </tr>
          <tr>
            <td>Name:</td>
            <td>{data.nombre}</td>
          </tr>
          <tr>
            <td>Midterm Written:</td>
            <td>{data.midterm_escrito}</td>
          </tr>
          <tr>
            <td>Midterm Oral:</td>
            <td>{data.midterm_oral}</td>
          </tr>
          <tr>
            <td>Final Written:</td>
            <td>{data.final_escrito}</td>
          </tr>
          <tr>
            <td>Final Oral:</td>
            <td>{data.final_oral}</td>
          </tr>
          <tr>
            <td>Project 1:</td>
            <td>{data.proyecto1}</td>
          </tr>
          <tr>
            <td>Project 2:</td>
            <td>{data.proyecto2}</td>
          </tr>
          <tr>
            <td>Project 3:</td>
            <td>{data.proyecto3}</td>
          </tr>
          <tr>
            <td>Moodle Platform:</td>
            <td>{data.moodle}</td>
          </tr>
          <tr>
            <td>Reading:</td>
            <td>{data.reading}</td>
          </tr>
          <tr>
            <td>Conversation (extra points):</td>
            <td>{data.conversation}</td>
          </tr>
          <tr>
            <td>Total:</td>
            <td>{data.final}</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Grades;
