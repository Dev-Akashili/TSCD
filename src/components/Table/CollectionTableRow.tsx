import { Td, Tr } from "@chakra-ui/react";

type CollectionTableRowProps = {
  id: number;
  diseaseTerm: string;
  title: string;
  children: JSX.Element | JSX.Element[];
};

export const CollectionTableRow = (props: CollectionTableRowProps) => {
  return (
    <Tr>
      <Td>{props.id}</Td>
      <Td>{props.diseaseTerm}</Td>
      <Td>{props.title}</Td>
      <Td>{props.children}</Td>
    </Tr>
  );
};
