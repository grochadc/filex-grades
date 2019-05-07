import React from "react";
import styled from "styled-components";

const Table = styled.table`
  border: 1px solid;
  td {
    border: 1px solid;
  }
`;

const Container = styled.div``;

const Grades = props => {
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
            <td>{props.items.codigo}</td>
            <td>{props.items.nombre}</td>
            <td>{props.items.midterm_escrito}</td>
            <td>{props.items.midterm_oral}</td>
            <td>{props.items.final_escrito}</td>
            <td>{props.items.final_oral}</td>
            <td>{props.items.final}</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Grades;
