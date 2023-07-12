import React, { useState, useContext, useEffect, useRef } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { white } from "tailwindcss/colors";
import uuid from "uuid/v4";
import "react-dnd";
import MoveContext from "../Context/MoveContext";
const onDragEnd = (result, columns, columnupdate,setButtonClicked) => {
  if (!result.destination) return;
  const { source, destination } = result;
  //  console.log(source);
  //  console.log(destination);
   
  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    // console.log(sourceItems);
    const [removed] = sourceItems.splice(source.index, 1);
    // console.log(removed.val);
    var x= removed.val;

    var copy=removed;
    if(x==0){
       copy= {
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
      }
    }else if(x==1){
      copy= {
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
      }
    }else if(x==2){
      copy= {
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
      }
    }else if(x==3){
     copy={
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
    }
    }else if(x==4){
      copy={
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
      }
    }else if(x==5){
      copy={
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
      }
    }else if(x==6){
      copy={
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
      }
    }else if(x==7){
      copy={
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
      }
    }else if(x==8){
      copy={
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
      }
    }else if(x==9){
      copy={
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
      }
    }else if(x==10){
      copy={
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
      }
    }else if(x==11){
      copy={
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
      }
    }else if(x==12){
      copy={
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
      }
    }else if(x==13){
      copy={
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
      }
    }else if(x==14){
      copy={
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
      }
    }else if(x==15){
       copy={
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
      }
    }
    destItems.splice(destination.index, 0, copy);
    columnupdate({
      ...columns,
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    })
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
   
    copiedItems.splice(destination.index, 0, removed);
    columnupdate({
      ...columns,
      [destination.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

function Content() {
  const a = useContext(MoveContext);
  const buttonClicked=a.buttonClicked;
  const columnupdate=a.columnupdate;
  const setButtonClicked=a.setButtonClicked;

  useEffect(() => {
    if (buttonClicked.acc) {
      var x = a.state.x;
      var y = a.state.y;
      var zz = a.state.rotate;
      var v = buttonClicked.val;
      var t = a.state.opcacity;
      var type = a.st.curr;
      var tw = a.state.opcacity3;
      var tp = a.state.opcacity2;
      // console.log(type);
      if (type == 1) {
        //  console.log("here");
        if (v == 0) {
          // console.log("gfdg");
          // console.log(x,y,zz,t,tp,tw);
          a.update(x, y + 50, 0, t, tp, tw);
          // console.log(x,y,zz,t,tp,tw);
        } else if (v == 1) {
          a.update(x, y, zz - 15, t, tp, tw);
        } else if (v == 2) {
          a.update(x, y, zz + 15, t, tp, tw);
        } else if (v == 3) {
          const minx = 29; // Minimum value
          const maxx = 500; // Maximum v
          const miny = 845; // Minimum value
          const maxy = 1000; // Maximum value
          const randomIntx =
            Math.floor(Math.random() * (maxx - minx + 1)) + minx;
          const randomInty =
            Math.floor(Math.random() * (maxy - miny + 1)) + miny;
          console.log(randomIntx, randomInty, t, tp, tw);
          a.update(randomIntx, randomInty, zz, t, tp, tw);
        } else if (v == 4) {
          a.update(x + 5, y, zz, t, tp, tw);
        } else if (v == 5) {
          var extrx= buttonClicked.x;
          a.update(extrx, y, zz, t, tp, tw);
        } else if (v == 6) {
          a.update(x, y, zz, t, 1, tw);
          const timer = setTimeout(() => {
            // Code to be executed after 2 seconds
            a.update(x, y, zz, t, 0, tw);
          }, 2000);
          // clearTimeout(timer);
        } else if (v == 7) {
          a.update(x, y, zz, t, 1, tw);
        } else if (v == 8) {
          a.update(x, y, zz, t, 0, 1);
          const timer = setTimeout(() => {
            // Code to be executed after 2 seconds
            a.update(x, y, zz, t, 0, 0);
          }, 2000);
          // clearTimeout(timer);
        } else if (v == 9) {
          a.update(x, y, zz, t, 0, 1);
        } else if (v == 10) {
          a.update(x, y, zz, 1, tp, tw);
        } else if (v == 11) {
          a.update(x, y, zz, 0, tp, tw);
          console.log(a.state.opacity);
        } else if (v == 12) {
        }
        else if (v == 15) {
          var extrx= buttonClicked.x;
          a.update(x, extrx, zz, t, tp, tw);
        }
      } else {
        x = a.state2.x;
        y = a.state2.y;
        zz = a.state2.rotate;
        t = a.state2.opcacity;
        tw = a.state2.opcacity3;
        tp = a.state2.opcacity2;
        if (v == 0) {
          a.update2(x, y + 50, 0, t, tp, tw);
        } else if (v == 1) {
          a.update2(x, y, zz - 15, t, tp, tw);
        } else if (v == 2) {
          a.update2(x, y, zz + 15, t, tp, tw);
        } else if (v == 3) {
          const minx = 29; // Minimum value
          const maxx = 500; // Maximum v
          const miny = 845; // Minimum value
          const maxy = 1000; // Maximum value
          const randomIntx =
            Math.floor(Math.random() * (maxx - minx + 1)) + minx;
          const randomInty =
            Math.floor(Math.random() * (maxy - miny + 1)) + miny;
          console.log(randomIntx, randomInty, t, tp, tw);
          a.update2(randomIntx, randomInty, zz, t, tp, tw);
        } else if (v == 4) {
          a.update2(x + 5, y, zz, t, tp, tw);
        } else if (v == 5) {
          var extrx= buttonClicked.x;
          a.update2(x, y, zz, t, tp, tw);
        } else if (v == 6) {
          a.update2(x, y, zz, t, 1, tw);
          const timer = setTimeout(() => {
            // Code to be executed after 2 seconds
            a.update2(x, y, zz, t, 0, tw);
          }, 2000);
          // clearTimeout(timer);
        } else if (v == 7) {
          a.update2(x, y, zz, t, 1, tw);
        } else if (v == 8) {
          a.update2(x, y, zz, t, 0, 1);
          const timer = setTimeout(() => {
            // Code to be executed after 2 seconds
            a.update2(x, y, zz, t, 0, 0);
          }, 2000);
          // clearTimeout(timer);
        } else if (v == 9) {
          a.update2(x, y, zz, t, 0, 1);
        } else if (v == 10) {
          a.update2(x, y, zz, 1, tp, tw);
        } else if (v == 11) {
          a.update2(x, y, zz, 0, tp, tw);
          // console.log(a.state.opacity);
        } else if (v == 12) {
        }
        else if (v == 15) {
          var extrx= buttonClicked.x;
          a.update2(x, extrx, zz, t, tp, tw);
        }
      }
    }
    // console.log(dragclick);

    return () => {
      setButtonClicked(false);
    };
  }, [buttonClicked.acc]); // Run the effect when buttonClicked state changes
  // const columns=a.columns;
  const setColumns=a.setColumns;
  const columns=a.columns;
  // console.log(columns);
  // const [columns, setColumns] = useState(columnsFromBackend);
  return (
    <div style={{ display: "flex", justifyContent: "center", minHeight:100 }}>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, columnupdate,setButtonClicked)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                minHeight:900,
                overflow:"auto"
              }}
              key={columnId}
            >
             
              <div style={{ margin: 8 }}>
              <div>{index>0?index:""}</div>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          background: "#f0f1f2",
                          padding: 4,
                          minWidth: 30,
                          minHeight: 900,
                          overflow:"auto"
                        }}
                        className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200"
                      >
                        
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    //   onClick={() => {
                                    //     handlechange(index);
                                    // }}
                                    // style={{
                                    //   userSelect: "none",
                                    //   padding: 16,
                                    //   margin: "0 0 8px 0",
                                    //   minHeight: "50px",
                                    //   backgroundColor: `${item.backg}`,
                                    //   color: "white",

                                    // ...provided.draggableProps.style,
                                    // }}
                                    
                                    className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
                                  >
                                    {item.content}
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
               
              </div>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
}

export default Content;
