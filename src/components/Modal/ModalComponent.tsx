import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

type ModalLayoutProps = {
  name: string;
  message: string;
  onClick?: any;
  children: JSX.Element | JSX.Element[];
};

export const ModalComponent = (props: ModalLayoutProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button variant="link" onClick={onOpen}>{props.children}</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="teal">{props.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody color="tea">{props.message}</ModalBody>

          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={props.onClick} colorScheme="red">
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
