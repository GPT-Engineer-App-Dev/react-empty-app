import { Container, Text, VStack, Box, Flex, Spacer, Heading, IconButton } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="blue.500" color="white" p={4} align="center">
        <Heading size="md">MyApp</Heading>
        <Spacer />
        <IconButton
          aria-label="Menu"
          icon={<FaBars />}
          display={{ base: "block", md: "none" }}
        />
        <Box display={{ base: "none", md: "block" }}>
          <Text as="a" href="#" p={2}>Home</Text>
          <Text as="a" href="#" p={2}>About</Text>
          <Text as="a" href="#" p={2}>Contact</Text>
        </Box>
      </Flex>
      <Container centerContent maxW="container.md" height="80vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <Text fontSize="2xl">Your Blank Canvas</Text>
          <Text>Chat with the agent to start making edits.</Text>
        </VStack>
      </Container>
    </Container>
  );
};

export default Index;