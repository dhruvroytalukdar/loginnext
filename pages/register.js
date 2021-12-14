import { useRouter } from "next/router";
import { useState } from "react";
import { useAuth } from "../hooks/contextHooks";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  Button,
  Center,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  useColorMode,
  useToast,
} from "@chakra-ui/react";
import Head from "next/head";

export default function register() {
  const { createUser } = useAuth();
  const router = useRouter();
  const toast = useToast();

  const { colorMode } = useColorMode();

  const [cred, setCred] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCred((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formSubmit = (e) => {
    e.preventDefault();
    if (cred.email === "" || cred.password === "") {
      setError("Please provide a email or password");
      return;
    }
    createUser(cred.email, cred.password)
      .then(() => {
        setError(null);
        toast({
          title: `Account created successfully and logged in as ${cred.email}`,
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        router.push("/");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <Center h="90vh">
      <Head>
        <title>Register Page</title>
      </Head>
      <Flex
        direction="column"
        justify="space-between"
        border="1px"
        borderColor={colorMode == "light" ? "gray.300" : "gray.500"}
        p={10}
        boxShadow="md"
        w="30rem"
        borderRadius="8px"
      >
        {error && (
          <Alert status="error">
            <AlertIcon />
            <AlertTitle mr={2}>{error}</AlertTitle>
          </Alert>
        )}
        <Heading textAlign="center" as="h2" mb="1rem">
          Register
        </Heading>
        <form onSubmit={formSubmit}>
          <FormControl id="email" py="1rem">
            <FormLabel fontSize="lg">Email address</FormLabel>
            <Input
              size="md"
              name="email"
              onChange={handleChange}
              type="email"
            />
            <FormHelperText>Provide your email</FormHelperText>
          </FormControl>
          <FormControl id="password" py="1rem">
            <FormLabel fontSize="lg">Password</FormLabel>
            <Input
              size="md"
              name="password"
              onChange={handleChange}
              type="password"
            />
            <FormHelperText>Provide your password</FormHelperText>
          </FormControl>
          <Flex mt="1rem" justify="space-between">
            <Button
              bg={colorMode == "light" ? "teal.100" : "teal.800"}
              variant="solid"
              type="submit"
            >
              Submit
            </Button>
            <Button
              bg={colorMode == "light" ? "green.200" : "green.700"}
              variant="solid"
              onClick={() => router.push("/login")}
            >
              Already have an account?
            </Button>
          </Flex>
        </form>
      </Flex>
    </Center>
  );
}
