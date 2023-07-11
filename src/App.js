import React, { useContext } from "react";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import CatState from "./Context/CatState";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import MoveContext from "./Context/MoveContext";
import Content from "./components/Content";

export default function App() {
  const b = useContext(MoveContext);

  return (
    // <Content/>
    // <DragDropContext>
    <CatState>
      {/* <DragDropContext onDragEnd={(result)=>{}}> */}
      <div className="bg-blue-100 pt-6 font-sans">
        <div className="h-screen overflow-hidden flex flex-row  ">
          <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
            {/* <Sidebar />

 
            <MidArea /> */}
            <Content />
            <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
              <PreviewArea />
            </div>
          </div>
        </div>
      </div>
      {/* </DragDropContext> */}
    </CatState>
  );
}

// Ability to delete a code-block
// ability to add multiple code-groups

