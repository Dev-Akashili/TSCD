import { HeadingComponent as Heading } from "../../components/Heading";
import { PageLayout } from "../../layouts/PageLayout";

export const ErrorPage = () => {
  return (
    <PageLayout>
      <Heading name="PAGE NOT FOUND" color="teal" topMargin="30px" />
    </PageLayout>
  );
};
