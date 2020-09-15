/** @jsx jsx */
import React from "react";
import logo from "./img/logo.svg";
import { jsx, css } from "@emotion/core";
import { Link } from "@reach/router";

const Header: React.FC = () => {
  const header = css`
    background-color: aliceblue;
    display: flex;
    padding: 5px 20px;
    justify-content: space-between;
    ul {
      display: flex;
      li {
        padding-right: 30px;
      }
    }
  `;
  return (
    <header css={header}>
      <Link to="/">
        <img
          src={logo}
          alt="Logo"
          css={css`
            height: 50px;
          `}
        />
      </Link>

      <nav>
        <ul>
          <li>
            <Link to="/">Nav item</Link>
          </li>
          <li>
            <Link to="/">Nav item</Link>
          </li>
          <li>
            <Link to="/">Nav item</Link>
          </li>
          <li>
            <Link to="/">Nav item</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
