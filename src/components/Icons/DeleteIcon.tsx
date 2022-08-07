import { DeleteIcon } from "@chakra-ui/icons";

type DeleteIconComponentProps = {
  onClick?: any;
};

export const DeleteIconComponent = (props: DeleteIconComponentProps) => {
  return <DeleteIcon color="red" onClick={props.onClick} />;
};
