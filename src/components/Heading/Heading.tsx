import { Heading } from "@chakra-ui/react";

type HeadingProps = {
  name: string | number | undefined;
  color?: string;
  topMargin?: string;
  bottomMargin?: string;
};

export const HeadingComponent = (props: HeadingProps) => {
  return (
    <Heading
      as="h1"
      color={props.color}
      textAlign={{ base: "center" }}
      mt={props.topMargin}
      mb={props.bottomMargin}
    >
      {props.name}
    </Heading>
  );
};
