import React from "react"
import {
    Button,
    Flex,
    IconButton,
    Heading,
    useColorMode,
    Tooltip,
} from "@chakra-ui/react"
import { Formik, Form } from "formik";
import { MoonIcon,EmailIcon } from '@chakra-ui/icons'
import { InputText, InputTextWIcon, Inp} from "../Input/input";
import { useHistory } from "react-router-dom";
import backImg from "../../images/signup.png"
export let data;
const Signup  = () => {
    const history = useHistory();

    const onSubmitHandle = (values, actions) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, 2))
          data = JSON.parse(JSON.stringify(values, 2))
          actions.setSubmitting(false)
          console.log(data)
          history.push("/login");

        }, 1000)
    }

    const {toggleColorMode} = useColorMode()

    return(
        
        <Flex height="100vh" alignItems="center" bgImage={backImg} justifyContent="center">
            <Flex border="solid" borderRadius="10px" p={10} direction="column">
                <Tooltip label="Toggle Color Theme">
                    <IconButton
                    onClick={toggleColorMode}
                    variant="unstyled"
                    w={5}
                    icon={<MoonIcon/>}
                    >
                    </IconButton>
                </Tooltip>

                <Heading textAlign="center" ml={10} mr={10} mb={10} fontWeight="bold">SignUp</Heading>
                <Formik
                 initialValues={{
                     name: '',
                     email: '',
                     password: ''
                 }}
                 onSubmit={onSubmitHandle}
                >
                    {formik=> (            
                        <Form>
                            {console.log(formik.values)}
                            <InputText name="name" label="Name" type="text"  />
                            <InputTextWIcon  logo={<EmailIcon/>} type="email" label="Email" name="email" />
                            <Inp name="password" label="Password"/>
                            <Button mt={4} type="submit">
                                Sign Up
                            </Button>
                        </Form>
                    )}
                </Formik>
                
            </Flex>
            
        </Flex>
    );
}

 
export default Signup