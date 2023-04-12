import { Center, Grid, Heading, Button, GridItem } from "@chakra-ui/react";
import React, { useState } from "react";
import { data } from "../utils/data";
import { Recipe } from "../components/Recipe";
import { SearchBar } from "../components/SearchBar";
import { RecipeDetails } from "../components/RecipeDetails";

export const Recipes = () => {
  // Define a greeting message.
  const greeting = "Yum Yum Recipe Finder!";

  // Initialize the recipes state with data.hits and selected recipe state as null
  const [recipes, setRecipes] = useState(data.hits);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // Define a function to update the selected recipe when a user clicks on a recipe
  const handleRecipeClick = (recipe) => {
    console.log(recipe);
    setSelectedRecipe(recipe.recipe);
  };

  // Define a function to reset the selected recipe state to null
  const resetSelectedRecipe = () => {
    setSelectedRecipe(null);
  };

  return (
    // Center the content with Chakra UI's Center component
    <Center marginLeft="20px" marginRight="20px" flexDir="column" gap="50">
      <>
        {/* Display the greeting message */}
        <Heading fontSize={{ base: "2rem", md: "3rem", lg: "4rem" }}>
          {greeting}
        </Heading>
        {/* Conditionally display the SearchBar component based on the selectedRecipe state */}
        {!selectedRecipe && (
          <SearchBar setRecipes={setRecipes} recipes={recipes} />
        )}
        {/* Conditionally display either the Recipe or Recipes component based on the selectedRecipe state */}
        {selectedRecipe ? (
          <RecipeDetails
            // Pass the selected recipe properties as props to the Recipe component
            key={selectedRecipe.url}
            image={selectedRecipe.image}
            title={selectedRecipe.label}
            healthLabels={selectedRecipe.healthLabels.join(" | ")}
            mealType={selectedRecipe.mealType}
            dishType={selectedRecipe.dishType}
            dietLabels={selectedRecipe.dietLabels.join(" | ")}
            cautions={selectedRecipe.cautions.join(" | ")}
            totalTime={selectedRecipe.totalTime}
            Yield={selectedRecipe.yield}
            ingredientLines={selectedRecipe.ingredientLines.join(" | ")}
            totalNutrients={selectedRecipe.totalNutrients}
            onClose={resetSelectedRecipe}
          />
        ) : (
          <Grid
            gridTemplateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gridTemplateRows="repeat(5, 1fr)"
            rowGap={150}
            minWidth="250px"
            p="20px"
          >
            {recipes.map((recipe) => (
              <Button
                marginTop="200px"
                backgroundColor="white"
                _hover={{
                  backgroundColor: "white",
                }}
                onClick={() => handleRecipeClick(recipe)}
                key={recipe.recipe.url}
              >
                <GridItem colSpan="1">
                  <Recipe
                    // Pass the recipe properties as props to the Recipe component
                    key={recipe.recipe.url}
                    image={recipe.recipe.image}
                    title={recipe.recipe.label}
                    healthLabels={recipe.recipe.healthLabels
                      .filter(
                        (label) => label === "Vegetarian" || label === "Vegan"
                      )
                      .join(" | ")}
                    mealType={recipe.recipe.mealType}
                    dishType={recipe.recipe.dishType}
                    dietLabels={recipe.recipe.dietLabels.join(" | ")}
                    cautions={recipe.recipe.cautions.join(" | ")}
                  />
                </GridItem>
              </Button>
            ))}
          </Grid>
        )}
      </>
    </Center>
  );
};
