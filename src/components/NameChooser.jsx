import React, { useState } from "react";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
`;
const Link = styled.button`
background: none!important;
color: inherit;
border: none;
padding:0!important;
font: inherit;
border-bottom:1px solid
cursor: pointer;
`;

const NameChooser = props => {
  return (
    <List>
      {props.grades.map(item => (
        <li key={item.nombre}>
          <Link onClick={() => props.setCode(item.codigo)}>{item.nombre}</Link>
        </li>
      ))}
    </List>
  );
};

export default NameChooser;
