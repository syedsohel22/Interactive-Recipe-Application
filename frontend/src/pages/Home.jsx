import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";

import { useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";

import { MdBookmarkBorder } from "react-icons/md";
const Home = () => {
  const { recipes } = useSelector((state) => state.recipe);

  console.log(recipes.recipes);
  const recipedata = recipes.recipes;
  return (
    <Box
      className="dot-bg"
      mt={"100px"}
      flexDir={"column"}
      w={"100%"}
      mx="auto"
      pt={"100px"}
    >
      <SimpleGrid columns={[2, null, 3]} gap="20px" placeItems={"center"}>
        {recipedata &&
          recipedata?.map((el) => (
            <RouterLink to={`/detail-recipe/${el.id}`} key={el.id}>
              <Card maxW="sm">
                <CardBody>
                  <Image
                    src={el.image}
                    alt={el.title}
                    w={"100%"}
                    boxSize="100%"
                    objectFit="contain"
                    loading={"lazy"}
                  />
                  <Stack mt="6" spacing="3">
                    <Heading
                      size="md"
                      whiteSpace="nowrap"
                      overflow="hidden"
                      textOverflow="ellipsis"
                    >
                      {el.title}
                    </Heading>
                  </Stack>
                </CardBody>
                <Button
                  leftIcon={<MdBookmarkBorder />}
                  colorScheme="red"
                  variant="outline"
                  borderRadius="full"
                  position={"absolute"}
                  top={0}
                  left={0}
                  m={10}
                  bg={"red"}
                  color={"white"}
                >
                  Like
                </Button>
              </Card>
            </RouterLink>
          ))}
      </SimpleGrid>
    </Box>
  );
};

export default Home;
