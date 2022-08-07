import { Alert, Box, AlertIcon } from "@chakra-ui/react";

type AlertComponentProps = {
  type: "success" | "error";
  message: string;
};

export const AlertComponent = (props: AlertComponentProps) => {
  return (
    <Box w={{ lg: "650px", base: "80%" }}>
      <Alert status={props.type} mt="50px">
        <AlertIcon />
        {props.message}
      </Alert>
    </Box>
  );
};
