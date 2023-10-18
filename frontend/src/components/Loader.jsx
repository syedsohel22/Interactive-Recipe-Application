import { Center, Spinner, Image, Heading, Box } from "@chakra-ui/react";
import laoderLogo from "../assets/yummy-recipes-logo-fevicon.png";
const Loader = () => {
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      width="100vw"
      height="100vh"
      zIndex="9999"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Center h="100vh" flexDir="column">
        <Image src={laoderLogo} alt="Website Logo" boxSize="100px" mb="2" />
        <Spinner
          thickness="10px"
          speed="0.65s"
          emptyColor="gray.200"
          color="#fad1ac"
          size="xl"
        />
        <Heading as={"h3"}>Loading...</Heading>
      </Center>
    </Box>
  );
};

export default Loader;