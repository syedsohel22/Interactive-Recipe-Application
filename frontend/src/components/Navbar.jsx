import { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Input,
  Button,
  Link as ChakraLink,
  Image,
} from "@chakra-ui/react";
import Logo from "../assets/yummy-recipes-logo.png";
import { Link as RouterLink } from "react-router-dom";
const Navbar = () => {
  const [auth, setAuth] = useState(false);
  return (
    <Box bg="#f5f6ea" color="black" py={2} >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        maxW="1200px"
        mx="auto"
      >
        <Image src={Logo} alt="logo" w={20} />

        {auth ? (
          <>
            {" "}
            <Flex mx={4}>
              <Input
                type="text"
                placeholder="Search for recipes..."
                size="sm"
                bg="white"
                borderRadius="md"
              />

              <ChakraLink
                as={RouterLink}
                to="/your-route"
                fontWeight="bold"
                mx={2}
                _hover={{
                  textDecoration: "underline",
                }}
              >
                Recipes
              </ChakraLink>

              <Button colorScheme="#f5f6ea" size="sm" mx={2}>
                Saved Recipes
              </Button>
            </Flex>{" "}
          </>
        ) : (
          <>
            <Box>
              <ChakraLink
                as={RouterLink}
                to="/login"
                fontWeight="bold"
                mx={2}
                _hover={{
                  textDecoration: "underline",
                }}
              >
                Login
              </ChakraLink>

              <ChakraLink
                as={RouterLink}
                to="/register"
                fontWeight="bold"
                mx={2}
                _hover={{
                  textDecoration: "underline",
                }}
              >
                Register
              </ChakraLink>
            </Box>
          </>
        )}
      </Flex>
    </Box>
  );
};

export default Navbar;
