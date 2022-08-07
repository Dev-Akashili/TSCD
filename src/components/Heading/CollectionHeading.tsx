import { Heading, HStack } from "@chakra-ui/react";

type CollectionHeadingProps = {
  first_heading: string;
  second_heading: string;
};

export const CollectionHeading = (props: CollectionHeadingProps) => {
  return (
    <HStack p="10px">
      <Heading m ="25px"  size="md" color="teal" >
        {props.first_heading}
      </Heading>
      <Heading m ="25px"  size="md" color="teal" >
        {props.second_heading}
      </Heading>
    </HStack>
  );
};
