import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import CardItem from "../components/CardItem";
import { useEffect, useState } from "react";
import { MdBookmarkBorder, MdBookmark } from "react-icons/md";
import Loader from "../components/Loader";
const Recipes = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3001/recipes`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        console.log(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  console.log(data);
  return loading ? (
    <Loader />
  ) : (
    <Box className="dot-bg" mt={"90px"}>
      <SimpleGrid columns={[2, null, 3]} gap="20px" placeItems={"center"}>
        {data?.map((el, i) => (
          <Card maxW="sm" key={i}>
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
                <Heading size="md">{el.title}</Heading>
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
        ))}
        <CardItem />
      </SimpleGrid>
    </Box>
  );
};

export default Recipes;
