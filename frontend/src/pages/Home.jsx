import { Box } from "@chakra-ui/react";
import Loader from "../components/Loader";

const Home = () => {
  return (
    <Box
      className="dot-bg"
      h={"100vh"}
      mt={"90px"}
      flexDir={"column"}
      w={"100%"}
      maxW="1200px"
      mx="auto"
    >
      Home
      <Loader />
    </Box>
  );
};

export default Home;
