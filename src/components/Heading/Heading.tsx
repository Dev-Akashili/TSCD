import { Heading } from "@chakra-ui/react";

type HeadingProps = {
  name: string | number | undefined;
  color?: string;
};

export const HeadingComponent = (props: HeadingProps) => {
  return (
    <Heading as="h1" color={props.color} textAlign={{ base: "center" }}>
      {props.name}
    </Heading>
  );
};
