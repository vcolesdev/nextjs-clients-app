"use client";

import React from "react";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      <CacheProvider>{children}</CacheProvider>
    </ChakraProvider>
  );
}
