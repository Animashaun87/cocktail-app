import React, { useState } from "react";
import styled from "styled-components";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <>
      <Wrapper>
        <Logo>Logo</Logo>
        <SubWrapper>
          <div>Home</div>
          <div>About</div>
          <div>Contact</div>
        </SubWrapper>
        {/* <HeaderWrapper id="header"> */}
        {/* <Container> */}
        {/* <Title>Menu Demo</Title> */}
        {/* <MenuToggle onClick={toggleMenu} open={open}>
            <RotateContainer open={open}>
              <span />
              <span />
              <span />
            </RotateContainer>
          </MenuToggle> */}
        {/* </Container> */}
        {/* </HeaderWrapper> */}
        {/* <MenuWrapper open={open}> */}
        {/* <Menu open={open}>
            <MenuItem href="/">Home</MenuItem>
            <MenuItem href="/">About</MenuItem>
            <MenuItem href="/">Contact</MenuItem>
          </Menu> */}
        {/* </MenuWrapper> */}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  background-color: tomato;
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-auto-rows: minmax(45px, auto);
  align-items: center;
`;

const SubWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  color: white;
  font-weight: bold;
`;

const Logo = styled.div`
  margin-left: 5em;
  color: white;
  font-weight: bold;
`;

const HeaderWrapper = styled.header`
  padding: 18px 0;
  color: white;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: auto;
  z-index: 999;
`;

const MenuToggle = styled.div`
  z-index: 9999;
  width: 30px;
  height: 30px;
  transform: rotate(0deg);
  transition: all 0.25s ease-in;
  cursor: pointer;
  margin-left: auto;
  span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: white;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: ${(props) =>
      props.open ? "all 0.25s ease-in" : "all 0.25s ease-out"};
  }
  span:nth-child(1) {
    top: ${(props) => (props.open ? "calc(50% - 2px)" : "10%")};
    transform-origin: left center;
  }
  span:nth-child(2) {
    top: ${(props) => (props.open ? 0 : "calc(50% - 2px)")};
    left: ${(props) => (props.open ? "calc(50% - 2px)" : null)};
    width: ${(props) => (props.open ? "4px" : null)};
    height: ${(props) => (props.open ? "100%" : null)};
    transform-origin: left center;
  }
  span:nth-child(3) {
    top: calc(90% - 4px);
    transform-origin: left center;
    width: ${(props) => (props.open ? 0 : null)};
    opacity: ${(props) => (props.open ? 0 : 1)};
  }
`;

const RotateContainer = styled.div`
  height: 100%;
  width: 100%;
  transition: ${(props) =>
    props.open ? "all 0.25s ease-in-out" : "all 0.25s ease-in-out"};
  transform: ${(props) => (props.open ? "rotate(-45deg)" : "none")};
`;

const MenuWrapper = styled.div`
  position: fixed;
  overflow: hidden;
  top: ${(props) => (props.open ? "0" : "-100%")};
  left: 0;
  z-index: 0;
  margin-top: 66px;
  width: 100%;
  transition: ${(props) =>
    props.open ? "all 0.25s ease-out" : "all 0.6s ease-out"};
  box-shadow: 0px 4px 20px -5px #e8e8e8;
  padding: 12px;
`;

export default Header;
