// import { Box, Image, Text, Button } from "@chakra-ui/react";
// import { AddIcon } from "@chakra-ui/icons";

// const Card = () => {
//   return (
//     <Box
//       w={"400px"}
//       borderWidth="1px"
//       borderRadius="lg"
//       overflow="hidden"
//       boxShadow="md"
//       mt={10}
//       position={"relative"}
//       bg={"white"}
//       p={2}
//       display="flex"
//       alignItems="center"
//       justifyContent="space-between"
//       flexDir={"column"}
//     >
//       <Image
//         src="https://www.allrecipes.com/thmb/g2u48B-qaoX8cAzmZJfEMYi4bpI=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(1999x0:2001x2):format(webp)/8302598_Plum-and-Pecan-Muffins_Pat-Bernitt_4x3-850184c569db432ba11263df78efa12e.jpg"
//         alt="Card Image"
//       />

//       <Box p="2">
//         <Text fontSize="lg" fontWeight="bold">
//           Card Title
//         </Text>

//         <Button
//           leftIcon={<AddIcon />}
//           colorScheme="red"
//           variant="outline"
//           borderRadius="full"
//           position={"absolute"}
//           top={0}
//           left={0}
//           m={10}
//         >
//           Like
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default Card;
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
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
