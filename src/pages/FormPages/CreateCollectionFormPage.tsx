import Axios from "axios";
import { useState } from "react";
import { ButtonComponent as Button } from "../../components/Button";
import { FormInput } from "../../components/Form";
import { HeadingComponent } from "../../components/Heading";
import { FormLayout } from "../../layouts/FormLayout";
import { PageLayout } from "../../layouts/PageLayout";
import { AlertComponent } from "../../components/Alert";
import { ButtonLayout } from "../../layouts/ButtonLayout";
import { Link } from "react-router-dom";
import { SpinnerComponent as Spinner } from "../../components/Spinner";

export const CreateCollectionFormPage = () => {
  // State management for all Parameters
  const [diseaseTerm, setDiseaseTerm] = useState();
  const [title, setTitle] = useState();
  const [diseaseTermValidation, setDiseaseTermValidation] = useState("");
  const [titleValidation, setTitleValidation] = useState("");
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [spinnerValidation, setSpinnerValidation] = useState(false);

  // Functions to update Input Data to state variables
  function handleDiseaseTermChange(event: React.FormEvent<HTMLFormElement>) {
    setDiseaseTerm(event.currentTarget.value);
  }

  function handleTitleChange(event: React.FormEvent<HTMLFormElement>) {
    setTitle(event.currentTarget.value);
  }

  function resetAlertOptions() {
    setSuccess(false);
    setFailure(false);
  }

  // Function to create a Collection
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
      diseaseTerm === "" ||
      diseaseTerm === undefined ||
      title === "" ||
      title === undefined
    ) {
      if (diseaseTerm === "" || diseaseTerm === undefined) {
        setDiseaseTermValidation("This field cannot be left empty");
      }
      if (title === "" || title === undefined) {
        setTitleValidation("This field cannot be left empty");
      }
    } else {
      setDiseaseTermValidation("");
      setTitleValidation("");
      setSpinnerValidation(true);

      //Send new Collection data to database
      Axios.post("https://tscd-ignition.herokuapp.com/collections", {
        diseaseTerm,
        title,
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
      <HeadingComponent
        name="Create Collection"
        color="teal"
        topMargin="20px"
      />
      <FormLayout>
        <FormInput
          height="50px"
          label="Disease Term"
          type="text"
          validation={diseaseTermValidation}
          onChange={handleDiseaseTermChange}
        />
        <FormInput
          height="50px"
          label="Title"
          type="text"
          validation={titleValidation}
          onChange={handleTitleChange}
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
          <Link to="/">
            <Button
              name="Go Back"
              colorScheme="teal"
              size="lg"
              variant="outline"
              margin="25px"
              onClick={resetAlertOptions}
            />
          </Link>
        </ButtonLayout>
      </FormLayout>
      {success ? (
        <AlertComponent
          type="success"
          message="You have succesfully added a new collection"
        />
      ) : (
        <></>
      )}
      {spinnerValidation ? (
        <Spinner
          name="Adding new collection please wait..."
          size="xl"
          color="teal"
        />
      ) : (
        <></>
      )}
      {failure ? (
        <AlertComponent
          type="error"
          message="Failed to create a new collection"
        />
      ) : (
        <></>
      )}
    </PageLayout>
  );
};
