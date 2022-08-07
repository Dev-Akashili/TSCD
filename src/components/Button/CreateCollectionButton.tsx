import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

type CreateCollectionButtonProps = {
  name: string;
  colorScheme: string;
  size?: any;
  type?: "submit" | "button" | "reset";
  topSpacing?: string;
};

export const CreateCollectionButton = (props: CreateCollectionButtonProps) => {
  return (
    <Link to="/createcollections">
      <Button
        name={props.name}
        colorScheme={props.colorScheme}
        size={props.size}
        type={props.type}
        mt={props.topSpacing}
      >
        {props.name}
      </Button>
    </Link>
  );
};
