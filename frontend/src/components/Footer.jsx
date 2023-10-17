import { Box, Center, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" bg="#f5f6ea" color="black" padding="1rem">
      <Center>
        <Text fontSize="sm">
          &copy; {new Date().getFullYear()} Yummy Recipes. All rights reserved.
        </Text>
      </Center>
    </Box>
  );
};

export default Footer;
