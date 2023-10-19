import { Image } from "@chakra-ui/react";
import LoaderLogo from "../assets/yummy-recipes-logo-fevicon.png";

const LazyImage = () => {
  return (
    <Image
      src={LoaderLogo}
      alt="Website Logo"
      boxSize="100px"
      mb="2"
      loading="lazy"
    />
  );
};

export default LazyImage;
