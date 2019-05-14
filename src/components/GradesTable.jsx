import React from "react";
import styled from "styled-components";

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

const GradesTable = ({ grades }) => {
  return (
    <Container>
      <Table>
        <tbody>
          <tr>
            <td>Code:</td>
            <td>
              {grades.codigo.search("EXTERNO") === 0
                ? "EXTERNO"
                : grades.codigo}
            </td>
          </tr>
          <tr>
            <td>Name:</td>
            <td>{grades.nombre}</td>
          </tr>
          <tr>
            <td>Midterm Written:</td>
            <td>{grades.midterm_escrito}</td>
          </tr>
          <tr>
            <td>Midterm Oral:</td>
            <td>{grades.midterm_oral}</td>
          </tr>
          <tr>
            <td>Final Written:</td>
            <td>{grades.final_escrito}</td>
          </tr>
          <tr>
            <td>Final Oral:</td>
            <td>{grades.final_oral}</td>
          </tr>
          <tr>
            <td>Project 1:</td>
            <td>{grades.proyecto1}</td>
          </tr>
          <tr>
            <td>Project 2:</td>
            <td>{grades.proyecto2}</td>
          </tr>
          <tr>
            <td>Project 3:</td>
            <td>{grades.proyecto3}</td>
          </tr>
          <tr>
            <td>Moodle Platform:</td>
            <td>{grades.moodle}</td>
          </tr>
          <tr>
            <td>Reading:</td>
            <td>{grades.reading}</td>
          </tr>
          <tr>
            <td>Conversation (extra points):</td>
            <td>{grades.conversation}</td>
          </tr>
          <tr>
            <td>Total:</td>
            <td>{grades.final}</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default GradesTable;
