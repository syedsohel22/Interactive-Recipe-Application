import {
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
} from "@chakra-ui/react";
import { MdBookmarkBorder, MdBookmark } from "react-icons/md";
const CardItem = () => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">Living room Sofa</Heading>
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
      >
        Like
      </Button>
    </Card>
  );
};

export default CardItem;
