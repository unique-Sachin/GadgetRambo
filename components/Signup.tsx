import React from "react";
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
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import style from "../styles/Signup.module.css"

const Signup = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [password, setPassword] = React.useState<string>("");
  const [userName, setUserName] = React.useState<string>("");
  const [details, setDetails] = React.useState<object>({
    USERNAME: "",
    PASSWORD: "",
  });

  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };
  const userHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setUserName(e.target.value);
  };
  const userDetails = () => {
    setDetails({
      USERNAME: userName,
      PASSWORD: password,
    });
  };
  console.log(details);
  return (
    <div>
      <div onClick={onOpen} className={style.loginButton}>
        Signup
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <h1 className={style.loginHead}>SIGNUP</h1>
            <form>
              <h3 className={style.loginHeadBase}>USERNAME</h3>
              <InputGroup>
                <Input
                  type="tel"
                  value={userName}
                  placeholder="Enter Username"
                  onChange={(e) => userHandler(e)}
                />
              </InputGroup>
              <h3 className={style.loginHeadBase}>PASSWORD</h3>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  value={password}
                  placeholder="Enter Password"
                  onChange={(e) => passwordHandler(e)}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <br />
              <div style={{textAlign:"center"}}>
                <Button colorScheme="red" onClick={userDetails}>Sign Up</Button>
              </div>
            </form>
          </ModalBody>

          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Signup;