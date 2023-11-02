import React from 'react'

const Square = (props) => {
  return (
    <div 
    onClick={props.onClick}
    style={{ border:"5px solid #d6a890", height:'100px' ,font:"bold"
    ,width:'100%',display:'flex'
    ,justifyContent:'center',
    alignItems:'center',
    backgroundColor: "#9e192d",fontSize:"80px",color:"aqua"
    

    }}  
        className='square'>
        <h5>{props.value}</h5>
    </div>
  )
}

export default Square