import React from "react";
import { useField } from "formik";
import {
    FormControl,
    FormLabel,
    InputGroup,
    InputLeftElement,
    Input,
    IconButton,
    InputRightElement
} from "@chakra-ui/react"
import { MoonIcon,EmailIcon,ViewIcon,ViewOffIcon } from '@chakra-ui/icons'




export const InputText=({label, ...props})=> {
    const [field] = useField(props);
    return(
        <FormControl>
            
            <FormLabel htmlFor={field.name}>{label}</FormLabel>
            <Input isRequired placeholder="Your Name" variant="outline" {...field} {...props}/>
        </FormControl>
    )
}

export const InputTextWIcon=({label,logo,...props})=> {
    const [field] = useField(props);
    return(
        <FormControl>
            <FormLabel htmlFor={field.name}>{label}</FormLabel>
            <InputGroup>
                <InputLeftElement
                    pointerEvents="none"
                    children={logo}
                />
                <Input isRequired placeholder="abcde@email.com" variant="outline" id="myemail" {...field} {...props}/>
            </InputGroup>
        </FormControl>
    )
}

export const Inp=({label,...props})=> {
    const [field] = useField(props);
    const [myvalues, setValues] = React.useState({
        //password: "",
        showPassword: false,
      });
      
      const handleClickShowPassword = () => {
        setValues({ ...myvalues, showPassword: !myvalues.showPassword });
      };
      
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
      
      const handlePasswordChange = (prop) => (event) => {
        setValues({ ...myvalues, [prop]: event.target.value });
      };
    return(
        <FormControl>
        <FormLabel mt={5}>{label}</FormLabel>
            <InputGroup>
                <Input isRequired placeholder="********"   variant="outline" type={myvalues.showPassword ? "text" : "password"} onChange={handlePasswordChange("password")} {...field} {...props}  />
                <InputRightElement>
                <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                variant="unstyled"
                >
                {myvalues.showPassword ? <ViewOffIcon /> : <ViewIcon />}
                </IconButton>
                </InputRightElement>
            </InputGroup>
        </FormControl>
        // <Input isRequired placeholder="********"   variant="outline" {...field} {...props}/>
        
    )
}

