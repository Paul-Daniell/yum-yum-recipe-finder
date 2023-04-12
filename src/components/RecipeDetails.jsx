import React from "react";
import {
  Box,
  Heading,
  Image,
  Text,
  Badge,
  Grid,
  GridItem,
  Button,
  Flex,
} from "@chakra-ui/react";
import { data } from "../utils/data";

export const RecipeDetails = ({
  title,
  mealType,
  image,
  dishType,
  dietLabels,
  cautions,
  healthLabels,
  ingredientLines,
  totalTime,
  Yield,
  totalNutrients,
}) => {
  const handleRefresh = () => {
    window.location.reload();
  };

  console.log("totalNutrients.NA:" + totalNutrients.NA.quantity + "mg");

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      width={{ base: "400px", md: "680px", lg: "850px" }}
    >
      <Grid
        gridTemplateRows="repeat(4, 1fr) 300px, auto, auto"
        gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={5}
      >
        <GridItem rowSpan={1}>
          <Image
            src={image}
            alt=""
            width={{ base: "400px", lg: "600px" }}
            height="200px"
            borderTopLeftRadius={4}
            borderTopRightRadius={{ base: "4", md: "0" }}
          ></Image>
        </GridItem>
        <GridItem>
          <Box display="flex" flexDir="column" gap={2}>
            <Heading size="md">{title}</Heading>
            <Badge
              borderRadius="4"
              px="2"
              colorScheme="orange"
              width={{ base: "240px", lg: "400px" }}
            >
              {mealType}
            </Badge>
            <Badge
              borderRadius="4"
              px="2"
              colorScheme="yellow"
              width={{ base: "240px", lg: "400px" }}
            >
              {dishType}
            </Badge>
            <Badge
              borderRadius="4"
              px="2"
              colorScheme="pink"
              width={{ base: "240px", lg: "400px" }}
            >
              {dietLabels}
            </Badge>
            <Badge
              borderRadius="4"
              px="2"
              colorScheme="red"
              width={{ base: "240px", lg: "400px" }}
            >
              Cautions: {cautions}
            </Badge>
            <Badge
              borderRadius="4"
              px="2"
              colorScheme="whatsapp"
              width={{ base: "240px", lg: "400px" }}
            >
              Total coocking time: {totalTime} minutes
            </Badge>
            <Badge
              borderRadius="4"
              px="2"
              colorScheme="facebook"
              width={{ base: "240px", lg: "400px" }}
            >
              Servings: {Yield}
            </Badge>
          </Box>
        </GridItem>
        <GridItem rowSpan={1} width="400px" px="2">
          <Box borderRadius="4" px="2" colorScheme="green">
            <Text fontSize="lg" fontWeight={500}>
              Health Labels:
            </Text>

            <Text>{healthLabels}</Text>
          </Box>
        </GridItem>
        <GridItem rowSpan={1} width={{ base: "250px", lg: "400px" }} px="2">
          <Text fontSize="lg" fontWeight={500}>
            Ingredients:
          </Text>

          <Text>{ingredientLines}</Text>
        </GridItem>
        <GridItem gap={6}>
          <Text
            color="gray.700"
            fontSize="sm"
            fontWeight="bold"
            textAlign="center"
          >
            Total Nutrients:{"  "}
            <br />
            {`${totalNutrients.ENERC_KCAL.quantity.toFixed()} calories`} <br />
            {`${totalNutrients.NA.quantity.toFixed()} mg Sodium`}
            <br />
            {`${totalNutrients.CHOLE.quantity.toFixed()} mg Cholesterol`}
            <br />
            {`${totalNutrients.PROCNT.quantity.toFixed()} g Protein`}
            <br />
            {`${totalNutrients.FAT.quantity.toFixed()} g Fat`}
            <br />
            {`${totalNutrients.CHOCDF.quantity.toFixed()} g Carbs`}
          </Text>
        </GridItem>
        <Box display="flex" justifyContent="center" py="4">
          <Button onClick={handleRefresh}>Back to Recipes</Button>
        </Box>
      </Grid>
    </Box>
  );
};
