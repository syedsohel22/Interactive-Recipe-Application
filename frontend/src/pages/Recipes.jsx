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

import { useEffect, useState } from "react";
import { MdBookmarkBorder } from "react-icons/md";
import Loader from "../components/Loader";
import { Link as RouterLink } from "react-router-dom";
import { localURL } from "../utils/url";
const Recipes = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`${localURL}`)
      .then((res) => res.json())
      .then((res) => {
     
        console.log(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  const data = [
    {
      id: 662479,
      title: "Sweet and Tart Lemon Bars",
      image: "https://spoonacular.com/recipeImages/662479-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 662458,
      title:
        "Sweet and Spicy Blueberry Molasses Jam Cookies (Gluten Free Too!)",
      image: "https://spoonacular.com/recipeImages/662458-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 1095688,
      title: "Indian Sweet Jackfruit Dessert",
      image: "https://spoonacular.com/recipeImages/1095688-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 641799,
      title:
        "Easter Nest Sweet Cake With Sour Cream-Royal Icing and Pistachios",
      image: "https://spoonacular.com/recipeImages/641799-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 635513,
      title: "Blueberry Pie With Sweet Almond Crust",
      image: "https://spoonacular.com/recipeImages/635513-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 635039,
      title: "Bittersweet Chocolate Gelato",
      image: "https://spoonacular.com/recipeImages/635039-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 635041,
      title: "Bittersweet chocolate pudding",
      image: "https://spoonacular.com/recipeImages/635041-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 635043,
      title: "Bittersweet Chocolate-Walnut Bundt Cake",
      image: "https://spoonacular.com/recipeImages/635043-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 658975,
      title: "SAFFRON INFUSED RICE PUDDING WITH SWEETENED WHOLE WHEAT PANCAKES",
      image: "https://spoonacular.com/recipeImages/658975-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 641745,
      title: "Dump Cake",
      image: "https://spoonacular.com/recipeImages/641745-312x231.jpg",
      imageType: "jpg",
    },
  ];

  console.log(data);
  return loading ? (
    <Loader />
  ) : (
    <Box className="dot-bg" mt={"90px"}>
      <SimpleGrid columns={[2, null, 3]} gap="20px" placeItems={"center"}>
        {data?.map((el) => (
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

export default Recipes;
