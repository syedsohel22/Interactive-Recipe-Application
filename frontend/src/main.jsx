import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

const theme = extendTheme({
  fonts: {
    body: "Roboto, sans-serif",
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 0,
      },
      variants: {
        solid: {
          color: "white",
          bg: "black",
          _hover: {
            bg: "gray.200",
            color: "black",
          },
        },
      },
    },
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
