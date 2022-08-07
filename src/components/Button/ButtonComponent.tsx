import { Button } from "@chakra-ui/react";

type ButtonComponentProps = {
  name: string;
  colorScheme: string;
  size?: string;
  type?: "submit" | "button" | "reset";
  topSpacing?: string;
  leftspacing?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  margin?: string;
  variant?: string;
};

export const ButtonComponent = (props: ButtonComponentProps) => {
  return (
    <Button
      name={props.name}
      colorScheme={props.colorScheme}
      size={props.size}
      type={props.type}
      variant={props.variant}
      mt={props.topSpacing}
      onClick={props.onClick}
      m={props.margin}
      ml={props.leftspacing}
    >
      {props.name}
    </Button>
  );
};
