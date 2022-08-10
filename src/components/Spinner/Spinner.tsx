import { Center, Heading, Spinner, VStack } from "@chakra-ui/react";

type SpinnerComponentProps = {
  size: string;
  color: string;
  name: string;
  margin?: string;
};

export const SpinnerComponent = (props: SpinnerComponentProps) => {
  return (
    <Center mt="30%">
      <VStack>
        <Spinner
          size={props.size}
          color={props.color}
          thickness="4px"
          m={props.margin}
        />
        <Heading size="lg" color="teal">
          {props.name}
        </Heading>
      </VStack>
    </Center>
  );
};
