import { ViewIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

type ViewIconProps = {
  color: string;
};

export const ViewIconComponent = (props: ViewIconProps) => {
  return (
    <Button variant="link">
      <ViewIcon color={props.color} />
    </Button>
  );
};
