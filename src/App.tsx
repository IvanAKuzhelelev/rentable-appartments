/** @jsx jsx */
import React, { FunctionComponent } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import { Global, jsx, css } from "@emotion/core";
import Carousel from "./Carousel";
const App: FunctionComponent = () => {
  return (
    <React.StrictMode>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
          }

          html {
            font-family: sans-serif;
          }
        `}
      />
      <Header />
      <Carousel />
    </React.StrictMode>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
