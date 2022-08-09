import Axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  CollectionHeading,
  HeadingComponent as Heading,
} from "../../components/Heading";
import { SpinnerComponent as Spinner } from "../../components/Spinner";
import { SampleTableRow } from "../../components/Table/SampleTableRow";
import { PageLayout } from "../../layouts/PageLayout";
import { Collection } from "../../types/CollectionType";
import { SampleType } from "../../types/SampleType";
import { TableLayout } from "../../layouts/TableLayout";
import { SampleTableHead, TableBody } from "../../components/Table";
import { ButtonComponent as Button } from "../../components/Button";
import { DeleteIconComponent as DeleteIcon } from "../../components/Icons";
import { ModalComponent as Modal } from "../../components/Modal";
import { ButtonLayout } from "../../layouts/ButtonLayout";

export const CollectionPage = () => {
  let displayId = 0;
  const { displayId: pageId, id: collectionid } = useParams();
  const [post, setPost] = useState<Collection>({});
  const [samplePost, setSamplePost] = useState([]);

  // Get Collection Data from Database
  useEffect(() => {
    Axios.get(`https://tscd-ignition.herokuapp.com/collections/${collectionid}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { diseaseTerm, id, title } = post;
  const pageTitle = `Collection ID: ${pageId}`;

  // Declare Heading string variables
  const first_heading = `Disease Term: ${diseaseTerm}`;
  const second_heading = `Title: ${title}`;

  //Get Sample Data from Database
  useEffect(() => {
    Axios.get("https://tscd-ignition.herokuapp.com/samples/")
      .then((res) => {
        setSamplePost(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // Function to seperate spicific samples for specific Collection
  function sampleForCollection(sample: SampleType) {
    const collectionId = `${sample.collectionId}`;
    if (pageId === collectionId) {
      return sample;
    }
  }
  const samplesArray = samplePost.filter(sampleForCollection);
  const sampleLink = `/createsample/${pageId}/${collectionid}`;

  // Get all Relevant Samples
  const samplesForCollection = samplePost.filter((sample) => {
    const { collectionId } = sample;
    const collectionIdString = `${collectionId}`;
    return collectionIdString === pageId;
  });

  // Function to render and/or delete the Samples Table
  function createTableRow(sample: SampleType) {
    const { id: deleteId } = samplesForCollection[displayId];
    displayId++;

    // Function to delete a Sample
    function deleteSample() {
      Axios.delete(
        `https://tscd-ignition.herokuapp.com/samples/${deleteId}`
      ).then(() => window.location.reload());
    }

    return (
      <SampleTableRow
        id={displayId}
        collectionId={sample.collectionId}
        donorCount={sample.donorCount}
        materialType={sample.materialType}
        lastUpdated={sample.lastUpdated}
        key={uuidv4()}
      >
        <Modal
          name="Are You Sure You Want To Delete"
          message="This action is permanent and cannot be undone"
          onClick={deleteSample}
        >
          <DeleteIcon />
        </Modal>
      </SampleTableRow>
    );
  }

  if (diseaseTerm === undefined || title === undefined || id === undefined) {
    return <Spinner size="xl" color="teal" />;
  } else {
    return (
      <PageLayout>
        <Heading name={pageTitle} color="teal" topMargin="20px" />
        <CollectionHeading
          first_heading={first_heading}
          second_heading={second_heading}
        />
        {samplesArray.length ? (
          <Heading name="Samples" color="teal" bottomMargin="20px" />
        ) : (
          <></>
        )}
        {samplesArray.length ? (
          <TableLayout>
            <SampleTableHead
              id="ID"
              field1="Collection_Id"
              field2="Donor_Count"
              field3="Material_Type"
              field4="Last_Updated"
            />
            <TableBody>{samplesArray.map(createTableRow)}</TableBody>
          </TableLayout>
        ) : (
          <Heading name="THIS COLLECTION HAS NO SAMPLES" color="teal" />
        )}

        <ButtonLayout>
          <Link to={sampleLink}>
            <Button
              name="Add Sample"
              colorScheme="teal"
              size="lg"
              margin="25px"
            />
          </Link>
          <Link to="/">
            <Button
              name="Go Back"
              colorScheme="teal"
              size="lg"
              margin="25px"
              variant="outline"
            />
          </Link>
        </ButtonLayout>
      </PageLayout>
    );
  }
};
