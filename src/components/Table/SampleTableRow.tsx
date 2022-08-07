import { Td, Tr } from "@chakra-ui/react";

type SampleTableRowProps = {
  id: number;
  collectionId: number | undefined;
  donorCount: string;
  materialType: string;
  lastUpdated: string;
  children?: JSX.Element | JSX.Element[];
};

export const SampleTableRow = (props: SampleTableRowProps) => {
  return (
    <Tr>
      <Td>{props.id}</Td>
      <Td>{props.collectionId}</Td>
      <Td>{props.donorCount}</Td>
      <Td>{props.materialType}</Td>
      <Td>{props.lastUpdated}</Td>
      <Td>{props.children}</Td>
    </Tr>
  );
};
