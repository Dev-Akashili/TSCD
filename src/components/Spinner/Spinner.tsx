import { Center, Spinner } from "@chakra-ui/react";

type SpinnerComponentProps = {
  size: string;
  color: string;
  margin?: string;
};

export const SpinnerComponent = (props: SpinnerComponentProps) => {
  return (
    <Center mt="30%">
      <Spinner
        size={props.size}
        color={props.color}
        thickness="4px"
        m={props.margin}
      />
    </Center>
  );
};
