import { HomeTablePage } from "../TablePages";
import { PageLayout } from "../../layouts/PageLayout";
import { HeadingComponent as Heading } from "../../components/Heading";
import { CreateCollectionButton as Button } from "../../components/Button";

export const HomePage = () => {
  return (
    <PageLayout>
      <Heading
        name="Tissue Sample Collection Details"
        color="teal"
        topMargin="20px"
      />
      <HomeTablePage />
      <Button
        name="Add Collection"
        colorScheme="teal"
        size="lg"
        topSpacing="20px"
      />
    </PageLayout>
  );
};
