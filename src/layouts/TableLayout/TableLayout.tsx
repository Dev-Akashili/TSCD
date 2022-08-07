import { Table, TableContainer } from "@chakra-ui/react";

type TableLayoutProps = {
  children: JSX.Element | JSX.Element[];
};

export const TableLayout = (props: TableLayoutProps) => {
  return (
    <TableContainer>
      <Table variant="simple" colorScheme="teal">
        {props.children}
      </Table>
    </TableContainer>
  );
};
