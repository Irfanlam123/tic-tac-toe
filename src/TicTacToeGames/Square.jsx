import React from 'react'

const Square = (props) => {
  return (
    <div 
    onClick={props.onClick}
    style={{ border:"5px solid black", height:'100px' ,font:"bold"
    ,width:'100%',display:'flex'
    ,justifyContent:'center',
    alignItems:'center',
    backgroundColor: "blue",fontSize:"80px",color:"red"
    

    }}  
        className='square'>
        <h5>{props.value}</h5>
    </div>
  )
}

export default Square