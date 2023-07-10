import React from "react";
import { useState, useContext,useRef } from "react";
import MoveContext from "../Context/MoveContext";
export default function MidArea() {
  const a = useContext(MoveContext);
  const myElementRef = useRef(null);

  
  return (
    <div className="flex-1 h-full overflow-auto">
      <p style={{color:"green", fontSize:'15px',marginTop:"20px"}}>1.Click on the sprite to choose them , The operation will be performed on choosen sprite.</p>
      {/* <div className="h-full overflow-auto">
      {a.midarea.map((item,index)=>{    
        return <div key={index} className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          {item}
        </div>
      }
      )}
    </div> */}
    </div>
  );
}
