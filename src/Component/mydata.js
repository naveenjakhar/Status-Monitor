import React,{useState} from 'react';




function Mydata() {
    const [value,setValue]=useState('');
    const handleSelect=(e)=>{
      console.log(e);
      setValue(e)
    }
    return (
        <>
            
      
             <select  onChange={e => handleSelect(e.target.value) } class="form-control" id="exampleFormControlSelect1">
                            <option>4 Client(s) Selected</option>
                            <option>2</option> </select>
      <h4>You selected {value}</h4>
    

        </>
    )
}

export default Mydata
