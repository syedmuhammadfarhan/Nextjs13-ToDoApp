"use client";

import "./add.css";
import { useState } from "react";
import { VStack } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/layout";

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
      <h1>ToDo App</h1>
      <HStack>
        <input
          type="text"
          value={input}
          placeholder="Add input"
          onChange={(e) => setinput(e.target.value)}
        />
        <button className="add" onClick={addinput}>
          Add
        </button>
      </HStack>

      <ul>
        {add.map((e: any) => {
          if (e) {
            return (
              <li
                style={{
                  fontStyle: "oblique",
                  fontWeight: "bold",
                  listStyle: "none",

                  listStylePosition: "inside",
                  listStyleType: "none",
                }}
                key={e}
              >
                <input type="checkbox" style={{ margin: "10px" }} />
                {e}

                <button
                  style={{
                    backgroundColor: "coral",
                    margin: "10px",
                    color: "black",
                    fontFamily: "fantasy",
                    borderRadius: "6px",

                  }}
                  onClick={() => {
                    deleteinput(e);
                  }}
                >
                  Delete
                </button>
              </li>
            );
          }
        })}
      </ul>
    </VStack>
  );
}
