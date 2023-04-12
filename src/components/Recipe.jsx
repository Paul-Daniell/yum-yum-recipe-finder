import { React } from "react";
import { Box, Heading, Image, Text, Badge, Flex } from "@chakra-ui/react";

// Recipe component to display a single recipe
// Props:
// - title: string (required)
// - mealType: string (required)
// - image: string (required)
// - dishType: string (required)
// - dietLabels: string (required)
// - cautions: string (required)
// - healthLabels: string (required)
export const Recipe = ({
  title,
  mealType,
  image,
  dishType,
  dietLabels,
  cautions,
  healthLabels,
}) => {
  // Return the Recipe component with image, title, meal type, health labels, dish type, diet labels and cautions
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      cursor="pointer"
      _hover={{
        shadow: "lg",
        transform: "translateY(-5px)",
      }}
    >
      {/* Image of the recipe */}
      <Image src={image} alt="" width="350px" height="200px"></Image>
      <Box p="2">
        {/* Details of the recipe */}
        <Box
          display="flex"
          flexDir="column"
          height="135px"
          width="200px"
          alignItems="baseline"
          gap={2}
        >
          <Heading size="md">{title}</Heading>

          <Badge borderRadius="4" px="2" colorScheme="orange">
            {mealType}
          </Badge>
          <Badge borderRadius="4" px="2" colorScheme="green">
            {healthLabels}
          </Badge>
          <Badge borderRadius="4" px="2">
            {dishType}
          </Badge>
          <Badge borderRadius="4" px="2">
            {dietLabels}
          </Badge>
          <Badge borderRadius="4" px="2" colorScheme="red">
            {cautions}
          </Badge>
        </Box>
      </Box>
    </Box>
  );
};
