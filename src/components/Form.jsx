import React, { useState } from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
`;

const Link = styled.button`
  background: none!important;
  color: ${({ theme }) => theme.secondary};
  border: none;
  padding:0!important;
  font: inherit;
  border-bottom:1px solid
  cursor: pointer;
`;

const Form = props => {
  const [value, setValue] = useState();
  return (
    <Container>
      Code:{" "}
      <input
        value={value}
        onChange={({ target }) => setValue(target.value)}
        type="text"
      />{" "}
      <button onClick={() => props.setCode(value)}>Send</button>
      <p>
        Eres externo y no tienes codigo? Click{" "}
        <Link
          onClick={() => props.setCode("EXTERNO")}
          data-testid="externos-link"
        >
          aqui
        </Link>
        .
      </p>
    </Container>
  );
};

Form.propTypes = {
  setCode: propTypes.func.isRequired
};

export default Form;
