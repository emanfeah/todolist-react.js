import React from 'react';
import './Listitems.css'

 function Listitems(props) {
    const items=props.items;
    const listitems=items.map(item =>{ 
        return <div className='list' key={item.key}>
            <div style={{display:'flex'}}>
                     <span>
                     <input 
                      type='text'
                      key={item.key} 
                      value={item.text} 
                      style={{textDecoration:item.isComplete ?'line-through':''}}
                       onChange={(e)=>{props.ediItem(e.target.value,item.key)}}/>
                      </span> 
            <button 
            className='btn-delete'
             type='submit'
             onClick={()=> props.deleteOneItem(item.key)}>
                 Remove</button> 

                 <button 
            className='btn-delete'
             type='submit'
             onClick={()=> props.ItemComplete(item.key)}>
                 Complete</button> 
            </div>
              
               </div> 
        })
  return <div>
      {listitems}
  </div>;
}
export default Listitems;
