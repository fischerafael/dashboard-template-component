import React from "react";
import * as Chakra from "@chakra-ui/react";
import { DashboardTemplate } from "../../components/DashboardTemplate";

export const PageAppDashboard = () => {
  return (
    <DashboardTemplate
      logo={<Chakra.Image maxW="48px" src="/next.svg" />}
      header={
        <>
          <Chakra.HStack>
            <Chakra.Avatar
              size="sm"
              bg="purple"
              color="white"
              src="/"
              name="Rafael Fischer"
            />
            <Chakra.VStack align="flex-start" spacing="0">
              <Chakra.Text>Rafael Fischer</Chakra.Text>
              <Chakra.Text fontSize="xs">rafael@gmail.com</Chakra.Text>
            </Chakra.VStack>
          </Chakra.HStack>

          <Chakra.HStack>
            <Chakra.Button>Log Out</Chakra.Button>
          </Chakra.HStack>
        </>
      }
      sidebar={
        <>
          <Chakra.VStack gap="16">
            <Chakra.Text>Link 1</Chakra.Text>
            <Chakra.Text>Link 1</Chakra.Text>
            <Chakra.Text>Link 1</Chakra.Text>
            <Chakra.Text>Link 1</Chakra.Text>
            <Chakra.Text>Link 1</Chakra.Text>
            <Chakra.Text>Link 1</Chakra.Text>
            <Chakra.Text>Link 1</Chakra.Text>
            <Chakra.Text>Link 1</Chakra.Text>
            <Chakra.Text>Link 1</Chakra.Text>
            <Chakra.Text>Link 1</Chakra.Text>
            <Chakra.Text>Link 1</Chakra.Text>
            <Chakra.Text>Link 1</Chakra.Text>
            <Chakra.Text>Link 1</Chakra.Text>
            <Chakra.Text>Link 1</Chakra.Text>
            <Chakra.Text>Link 1</Chakra.Text>
          </Chakra.VStack>
        </>
      }
      main={
        <Chakra.VStack>
          <Chakra.VStack w="full" h="30vh" bg="green" />
          <Chakra.VStack w="full" h="30vh" bg="green" />
          <Chakra.VStack w="full" h="30vh" bg="green" />
          <Chakra.VStack w="full" h="30vh" bg="green" />
          <Chakra.VStack w="full" h="30vh" bg="green" />
          <Chakra.VStack w="full" h="30vh" bg="green" />
        </Chakra.VStack>
      }
    />
  );
};
