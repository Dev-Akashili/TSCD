import { Tbody } from "@chakra-ui/react";

type TableBodyProps = {
  children: JSX.Element | JSX.Element[];
};

export const TableBody = (props: TableBodyProps) => {
  return <Tbody>{props.children}</Tbody>;
};
