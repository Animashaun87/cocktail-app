import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <Bottom>
        <p>Copyright &copy; Abidemi Animashaun {new Date().getFullYear()}</p>
      </Bottom>
    </>
  );
};

const Bottom = styled.div`
  background-color: tomato;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Footer;
