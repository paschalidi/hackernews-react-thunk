import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: row;

  li {
    margin: 0px 10px;

    :first-child {
      margin: 0px 10px 0px 20px;
    }
  }
`;

export const Header = () => (
  <List className="flex-container row">
    <li>Hacker News</li>
    <li>
      <Link to="/">news</Link>
    </li>{" "}
    |{" "}
    <li>
      <Link to="/ask">ask</Link>
    </li>{" "}
    |{" "}
    <li>
      <Link to="/show">show</Link>
    </li>{" "}
    |{" "}
    <li>
      <Link to="/show">jobs</Link>
    </li>
  </List>
);
