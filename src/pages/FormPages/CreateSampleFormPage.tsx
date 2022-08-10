import Axios from "axios";
import { useState } from "react";
import { ButtonComponent as Button } from "../../components/Button";
import { FormInput } from "../../components/Form";
import { HeadingComponent } from "../../components/Heading";
import { FormLayout } from "../../layouts/FormLayout";
import { PageLayout } from "../../layouts/PageLayout";
import { Link, useParams } from "react-router-dom";
import { ButtonLayout } from "../../layouts/ButtonLayout";
import { AlertComponent as Alert } from "../../components/Alert";
import { SpinnerComponent as Spinner } from "../../components/Spinner";

export const CreateSampleFormPage = () => {
  // State management for variables
  const { displayId, id } = useParams();
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [donorCount, setDonorCount] = useState();
  const [materialType, setMaterialType] = useState();
  const [spinnerValidation, setSpinnerValidation] = useState(false);
  const [donorCountValidation, setDonorCountValidation] = useState("");
  const [materialTypeValidation, setMaterialTypeValidation] = useState("");

  // Return to provious page link
  const prevPageLink = `/collections/${displayId}/${id}`;

  // Functions to update state variables with input data
  function handledonorCountChange(event: React.FormEvent<HTMLFormElement>) {
    setDonorCount(event.currentTarget.value);
  }

  function handleMaterialTypeChange(event: React.FormEvent<HTMLFormElement>) {
    setMaterialType(event.currentTarget.value);
  }

  // Function to create a Sample
  function postData(event: React.MouseEvent<HTMLElement>) {
    if (success) {
      setSuccess(false);
    }
    if (failure) {
      setFailure(false);
    }
    event.preventDefault();

    // Custom form validation
    if (
      donorCount === "" ||
      donorCount === undefined ||
      materialType === "" ||
      materialType === undefined
    ) {
      if (donorCount === "" || donorCount === undefined) {
        setDonorCountValidation("This field cannot be left empty");
      }
      if (materialType === "" || materialType === undefined) {
        setMaterialTypeValidation("This field cannot be left empty");
      }
    } else {
      setDonorCountValidation("");
      setMaterialTypeValidation("");
      setSpinnerValidation(true);

      const test: any = displayId;

      // Send data to database to create new sample and update
      Axios.post("https://tscd-ignition.herokuapp.com/samples", {
        donorCount,
        materialType,
        collectionId: test,
      })
        .then((res) => {
          if (res.status === 201) {
            setSuccess(true);
            setSpinnerValidation(false);
          } else {
            setFailure(true);
            setSpinnerValidation(false);
          }
        })
        .catch((err) => {
          if (err) {
            setFailure(true);
            setSpinnerValidation(false);
          }
        });
    }
  }

  return (
    <PageLayout>
      <HeadingComponent name="Create Sample" color="teal" topMargin="20px" />
      <FormLayout>
        <FormInput
          height="50px"
          label="Donor Count"
          type="text"
          validation={donorCountValidation}
          onChange={handledonorCountChange}
        />
        <FormInput
          height="50px"
          label="Material Type"
          type="text"
          validation={materialTypeValidation}
          onChange={handleMaterialTypeChange}
        />
        <ButtonLayout>
          <Button
            name="Create"
            colorScheme="teal"
            size="lg"
            type="button"
            topSpacing="20px"
            onClick={postData}
            margin="25px 0px 25px 0px"
          />
          <Link to={prevPageLink}>
            <Button
              name="Go Back"
              colorScheme="teal"
              size="lg"
              variant="outline"
              margin="25px"
            />
          </Link>
        </ButtonLayout>
      </FormLayout>
      {success ? (
        <Alert
          type="success"
          message="You have succesfully added a new sample"
        />
      ) : (
        <></>
      )}
      {spinnerValidation ? (
        <Spinner
          name="Adding new sample please wait..."
          size="xl"
          color="teal"
        />
      ) : (
        <></>
      )}
      {failure ? (
        <Alert type="error" message="Failed to create a new sample" />
      ) : (
        <></>
      )}
    </PageLayout>
  );
};
