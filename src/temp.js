import React from 'react'
import http from 'http';
const Temp = () => {
  return (
    <div>
      <form id="formv">
        <input defaultValue={"Enter the id"} className='idvl'></input>
        </form>
        <button onclick={()=>{
            http.ClientRequest('https://jsonplaceholder.typicode.com/posts',(Response)=>{
                        
            });
        //   http.ClientRequest('https://jsonplaceholder.typicode.com/posts',()=>{
              
        //   });
        }}>Fetch Data</button>
        <p className='result'></p>
    </div>
  )
}

export default Temp
