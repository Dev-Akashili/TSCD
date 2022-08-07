import { Th, Thead, Tr } from "@chakra-ui/react";

type SampleTableHeadProps = {
  id: string | number | undefined;
  field1: string;
  field2: string;
  field3: string;
  field4: string;
};

export const SampleTableHead = (props: SampleTableHeadProps) => {
  return (
    <Thead>
      <Tr>
        <Th>{props.id}</Th>
        <Th>{props.field1}</Th>
        <Th>{props.field2}</Th>
        <Th>{props.field3}</Th>
        <Th>{props.field4}</Th>
      </Tr>
    </Thead>
  );
};
