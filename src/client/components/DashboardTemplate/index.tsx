import React, { ReactNode } from "react";
import * as Chakra from "@chakra-ui/react";

interface DashboardTemplateProps {
  logo: ReactNode;
  sidebar: ReactNode;
  header: ReactNode;
  main: ReactNode;
}

export const DashboardTemplate = ({
  logo,
  sidebar,
  header,
  main,
}: DashboardTemplateProps) => {
  return (
    <Chakra.Grid w="full" templateColumns="96px 11fr">
      {/* SIDEBAR */}
      <Chakra.VStack spacing="0" zIndex="10" shadow="md" h="100vh">
        <Chakra.VStack h="10vh" w="full" justify="center">
          {/* LOGO */}
          {logo}
        </Chakra.VStack>
        <Chakra.Grid
          w="full"
          h="full"
          overflowY="auto"
          css={{
            "&::-webkit-scrollbar": {
              width: "4px",
            },
            "&::-webkit-scrollbar-track": {
              width: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "gray.200",
              borderRadius: "24px",
            },
          }}
        >
          {sidebar}
        </Chakra.Grid>
      </Chakra.VStack>
      {/* MAIN SECTION */}
      <Chakra.VStack spacing="0" h="100vh">
        <Chakra.HStack h="10vh" w="full" justify="space-between" px="8">
          {/* HEADER */}
          {header}
        </Chakra.HStack>

        <Chakra.Grid
          w="full"
          h="full"
          overflowY="auto"
          p="8"
          css={{
            "&::-webkit-scrollbar": {
              width: "4px",
            },
            "&::-webkit-scrollbar-track": {
              width: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "gray.200",
              borderRadius: "24px",
            },
          }}
        >
          {main}
        </Chakra.Grid>
      </Chakra.VStack>
    </Chakra.Grid>
  );
};
