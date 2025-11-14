import { Heading, Text, VStack } from '@chakra-ui/react';

export default function Home() {
  return (
    <VStack spacing={4} align="start">
      <Heading>Welcome</Heading>
      <Text fontSize="lg">This is a demo dashboard for NestJS microservices.</Text>
    </VStack>
  );
}
