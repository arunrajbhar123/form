import React, { useState,useRef } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
  RadioGroup,
  HStack,
  Radio,
  Button,
  Box,
} from "@chakra-ui/react";
import styles from "./styles/Form.module.css";
import {v4} from 'uuid'


const Form = ({handlesheet}) => {

const [formInfo, setFormInfo] = useState('');

const handleonChnage=(e)=>{

let {name,value,type,checked}=e.target;

if(type=="checkbox"){
  setFormInfo({
    ...formInfo,
    [name]:checked,
  })
}
setFormInfo({
  ...formInfo,
  [name]:value,
})

}




  const handleClick = (e) => {
    e.preventDefault();
  
    handlesheet(formInfo);
  };
  return (
    <div className={styles.container}>
      <Box className={styles.main}>
        <form action="" onSubmit={handleClick}>

        <FormControl isRequired >
          <FormLabel htmlFor="first-name">First name</FormLabel>
          <Input id="first-name" placeholder="First name" name="name" onChange={handleonChnage}/>
          <FormLabel htmlFor="Age">Age</FormLabel>
          <Input id="Age" placeholder="Enter Age" name="age" onChange={handleonChnage}/>
          <FormLabel htmlFor="address">Address</FormLabel>
          <Input id="address" placeholder="Enter Address" name="address" onChange={handleonChnage}/>
          <FormLabel htmlFor="department">Department</FormLabel>
          <Select id="department" name="department" placeholder="Select Department" onChange={handleonChnage}>
            <option>Mern</option>
            <option>Java</option>
            <option>Python</option>
          </Select>
          <FormLabel htmlFor="salary">Salary</FormLabel>
          <Input id="salary" placeholder="Enter Salary" name="salary" onChange={handleonChnage}/>
          <FormLabel as="legend">Marital State</FormLabel>
          <RadioGroup >
            <HStack spacing="24px">
              <Radio value="Single" name="status"  onChange={handleonChnage}>Single</Radio>
              <Radio value="Married" name="status"  onChange={handleonChnage}>Married</Radio>
            </HStack>
          </RadioGroup>
          <Button
            type="submit"
            colorScheme="teal"
            size="md"
            className={styles.button}
          >
            Button
          </Button>
        </FormControl>
        </form>
      </Box>
    </div>
  );
};

export default Form;
