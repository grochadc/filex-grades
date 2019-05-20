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
  const [code, setCode] = useState();
  return (
    <Container>
      <form>
        <label htmlFor="text-input">Code:</label>{" "}
        <input
          type="text"
          id="text-input"
          value={code}
          onChange={({ target }) => setCode(target.value)}
        />{" "}
        <button
          onClick={e => {
            e.preventDefault();
            props.setCode(code);
          }}
        >
          Send
        </button>
      </form>
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
