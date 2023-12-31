import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./reudx/store.js";

/***********************************************(Chakra Custom theme)************************************************************************/
const theme = extendTheme({
  fonts: {
    body: "Roboto, sans-serif",
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "base",
      },
      variants: {
        solid: {
          color: "black",
          bg: "#fad1ac",

          _hover: {
            bg: "#fad1ac",
            color: "#101036",
          },
        },
      },
    },
  },
});

/*********************************************************************************************************************************/
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
