import {
  Box,
  Flex,
  Input,
  Link as ChakraLink,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
 
  IconButton,
  Stack,
  Select,
  Divider,
} from "@chakra-ui/react";
import Logo from "../assets/yummy-recipes-logo.png";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../reudx/authReducer/userSlice";
import { FcLike } from "react-icons/fc";
import { SearchIcon } from "@chakra-ui/icons";

import { useState } from "react";
import {
  recipeFailure,
  recipeSuccess,
  recipeStart,
} from "../reudx/recipeReducer/recipeSlice";
const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
const Navbar = () => {
  const [search, setSearch] = useState("");
  const { currentUser } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const handleLogOut = async () => {
    try {
      await fetch("/api/v1/auth/logout");
      dispatch(logOut());
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = async () => {
    try {
      dispatch(recipeStart());
      const res = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&query=${search}}&number=6`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      console.log("data", data, apiKey);
      if (data.success == false) {
        dispatch(recipeFailure(data.message));
      }

      dispatch(recipeSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(recipeFailure(error));
    }
  };
  console.log(search);
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
            <Stack>
              <Flex mx={20} align={"center"} gap={5}>
                <Flex>
                  <Input
                    type="text"
                    placeholder="Search for recipes..."
                    size="md"
                    bg="white"
                    borderRadius="md"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <IconButton
                    aria-label="search"
                    icon={<SearchIcon />}
                    onClick={handleSearch}
                  />
                </Flex>
                <Menu>
                  <MenuButton>
                    <Image
                      src={currentUser.profilePicture}
                      alt={currentUser.username}
                      w={50}
                      borderRadius={"50%"}
                    />
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Profile</MenuItem>
                    <MenuItem bg={"red"} color={"white"} onClick={handleLogOut}>
                      Logout
                    </MenuItem>
                  </MenuList>
                </Menu>

                <IconButton
                  colorScheme="red"
                  aria-label="Like"
                  as={RouterLink}
                  to="/recipes"
                  fontWeight="bold"
                  icon={<FcLike />}
                />
              </Flex>
              <Divider />
              <Flex size={"sm"}>
                <Select variant="unstyled" placeholder="Sort" />
                <Box>filter</Box>
                <Box>Sort</Box>
              </Flex>
            </Stack>
          </>
        ) : (
          <>
            <Box>
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
