import { Box, Image, Text, Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const Card = () => {
  return (
    <Box
      maxW="md"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      mt={10}
      position={"relative"}
      p={10}
      bg={"white"}
    >
      <Image
        src="https://www.allrecipes.com/thmb/g2u48B-qaoX8cAzmZJfEMYi4bpI=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(1999x0:2001x2):format(webp)/8302598_Plum-and-Pecan-Muffins_Pat-Bernitt_4x3-850184c569db432ba11263df78efa12e.jpg"
        alt="Card Image"
      />

      <Box p="6">
        <Text fontSize="lg" fontWeight="bold">
          Card Title
        </Text>

        <Button
          leftIcon={<AddIcon />}
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
      </Box>
    </Box>
  );
};

export default Card;
