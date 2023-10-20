import { useState } from "react";
import {
  Box,
  Flex,
  Input,
  Button,
  Link as ChakraLink,
  Image,
} from "@chakra-ui/react";
import Logo from "../assets/yummy-recipes-logo.png";
import { Link as RouterLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const [auth, setAuth] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  return (
    <Box
      bg="#f5f6ea"
      color="black"
      py={2}
      boxShadow="base"
      position={"fixed"}
      zIndex={10}
      top={0}
      w={"100%"}
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        maxW="1200px"
        mx="auto"
      >
        <ChakraLink as={RouterLink} to="/">
          <Image src={Logo} alt="logo" w={20} />
        </ChakraLink>

        {currentUser ? (
          <>
            {" "}
            <Flex mx={20} align={"center"}>
              <Input
                type="text"
                placeholder="Search for recipes..."
                size="sm"
                bg="white"
                borderRadius="md"
              />

              <Image
                src={currentUser.profilePicture}
                alt={currentUser.username}
                w={10}
                borderRadius={"50%"}
              />
              <ChakraLink
                as={RouterLink}
                to="/recipes"
                fontWeight="bold"
                mx={2}
                _hover={{
                  textDecoration: "underline",
                }}
              >
                My Recipes
              </ChakraLink>
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
