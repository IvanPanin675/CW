import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const StyleLink = styled(NavLink)`
  display: block;
  background-image: ${({ background }) => background || 'linear-gradient(180deg, #ff7b00, black)'};
  box-shadow: 0px -2px 10px black;

  padding: 10px;
  border-radius: 20px 20px 0 0;
  text-decoration: none;
  font-weight: bold;
  width: fit-content;
  color: ${({ color }) => color || 'white'};

  height: 30px;

  &.active {
  background-image: ${({ backgactive }) => backgactive || `linear-gradient(180deg, #000000, #ff7b00)`};
  color: black;
  cursor: not-allowed; 
  box-shadow: inset 0px -2px 10px; 
  }
`;


