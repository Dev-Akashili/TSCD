import { Box, HStack } from "@chakra-ui/react";

type ButtonLayoutProps = {
  align?: any;
  margin?: string;
  children: JSX.Element | JSX.Element[];
};

export const ButtonLayout = (props: ButtonLayoutProps) => {
  return (
    <HStack textAlign={props.align}>
      <Box m={props.margin}>{props.children}</Box>
    </HStack>
  );
};
