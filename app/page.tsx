"use client";
import { Container, VStack, HStack, Heading, Input, Button, IconButton, StackDivider, Spacer, Text } from '@chakra-ui/react'
import { FaTrash } from "react-icons/fa"

import "./add.css";
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
    <Container>
      <VStack>
        <Heading my={8}>ToDo App</Heading>
        <HStack>

          <Input
            variant={'filled'}
            type="text"
            value={input}
            placeholder="Add ToDo"
            onChange={(e) => setinput(e.target.value)}
          />
          <Button colorScheme={'pink'} px='8' onClick={addinput}>
            Add
          </Button>
        </HStack>
      </VStack>

      <VStack divider={<StackDivider />} borderColor="grey.400" borderWidth={1} p={4} borderRadius={'lg'} width="100%" maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }} alignItems="stretch">


        {add.map((e: string) => {
          if (e) {
            return (

              <HStack >
                <input type="checkbox" style={{ margin: "10px" }} />
                <Text>{e}</Text>
                <Spacer />
                <IconButton icon={<FaTrash />}

                  onClick={() => {
                    deleteinput(e);
                  }} aria-label={''}                  >
                  Delete
                </IconButton>
              </HStack>

            );
          }
        })}

      </VStack>
    </Container>
  );
}
