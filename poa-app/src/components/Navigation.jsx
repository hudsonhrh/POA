// src/components/Navigation.jsx
import React from "react";
import Link from "next/link";
import { Flex, Button, IconButton } from "@chakra-ui/react";
import Image from "next/image";

const Navigation = () => {
  return (
    <Flex
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg="transparent"
      position="fixed"
      top={0}
      w="100%"
      shadow={"md"}
    >
      {/* Wrap each Link in a Button component */}
      <Link href="/landing" passHref>
        <IconButton
          icon={
            <Image
              src="/images/poa_logo.png"
              alt="Home"
              width={54}
              height={48}
            />
          }
          variant="ghost"
          aria-label="Home"
        />
      </Link>
      
      <Link href="/architect" passHref>
        <Button variant="ghost" p={4}>
          Architect
        </Button>
      </Link>

      <Link href="/browser" passHref>
        <Button variant="ghost" p={4}>
          Browser
        </Button>
      </Link>
      <Link href="/about" passHref>
        <Button variant="ghost" p={4}>
          About
        </Button>
      </Link>
    </Flex>
  );
};

export default Navigation;
