import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const StyleLink = styled(NavLink)`
  display: block;

   background-image: ${({ background }) => background || 'linear-gradient(180deg, #ff7b00, black)'};

  padding: 10px;
  border-radius: 20px 20px 0 0;
  text-decoration: none;
  font-weight: bold;
  width: fit-content;
  color: #bdbdbd;

  height: 30px;

  &.active {
    display: none;
  }
`;


