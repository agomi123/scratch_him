import React from "react";
import MoveContext from "./MoveContext";
import uuid from "uuid/v4";
import { useState, useRef } from "react";
const CatState = (props) => {
  const pos = {
    x: 29,
    y: 845,
    rotate: 0,
    opcacity: 1,
    opcacity2: 0,
    opcacity3: 0,
  };

  var pos2 = {
    x: 129,
    y: 825,
    rotate: 0,
    opcacity: 1,
    opcacity2: 0,
    opcacity3: 0,
  };
  const elementRef = useRef(null);
  const type = {
    curr: 1,
  };
  const [buttonClicked, setButtonClicked] = useState({ acc: false, val: 0 });
  const itemsFromBackend = [
    {
      id: uuid(),
      val:0,
      content: (
        <div
          onClick={() => {
            setButtonClicked({
              acc: true,
              val: 0,
              x: 0,
              y: 0,
            });
          }}
        >
          1.Move 10 steps
        </div>
      ),
    },
    {
      id: uuid(),
      val:1,
      content: (
        <div
          onClick={() => {
            setButtonClicked({
              acc: true,
              val: 1,
              x: 0,
              y: 0,
            });
          }}
        >
          2.Turn 15 degree clockwise
        </div>
      ),
    },
    {
      id: uuid(),
      val:2,
      content: (
        <div
          onClick={() => {
            setButtonClicked({
              acc: true,
              val: 2,
              x: 0,
              y: 0,
            });
          }}
        >
          3.Turn 15 degree anticlockwise
        </div>
      ),
    },
    {
      id: uuid(),
      val:3,
      content: (
        <div
          onClick={() => {
            setButtonClicked({
              acc: true,
              val: 3,
              x: 0,
              y: 0,
            });
          }}
        >
          4.Go to random Pointer
        </div>
      ),
    },
    {
      id: uuid(),
      val:4,
      content: (
        <div
          onClick={() => {
            setButtonClicked({
              acc: true,
              val: 4,
              x: 0,
              y: 0,
            });
          }}
        >
          5.Go to X+5
        </div>
      ),
    },

    {
      id: uuid(),
      val:5,
      content: (
        <div
          onClick={() => {
            setButtonClicked({
              acc: true,
              val: 5,
              x: document.getElementById("xcoor").value,
              y: 0,
            });

            // console.log(document.getElementById("xcoor").value);
            // setButtonClicked({ acc: true, val: 0,x:document.getElementById("xcoor").value });
          }}
        >
          6.Change X to
          <input
            type="number"
            val={4}
            defaultValue={10}
            id="xcoor"
            style={{ color: "black" }}
          />
        </div>
      ),
    },

    {
      id: uuid(),
      val:6,
      content: (
        <div
          onClick={() => {
            setButtonClicked({
              acc: true,
              val: 6,
              x: 0,
              y: 0,
            });
          }}
        >
          7.Say Hello for 2 seconds
        </div>
      ),
    },

    {
      id: uuid(),
      val:7,
      content: (
        <div
          onClick={() => {
            setButtonClicked({
              acc: true,
              val: 7,
              x: 0,
              y: 0,
            });
          }}
        >
          8.Say Hello
        </div>
      ),
    },

    {
      id: uuid(),
      val:8,
      content: (
        <div
          onClick={() => {
            setButtonClicked({
              acc: true,
              val: 8,
              x: 0,
              y: 0,
            });
          }}
        >
          9.Say Hmm for 2 seconds
        </div>
      ),
    },
    {
      id: uuid(),
      val:9,
      content: (
        <div
          onClick={() => {
            setButtonClicked({
              acc: true,
              val: 9,
              x: 0,
              y: 0,
            });
          }}
        >
          10.Say Hmm
        </div>
      ),
    },
    {
      id: uuid(),
      val:10,
      content: (
        <div
          onClick={() => {
            setButtonClicked({
              acc: true,
              val: 10,
              x: 0,
              y: 0,
            });
          }}
        >
          11.Show
        </div>
      ),
    },

    {
      id: uuid(),
      val:11,
      content: (
        <div
          onClick={() => {
            setButtonClicked({
              acc: true,
              val: 11,
              x: 0,
              y: 0,
            });
          }}
        >
          12.hide
        </div>
      ),
    },

    {
      id: uuid(),
      val:12,
      content: (
        <div
          onClick={() => {
            setButtonClicked({
              acc: true,
              val: 12,
              x: 0,
              y: 0,
            });
          }}
        >
          13.When Flag Clicked
        </div>
      ),
    },
    {
      id: uuid(),
      val:13,
      content: (
        <div
          onClick={() => {
            setButtonClicked({
              acc: true,
              val: 13,
              x: 0,
              y: 0,
            });
          }}
        >
          14.When Sprite Clicked
        </div>
      ),
    },

    {
      id: uuid(),
      val:14,
      content: (
        <div
          onClick={() => {
            setButtonClicked({
              acc: true,
              val: 14,
              x: 0,
              y: 0,
            });
          }}
        >
          15.Delete
        </div>
      ),
    },
    {
      id: uuid(),
      val:15,
      content: (
        <div
          onClick={() => {
            setButtonClicked({
              acc: true,
              val: 15,
              x: document.getElementById("xcoor").value,
              y: 0,
            });

            // console.log(document.getElementById("xcoor").value);
            // setButtonClicked({ acc: true, val: 0,x:document.getElementById("xcoor").value });
          }}
        >
          16.Change Y to
          <input
            type="number"
            val={4}
            defaultValue={10}
            id="xcoor"
            style={{ color: "black" }}
          />
        </div>
      ),
    },
  ];
  var columnsFromBackend = {
    [1]: {
      name: "",
      items: itemsFromBackend,
    },
    [2]: {
      name: "",
      items: [],
    }, 
    [3]: {
      name: "",
      items: [],
    }, 
    
  };
  const [columns, setColumns] = useState(columnsFromBackend);
  const columnupdate = ( tp) => {
    setColumns(tp);
    // console.log(columnsFromBackend);
    columnsFromBackend=tp;
    // console.log(columnsFromBackend);
  };
  const [state, setState] = useState(pos);
  const [st, setst] = useState(type);
  const [state2, setState2] = useState(pos2);

  const update = (nx, ny, nz, no, op2, op3) => {
    console.log(nx,ny,nz,no,op2,op3);
    var np={
      x: nx,
      y: ny,
      rotate: nz,
      opcacity: no,
      opcacity2: op2,
      opcacity3: op3,
    };
    setState(np);
    // pos=np;
  };

  const update2 = (nx, ny, nz, no, op2, op3) => {
    setState2({
      x: nx,
      y: ny,
      rotate: nz,
      opcacity: no,
      opcacity2: op2,
      opcacity3: op3,
    });
  };
  const settypedog = () => {
    setst({
      curr: 2,
    });
  };
  const settypecat = () => {
    setst({
      curr: 1,
    });
  };
  return (
    <MoveContext.Provider
      value={{
        state,
        update,
        elementRef,
        state2,
        update2,
        st,
        settypecat,
        settypedog,
        buttonClicked,
        setButtonClicked,
        columns,
        columnupdate,
        itemsFromBackend,
        columnsFromBackend,
        setColumns,
        // x2
      }}
    >
      {props.children}
    </MoveContext.Provider>
  );
};

export default CatState;
