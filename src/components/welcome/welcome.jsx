import React from "react"
import {
    Flex,
    Text
} from "@chakra-ui/react"
import {data} from "../signup/signup"
import backImg from "../../images/welcome.png"

const Welcome = () => {

    return(
        <Flex height="100vh" alignItems="center" justifyContent="center" bgRepeat="no-repeat" bgImage={backImg}>
            <Flex direction="column" bgColor="black" pl={5} pr={5} borderRadius="10px">
                <Text
                    bgGradient="linear(to-l, #7928CA,#FF0080)"
                    bgClip="text"
                    fontSize="6xl"
                    fontWeight="extrabold"
                    
                    >
                    Welcome {data.name}!
                </Text>
            </Flex>
        </Flex>
    );
}
export default Welcome
