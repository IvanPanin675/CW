import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const TSLink = styled(NavLink)`
  display: block;
  
  background-image: linear-gradient(180deg, #273fdc, #ffffff);
  padding: 10px;
  border-radius: 20px 20px 0 0;
  text-decoration: none;
  font-weight: bold;
  width: fit-content;
  color: #130f45;
  transform: rotate(270deg);
  height: 30px;

  &.active {
    display: none;
  }
`;
