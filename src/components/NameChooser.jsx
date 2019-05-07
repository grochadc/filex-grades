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
      {props.names.map(name => (
        <li>
          <Link onClick={() => props.setCode("1234")}>{name}</Link>
        </li>
      ))}
    </List>
  );
};

export default NameChooser;
