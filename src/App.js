import React, { useEffect, useState } from 'react'
import SwornMembers from './components/SwordMembers';


function App() {

  const [data, setData] = useState([]);


  useEffect(()=>{

    const fetchData = async ()=>{
      try{

        const res = await fetch('https://anapioficeandfire.com/api/houses');
        const jsonToArr = await res.json();
        setData(jsonToArr);
       
       
    }catch(error){
      console.log(error);
    }
  };

  fetchData();

  },[]);


  return (
    <div>
     <div>
      <h1>Houses</h1>
      <table className='table'>
    <thead>
      <tr>

    <th > House name </th>
    <th > Region </th>
    <th > titles </th>
    <th > Swornmembers </th>
      </tr>
    

    </thead>
    <tbody>
        {data.map((house) => (
          
          <tr>

            <td>
              {house.name}
            </td>
            <td>
             {house.region}
            </td>
            
            <td>
             {house.titles.length? house.titles.map((t)=>(<span>{t}, </span>)):<> None</>}
            </td>
            <td>
             {house.swornMembers.length?<SwornMembers members = {house.swornMembers}/>:<>None</>}
            </td>
           
            </tr>
        ))}
        
        </tbody>  
    </table>
    </div>


    </div>
    
  )
};

export default App
