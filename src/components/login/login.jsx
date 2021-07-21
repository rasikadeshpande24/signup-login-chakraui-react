import React from "react"
import {
    Button,
    Flex,
    IconButton,
    Heading,
    useColorMode,
    Tooltip,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription
} from "@chakra-ui/react"
import { MoonIcon,EmailIcon } from '@chakra-ui/icons'
import { InputTextWIcon, Inp} from "../Input/input";
import { Formik,Form } from "formik";
import {data} from "../signup/signup"
import { useHistory } from "react-router-dom";
import backImg from "../../images/login.png"


const Login  = () => {
    let flag = 0
    const history = useHistory();
    const handleLogin = (values, actions) => {
        
        setTimeout(() => {
          actions.setSubmitting(false)
            console.log(values)
            let loginData = JSON.parse(JSON.stringify(values, 2))
            console.log(data.email, loginData.email)

            if(data.email === loginData.email && data.password === loginData.password) {
                console.log("ok")
                history.push("/welcome");
                flag = 0
            } else {
                flag = 1
            }
        }, 500)  
      }

    const {toggleColorMode} = useColorMode()

    return(
        <Flex height="100vh" alignItems="center" justifyContent="center"  bgImage={backImg} bgRepeat="no-repeat">
            <Flex direction="column" bgColor="#17d485" p={10} borderRadius="10px">
                <Tooltip label="Toggle Color Theme">
                    <IconButton
                    onClick={toggleColorMode}
                    variant="unstyled"
                    w={5}
                    icon={<MoonIcon/>}
                    >
                    </IconButton>
                </Tooltip>

                <Heading textAlign="center" ml={10} mr={10} mb={10} fontWeight="bold">Login</Heading>
                <Formik
                 initialValues={{
                     email: '',
                     password: ''
                 }}
                 onSubmit={handleLogin}
                >
                    {formik=> (            
                        <Form>
                            {console.log(formik.values)}
                            <InputTextWIcon  logo={<EmailIcon/>} type="email" label="Email" name="email" />
                            <Inp name="password" label="Password"/>
                            <Button mt={4} colorScheme="teal" type="submit">
                                Login
                            </Button>
                            {
                                flag == 1
                                ? <Alert status="error">
                                <AlertIcon />
                                    <AlertTitle mr={2}>User not found!</AlertTitle>
                                    <AlertDescription>Check you email and password.</AlertDescription>
                                </Alert>
                                :
                                console.log("all good")
                            
                            }   
                        </Form>
                    )}
                </Formik>       
            </Flex>
        </Flex>
    );
}

export default Login
