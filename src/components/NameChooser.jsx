import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: auto;
`;
const List = styled.ul`
  list-style: none;
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

const NameChooser = props => {
  return (
    <Container>
      Haz click en tu nombre:
      <List>
        {props.grades.map(item => (
          <li key={item.nombre}>
            <Link onClick={() => props.setCode(item.codigo)}>
              {item.nombre}
            </Link>
          </li>
        ))}
      </List>
    </Container>
  );
};

export default NameChooser;
