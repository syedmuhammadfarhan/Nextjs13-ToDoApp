"use client";

import './add.css';
import { useState } from "react";



export default function Home() {

  const [input, setinput] = useState("")
  const [add, setadd] = useState([""])


  const addinput = () => {
    if (input === add.find((f) => f === input)) {
      return false;
    } else {
      const listArr = [...add, input]
      setadd(listArr)
      setinput('')

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
    <>


      <h1>ToDo App</h1>
      <input type="text" value={input} placeholder="Add input" onChange={(e) => setinput(e.target.value)} />
      <button className="add" onClick={addinput}>Add</button>




      <ul>
        {add.map((e: any) => {
          if (e) {
            return (
              <li style={{
                fontStyle: "oblique",
                fontWeight: "bold",
                listStyle: "none",
              }}
                key={e}>
                <input type="checkbox" style={{ margin: "10px" }} />
                {e}

                <button style={{ backgroundColor: "coral", margin: "10px", color: "black", fontFamily: "fantasy", }} onClick={() => { deleteinput(e); }}>Delete</button>
              </li>

            )
          }
        })
        }
      </ul>
    </>
  )
}
