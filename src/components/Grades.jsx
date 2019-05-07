import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Table = styled.table`
  border: 1px solid;
  td {
    border: 1px solid;
    cell-margin: 0;
  }
`;

const Container = styled.div``;

const Grades = props => {
  const [data, setData] = useState({});
  useEffect(
    () => {
      axios(`http://localhost:3000/grades?codigo=${props.code}`).then(
        ({ data }) => setData(data[0])
      );
    },
    [props.code]
  );
  console.log(data);
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <td>Code:</td>
            <td>Name:</td>
            <td>Midterm Written:</td>
            <td>Midterm Oral:</td>
            <td>Final Written:</td>
            <td>Final Oral:</td>
            <td>Total:</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.codigo}</td>
            <td>{data.nombre}</td>
            <td>{data.midterm_escrito}</td>
            <td>{data.midterm_oral}</td>
            <td>{data.final_escrito}</td>
            <td>{data.final_oral}</td>
            <td>{data.final}</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Grades;
