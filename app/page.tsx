"use client";
import {
  VStack,
  HStack,
  Heading,
  Input,
  Button,
  IconButton,
  StackDivider,
  Spacer,
  Text,
} from "@chakra-ui/react";

import { FaTrash } from "react-icons/fa";
import { useState } from "react";

export default function Home() {
  const [input, setinput] = useState("");
  const [add, setadd] = useState([""]);

  const addinput = () => {
    if (input === add.find((f) => f === input)) {
      return false;
    } else {
      const listArr = [...add, input];
      setadd(listArr);
      setinput("");
    }
  };

  const deleteinput = (e: any) => {
    const listArr = add.filter((f) => {
      if (f === e) return false;
      return true;
    });
    setadd(listArr);
  };

  return (
    <VStack>
      <VStack>
        <Heading my={8}>ToDo App</Heading>
      </VStack>

      {add.map((e) => {
        if (e) {
          return (
            <VStack
              divider={<StackDivider />}
              borderColor="grey.400"
              borderWidth={1}
              p={4}
              borderRadius={"lg"}
              width="100%"
              maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
              alignItems="stretch"
            >
              <HStack>
                <input type="checkbox" />

                <Text key={e}>{e}</Text>
                <Spacer />
                <IconButton
                  icon={<FaTrash />}
                  onClick={() => {
                    deleteinput(e);
                  }}
                  aria-label={""}
                >
                  Delete
                </IconButton>
              </HStack>
            </VStack>
          );
        }
      })}

      <VStack>
        <HStack>
          <Input
            variant={"filled"}
            type="text"
            value={input}
            placeholder="Enter Text"
            onChange={(e: any) => setinput(e.target.value)}
          />
          <Button colorScheme={"pink"} px="8" onClick={addinput}>
            Add
          </Button>
        </HStack>
      </VStack>
    </VStack>
  );
}
