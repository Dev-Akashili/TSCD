import { VStack } from "@chakra-ui/react";

type PageLayoutProps = {
  children: JSX.Element | JSX.Element[];
};

export const PageLayout = (props: PageLayoutProps) => {
  return <VStack>{props.children}</VStack>;
};
