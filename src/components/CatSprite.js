import React, { useContext, useEffect, useState } from "react";
import MoveContext from "../Context/MoveContext";
import { BiSolidFlagCheckered } from "react-icons/bi";
import imag from "../hello.png";

import { AiTwotoneDelete } from "react-icons/ai";
import imag3 from "../dog.png";
import imag2 from "../hmm.png";

function CatSprite() {
  const a = useContext(MoveContext);
  const [buttonClicked, setButtonClicked] = useState(false);
  // const buttonClicked=a.buttonClicked;
  // const setButtonClicked=a.setButtonClicked;
  useEffect(() => {
    // console.log(buttonClicked);
    if (buttonClicked.acc) {
      var x = a.state.x;
      var y = a.state.y;
      var zz = a.state.rotate;
      var v = buttonClicked.val;
      console.log(v);
      var t = a.state.opcacity;
      var type = a.st.curr;
      var tw = a.state.opcacity3;
      var tp = a.state.opcacity2;
      // console.log(v);
      if (type == 1) {
        //  console.log("here");
        if (v.includes(0)) {
          // console.log("gfdg");
          // // console.log(x,y,zz,t,tp,tw);
          a.update(x, y + 50, zz, t, tp, tw);
          y = y + 50;
          //  zz=0;
          // console.log(x,y,zz,t,tp,tw);
        }
        if (v.includes(1)) {
          // console.log("dfdfdf");
          a.update(x, y, zz - 15, t, tp, tw);
          zz = zz - 15;
        }
        if (v.includes(2)) {
          a.update(x, y, zz + 15, t, tp, tw);
          zz = zz + 15;
        }
        if (v.includes(3)) {
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
          x = randomIntx;
          y = randomInty;
        }
        if (v.includes(4)) {
          a.update(x + 5, y, zz, t, tp, tw);
          x = x + 5;
        }
        if (v.includes(5)) {
          var extrx = buttonClicked.x;
          a.update(extrx, y, zz, t, tp, tw);
          x = extrx;
        }
        if (v.includes(6)) {
          a.update(x, y, zz, t, 1, tw);
          const timer = setTimeout(() => {
            // Code to be executed after 2 seconds
            a.update(x, y, zz, t, 0, tw);
          }, 2000);
          tp = 0;
          // clearTimeout(timer);
        }
        if (v.includes(7)) {
          a.update(x, y, zz, t, 1, tw);
          tp = 1;
        }
        if (v.includes(8)) {
          a.update(x, y, zz, t, 0, 1);
          const timer = setTimeout(() => {
            // Code to be executed after 2 seconds
            a.update(x, y, zz, t, 0, 0);
          }, 2000);
          // clearTimeout(timer);
          tp = 0;tw = 0;
        }
        if (v.includes(9)) {
          a.update(x, y, zz, t, 0, 1);
          tp = 0;tw = 1;
        }
        if (v.includes(10)) {
          a.update(x, y, zz, 1, tp, tw);
          t = 1;
        }
        if (v.includes(11)) {
          a.update(x, y, zz, 0, tp, tw);
          t = 0;
          // console.log(a.state.opacity);
        }
        if (v.includes(12)) {
        }
        if (v.includes(13)) {
          var extrx = buttonClicked.x;
          a.update(x, extrx, zz, t, tp, tw);
          y = extrx;
        }
      } else {
        x = a.state2.x;
        y = a.state2.y;
        zz = a.state2.rotate;
        t = a.state2.opcacity;
        tw = a.state2.opcacity3;
        tp = a.state2.opcacity2;
        if (v.includes(0)) {
          a.update2(x, y + 50, 0, t, tp, tw);
          y = y + 50;
        }
        if (v.includes(1)) {
          a.update2(x, y, zz - 15, t, tp, tw);
          zz = zz - 15;
        }
        if (v.includes(2)) {
          a.update2(x, y, zz + 15, t, tp, tw);
          zz = zz + 15;
        }
        if (v.includes(3)) {
          const minx = 29; // Minimum value
          const maxx = 500; // Maximum v
          const miny = 845; // Minimum value
          const maxy = 1000; // Maximum value
          const randomIntx =
            Math.floor(Math.random() * (maxx - minx + 1)) + minx;
          const randomInty =
            Math.floor(Math.random() * (maxy - miny + 1)) + miny;
          // console.log(randomIntx, randomInty, t, tp, tw);
          a.update2(randomIntx, randomInty, zz, t, tp, tw);
          x = randomIntx;
          y = randomInty;
        }
        if (v.includes(4)) {
          a.update2(x + 5, y, zz, t, tp, tw);
          x = x + 5;
        }
        if (v.includes(5)) {
          var extrx = buttonClicked.x;
          a.update2(x, y, zz, t, tp, tw);
          x = extrx;
        }
        if (v.includes(6)) {
          a.update2(x, y, zz, t, 1, tw);
          const timer = setTimeout(() => {
            // Code to be executed after 2 seconds
            a.update2(x, y, zz, t, 0, tw);
          }, 2000);
          tp = 0;
          // clearTimeout(timer);
        }
        if (v.includes(7)) {
          a.update2(x, y, zz, t, 1, tw);
          tp = 1;
        }
        if (v.includes(8)) {
          a.update2(x, y, zz, t, 0, 1);
          const timer = setTimeout(() => {
            // Code to be executed after 2 seconds
            a.update2(x, y, zz, t, 0, 0);
            tp = 0;tw = 0;
          }, 2000);

          // clearTimeout(timer);
        }
        if (v.includes(9)) {
          a.update2(x, y, zz, t, 0, 1);
          tp = 0;tw = 1;
        }
        if (v.includes(10)) {
          a.update2(x, y, zz, 1, tp, tw);
          t = 1;
        }
        if (v.includes(11)) {
          a.update2(x, y, zz, 0, tp, tw);
          t = 0;
          // console.log(a.state.opacity);
        }
        if (v.includes(12)) {
        }
        if (v.includes(13)) {
          var extrx = buttonClicked.x;
          a.update2(x, extrx, zz, t, tp, tw);
          y = extrx;
        }
      }
    }
    // console.log(dragclick);

    return () => {
      setButtonClicked(false);
    };
  }, [buttonClicked.acc]);
  return (
    <div>
      <BiSolidFlagCheckered
        style={{ cursor: "pointer" }}
        onClick={() => {
          //  <AiTwotoneDelete/>
          const itemsFromBackend = a.columns;
          // console.log(itemsFromBackend[2]);
          const tpp = itemsFromBackend[2].items;
          // console.log(tpp);
          if (tpp == null) return;
          var lt = [];
          tpp.map((item, index) => {
            // console.log(buttonClicked,item.val);
            lt.push(item.val);
          });
          setButtonClicked({ acc: true, val: lt, x: 0, y: 0 });
          // console.log(buttonClicked);
        }}
      />
      
      <AiTwotoneDelete
        style={{ cursor: "pointer", marginTop: "10px" }}
        onClick={() => {
          
          // console.log("heelow osjdf");
          var vl= document.getElementById("xcor").value-1;
          const itemsFromBackend = a.itemsFromBackend;
          console.log(vl);
          if(vl<0){
            a.columnupdate({
              [1]: {
                name: "",
                items: itemsFromBackend,
              },
              [2]: {
                name: "",
                items:[],
              },
            });
            return;
          }
          // alert("Deleted all code-groups");
         
          const itemsFromBackend2 = a.columns;
          // console.log(itemsFromBackend[2]);
          const tpp = itemsFromBackend2[2].items;
          var lst=[];
          tpp.map((item, index) => {
            // // console.log(buttonClicked,item.val);
            // lt.push(item.val);
             if(item.val!=vl){
              lst.push(item);
             }
          });
          a.columnupdate({
            [1]: {
              name: "",
              items: itemsFromBackend,
            },
            [2]: {
              name: "",
              items:lst,
            },
          });
        }}
      />
       <input
            type="number"
            val={4}
            defaultValue={-1}
            id="xcor"
            style={{ color: "black",width:50 }}
          />
      <div className="flex items-center space-x-4">
        <svg
          onClick={() => {
            a.settypecat();
          }}
          xmlns="http://www.w3.org/2000/svg"
          width="95.17898101806641"
          height="100.04156036376953"
          viewBox="0.3210171699523926 0.3000000357627869 95.17898101806641 100.04156036376953"
          version="1.1"
          xmlSpace="preserve"
          className="inline-block"
          style={{
            top: a.state.x,
            left: a.state.y,
            position: "absolute",
            transform: "rotate(" + a.state.rotate + "deg)",
            opacity: a.state.opcacity,
            cursor: "pointer",
          }}
        >
          <g>
            <g id="Page-1" stroke="none" fillRule="evenodd">
              <g id="costume1">
                <g id="costume1.1">
                  <g id="tail">
                    <path
                      d="M 21.9 73.8 C 19.5 73.3 16.6 72.5 14.2 70.3 C 8.7 65.4 7 57.3 3.2 59.4 C -0.7 61.5 -0.6 74.6 11.6 78.6 C 15.8 80 19.6 80 22.7 79.9 C 23.5 79.9 30.4 79.2 32.8 75.8 C 35.2 72.4 33.5 71.5 32.7 71.1 C 31.8 70.6 25.3 74.4 21.9 73.8 Z "
                      stroke="#001026"
                      strokeWidth="1.2"
                      fill="#FFAB19"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M 3.8 59.6 C 1.8 60.2 0.8 64.4 1.8 67.9 C 2.8 71.4 4.4 73.2 5.7 74.5 C 5.5 73.8 5.1 71.6 6.8 70.3 C 8.9 68.6 12.6 69.5 12.6 69.5 C 12.6 69.5 9.5 65.7 7.9 63 C 6.3 60.7 5.8 59.2 3.8 59.6 Z "
                      id="detail"
                      fill="#FFFFFF"
                      strokeWidth="1"
                    />
                  </g>
                  <path
                    d="M37.7,81.5 C35.9,82.7 29.7,87.1 21.8,89.6 L21.4,89.7 C21,89.8 20.8,90.3 21,90.7 C22.7,93.1 25.8,97.9 20.3,99.6 C15,101.3 5.1,87.2 9.3,83.5 C11.2,82.1 12.9,82.8 13.8,83.2 C14.3,83.4 14.8,83.4 15.3,83.3 C16.5,82.9 18.7,82.1 20.4,81.2 C24.7,79 25.7,78.1 27.7,76.6 C29.7,75.1 34.3,71.4 38,74.6 C41.2,77.3 39.4,80.3 37.7,81.5 Z"
                    id="leg"
                    stroke="#001026"
                    strokeWidth="1.2"
                    fill="#FFAB19"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M53.6,60.7 C54.1,61.1 60.2,68.3 62.2,66.5 C64.6,64.4 67.9,60.3 71.5,63.6 C75.1,66.9 68.3,72.5 65.4,74 C58.5,77.1 52.9,71.2 51.7,69.6 C50.5,68 48.4,65.3 48.4,62.7 C48.5,59.9 51.9,59.2 53.6,60.7 Z"
                    id="arm"
                    stroke="#001026"
                    strokeWidth="1.2"
                    fill="#FFAB19"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="body-and-leg">
                    <path
                      d="M 46.2 76.7 C 47.4 75.8 48.6 74.3 50.2 72 C 51.5 70.1 52.9 66.4 52.9 66.4 C 53.8 63.9 54.4 59.1 51.1 59.2 C 48.9 59.3 46.9 59 43.5 58.5 C 37.5 57.3 36.4 56.5 33.9 60.6 C 31.2 65.4 24.3 68.9 32.8 77.2 C 32.8 77.2 37.7 81 43.6 86.8 C 47.6 90.7 53.9 96.3 56.1 98.2 C 56.6 98.6 57.2 98.8 57.8 98.9 C 67.5 99.8 74.7 98.8 74.7 94.5 C 74.7 87.3 60.4 89.8 60.4 89.8 C 60.4 89.8 55.8 85.9 53.7 84 L 46.2 76.7 Z "
                      id="body"
                      stroke="#001026"
                      strokeWidth="1.2"
                      fill="#FFAB19"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M 50.6 70 C 50.6 70 52.5 67.5 48.2 64.8 C 43.7 61.9 42 65.1 40.2 67.5 C 38.2 70.6 40.2 72.1 42.2 73.9 C 43.8 75.4 45.3 76.6 45.3 76.6 C 45.3 76.6 48.4 74.5 50.6 70 Z "
                      id="tummy"
                      fill="#FFFFFF"
                      strokeWidth="1"
                    />
                  </g>
                  <path
                    d="M30.2,68.4 C32.4,71.2 35.8,74.7 31.5,77.6 C25.6,80.9 20.7,70.9 19.7,67.4 C18.8,64.3 21.4,62.3 23.6,60.6 C27.9,57.5 31.5,54.7 35.5,56.2 C40.5,58 36.9,62 34.4,63.8 C32.9,64.9 31.4,66.1 30.3,66.8 C30,67.3 29.9,67.9 30.2,68.4 Z"
                    id="arm"
                    stroke="#001026"
                    strokeWidth="1.2"
                    fill="#FFAB19"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="head">
                    <path
                      d="M 53.1 9 C 50.8 8.6 48.4 8.4 45.6 8.6 C 40.9 8.8 36.4 10.5 36.4 10.5 L 24.3 2.6 C 23.9 2.4 23.4 2.7 23.5 3.1 L 25.6 21 C 26.2 20.2 15 33.8 22.1 45.2 C 29.2 56.6 44.3 61.7 63.1 58 C 81.9 54.3 86.3 43.5 85.1 37.8 C 83.9 32.1 76.8 30 76.8 30 C 76.8 30 76.7 25.5 73.5 20 C 71.6 16.7 65.2 12 65.2 12 L 62.6 1.3 C 62.5 0.9 62 0.8 61.7 1 L 53.1 9 Z "
                      stroke="#001026"
                      strokeWidth="1.2"
                      fill="#FFAB19"
                    />
                    <path
                      d="M 76.5 30.4 C 76.5 30.4 83.4 32.2 84.6 37.9 C 85.8 43.6 81 53.9 62.4 57.5 C 38.2 62.5 26.7 48.1 33.4 37.5 C 40.1 26.8 51.6 35.9 60 35.3 C 67.2 34.8 68 28.5 76.5 30.4 Z "
                      id="face"
                      fill="#FFFFFF"
                      strokeWidth="1"
                    />
                    <path
                      d="M 45 41.1 C 45 40.7 45.4 40.4 45.8 40.5 C 47.7 41.2 53.1 42.8 59.1 43.2 C 64.5 43.5 67.7 43.2 69.2 42.9 C 69.7 42.8 70.1 43.3 69.9 43.8 C 69 46.5 65.2 54 54.7 53.4 C 45.6 52.4 44.7 46 45 41.1 Z "
                      id="mouth"
                      stroke="#001026"
                      strokeWidth="1.2"
                      fill="#FFFFFF"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M 83 35.4 C 83 35.4 90.2 35.3 94.9 31.5 "
                      id="whisker"
                      stroke="#001026"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <path
                      d="M 83.4 41.3 C 83.4 41.3 87.3 43.2 93.6 42.7 "
                      id="whisker"
                      stroke="#001026"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <path
                      d="M 59.6 32.7 C 61.7 32.7 63.9 32.9 64 33.6 C 64.1 35 62.6 37.8 61 37.9 C 59.2 38.1 55 35.6 55 34 C 54.9 32.8 57.6 32.7 59.6 32.7 Z "
                      id="nose"
                      stroke="#001026"
                      strokeWidth="1.2"
                      fill="#001026"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M 14.6 31.2 C 14.6 31.2 23.2 34 26.7 37.1 "
                      id="whisker"
                      stroke="#001026"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <path
                      d="M 15.3 41.2 C 15.3 41.2 22.7 42.3 27 40.6 "
                      id="whisker"
                      stroke="#001026"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <g id="eye">
                      <path
                        d="M 71.4 21 C 74.3 25.5 74.4 30.6 71.6 32.4 C 68.8 34.2 64.2 32.1 61.2 27.6 C 58.3 23.1 58.2 18 61 16.2 C 63.8 14.3 68.5 16.5 71.4 21 Z "
                        id="pupil"
                        stroke="#001026"
                        strokeWidth="1.2"
                        fill="#FFFFFF"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M 71 26.7 C 71 27.8 70.2 28.7 69.2 28.7 C 68.2 28.7 67.4 27.8 67.4 26.7 C 67.4 25.6 68.2 24.7 69.2 24.7 C 70.2 24.7 71 25.6 71 26.7 "
                        id="pupil"
                        fill="#001026"
                        strokeWidth="1"
                      />
                    </g>
                    <g id="eye">
                      <path
                        d="M 46.6 23.8 C 49.6 28.2 49.4 33.6 46.7 35.5 C 43.4 37.4 39 36 36 31.6 C 32.9 27.2 32.7 21.5 35.8 19.3 C 38.9 17 43.6 19.4 46.6 23.8 Z "
                        stroke="#001026"
                        strokeWidth="1.2"
                        fill="#FFFFFF"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M 46 29.6 C 46 30.7 45.2 31.6 44.2 31.6 C 43.2 31.6 42.4 30.7 42.4 29.6 C 42.4 28.5 43.2 27.6 44.2 27.6 C 45.2 27.7 46 28.5 46 29.6 "
                        id="pupil"
                        fill="#001026"
                        strokeWidth="1"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>

        <img
          src={imag}
          style={{
            top: a.state.x,
            left: a.state.y + 70,
            width: "50px",
            position: "absolute",
            transform: "rotate(" + a.state.rotate + "deg)",

            opacity: a.state.opcacity2,
          }}
        />
        <img
          src={imag2}
          style={{
            top: a.state.x,
            left: a.state.y + 70,
            width: "50px",
            position: "absolute",
            transform: "rotate(" + a.state.rotate + "deg)",
            opacity: a.state.opcacity3,
          }}
        />

        <img
          src={imag3}
          onClick={() => {
            console.log(a.st);
            console.log("dog is setted");
            a.settypedog();
            console.log(a.st);
          }}
          style={{
            top: a.state2.x,
            left: a.state2.y,
            cursor: "pointer",
            width: "100px",
            position: "absolute",
            transform: "rotate(" + a.state2.rotate + "deg)",
          }}
        />

        <img
          src={imag}
          style={{
            top: a.state2.x,
            left: a.state2.y + 90,
            width: "50px",
            position: "absolute",
            transform: "rotate(" + a.state2.rotate + "deg)",

            opacity: a.state2.opcacity2,
          }}
        />
        <img
          src={imag2}
          style={{
            top: a.state2.x,
            left: a.state2.y + 90,
            width: "50px",
            position: "absolute",
            transform: "rotate(" + a.state2.rotate + "deg)",
            opacity: a.state2.opcacity3,
          }}
        />
      </div>
      <div className="mt-798" style={{marginTop:350}}>
  <h3 className="text-lg font-semibold">Notes</h3>
  <ol className="mt-2 list-decimal">
    <li>To select a sprite, click on it. By default, Cat is selected.</li>
    <li>Click on the Flag icon to execute the code blocks.</li>
    <li>Click on the Delete icon to delete the Code Groups <hr></hr>and if want to delete any single code block then click <hr></hr> on -1 and enter block id no and delete it</li>
  </ol>
</div>
    </div>
  );
}

export default CatSprite;
