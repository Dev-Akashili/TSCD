import { FormHelperText, FormLabel, Input } from "@chakra-ui/react";

type FormInputProps = {
  type?: string;
  label?: string;
  onChange?: any;
  height?: string;
  validation?: string;
};

export const FormInput = (props: FormInputProps) => {
  return (
    <>
      <FormLabel mt="10px">{props.label}</FormLabel>
      <Input h={props.height} type={props.type} onChange={props.onChange} />
      <FormHelperText color="red">{props.validation}</FormHelperText>
    </>
  );
};
