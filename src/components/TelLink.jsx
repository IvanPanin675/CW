import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const TelLink = styled(NavLink)`
  display: block;

  background-image: linear-gradient(180deg, #1701a8, #1c90ce);
  /* background-image: url("../fon.jpg");
  background-repeat: no-repeat;
  background-size: cover; */
  padding: 10px;
  border-radius: 20px 20px 0 0;
  text-decoration: none;
  font-weight: bold;
  width: fit-content;
  color: #bdbdbd;
  transform: rotate(270deg);
  height: 30px;

  &.active {
    display: none;
  }
`;
