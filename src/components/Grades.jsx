import React from "react";
import styled from "styled-components";

const Table = styled.table`
  border: 1px solid;
`;

const Container = styled.div``;

const Grades = props => {
  return (
    <Container>
      <Table>
        <tr>
          <td>Code:</td>
          <td>{props.code}</td>
        </tr>
      </Table>
    </Container>
  );
};

export default Grades;
