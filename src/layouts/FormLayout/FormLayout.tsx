import { Box, FormControl } from "@chakra-ui/react";

type FormLayoutProps = {
  onSubmit?: any;
  children: JSX.Element | JSX.Element[];
};

export const FormLayout = (props: FormLayoutProps) => {
  return (
    <Box w={{ lg: "650px", base: "80%" }}>
      <FormControl isRequired onSubmit={props.onSubmit}>
        {props.children}
      </FormControl>
    </Box>
  );
};
