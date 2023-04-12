import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";
import { data } from "../utils/data";

// Define a constant for the placeholder text
const SEARCH_PLACEHOLDER = "Find your recipe here";

export const SearchBar = ({ setRecipes }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Event handler for input change
  const handleChange = (event) => {
    setSearchTerm(event.target.value);

    // Filter recipes based on search term
    const filtered = data.hits.filter((recipe) => {
      return (
        recipe.recipe.label
          .toLowerCase()
          .includes(event.target.value.toLowerCase()) ||
        recipe.recipe.healthLabels.some((label) =>
          label.toLowerCase().includes(event.target.value.toLowerCase())
        )
      );
    });
    setRecipes(filtered);
  };

  return (
    <FormControl
      width={{ base: "200px", md: "300px", lg: "400px" }}
      flexDir="column"
    >
      {/* Label for the search input */}
      <FormLabel htmlFor="search">Search Recipes</FormLabel>
      {/* Search input */}
      <Input
        border="2px solid orange"
        id="search"
        type="text"
        placeholder={SEARCH_PLACEHOLDER}
        value={searchTerm}
        onChange={handleChange}
      />
    </FormControl>
  );
};
