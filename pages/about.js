import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";

export default function About() {
  return (
    <Flex px="10rem" h="90vh" direction="column">
      <Head>
        <title>About</title>
      </Head>
      <Heading as="h1" py="2rem">
        About
      </Heading>
      <Box>
        <Text>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Suspendisse in euismod dolor, eget euismod
          purus. Pellentesque augue libero, efficitur a purus at, tincidunt
          aliquam mauris. Phasellus ultrices, velit sed rutrum convallis, arcu
          nulla auctor quam, et laoreet dui lacus nec magna. Quisque porta
          lobortis eleifend. Mauris quis est aliquam, auctor eros in, sodales
          mauris. Nulla pharetra varius augue, nec posuere mauris luctus sit
          amet. Ut ut cursus augue, hendrerit fermentum felis. Fusce eu commodo
          velit, fermentum pellentesque erat. Vivamus viverra erat faucibus nisi
          pharetra, id tristique metus efficitur. Donec nec consectetur nisi,
          sed interdum ipsum. Vestibulum rhoncus auctor sodales. Integer aliquet
          purus sed lacinia auctor. Donec sed rhoncus metus. Mauris feugiat
          mollis tempus. Sed quis vehicula mauris. Sed ex est, efficitur in
          felis non, volutpat vehicula quam.
        </Text>
        <Text py="2rem">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
        <Text>
          Ut nec suscipit lectus, laoreet feugiat est. Aliquam nunc libero,
          pretium quis feugiat a, maximus et eros. Sed egestas dignissim risus,
          eu congue ligula maximus eget. Etiam iaculis dolor metus, a lobortis
          purus ullamcorper quis. In pretium rhoncus arcu, et imperdiet urna
          imperdiet sed. Donec vel tristique arcu. In hac habitasse platea
          dictumst. Praesent sagittis erat sit amet augue lacinia, eu rutrum
          purus egestas. Sed interdum elit eget magna sodales facilisis.
          Suspendisse molestie pretium quam eu auctor. In id augue tellus. Ut
          quis maximus mi, auctor pretium velit. Duis id lacus enim. Morbi
          blandit vehicula lorem, quis maximus neque sodales sit amet. Curabitur
          vitae aliquet arcu. Nunc maximus sodales nulla non tempor. Nulla
          semper, tortor vitae pretium iaculis, justo dolor lacinia lectus, eget
          commodo tellus nibh eu tellus. Proin nec ornare urna. In id magna
          ante. Maecenas interdum sodales vulputate. Nam hendrerit gravida
          sollicitudin. Maecenas varius tellus id eros lacinia venenatis.
          Quisque sem mi, luctus nec magna sit amet, elementum placerat diam.
          Vestibulum tincidunt orci ut velit cursus, sed feugiat dui dapibus.
          Fusce ex leo, commodo vitae vulputate eget, gravida in diam. Sed ut
          eros eget nisi convallis laoreet. Nunc at justo nec lectus bibendum
          convallis.
        </Text>
      </Box>
    </Flex>
  );
}
