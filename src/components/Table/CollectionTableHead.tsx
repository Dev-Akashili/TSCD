import { Th, Thead, Tr } from "@chakra-ui/react";

type CollectionTableHeadProps = {
  id: string;
  field1: string;
  field2: string;
};

export const CollectionTableHead = (props: CollectionTableHeadProps) => {
  return (
    <Thead>
      <Tr >
        <Th>{props.id}</Th>
        <Th>{props.field1}</Th>
        <Th textAlign="center">{props.field2}</Th>
      </Tr>
    </Thead>
  );
};
