import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Recipes } from "./pages/RecipesPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <Recipes />
    </ChakraProvider>
  </React.StrictMode>
);
