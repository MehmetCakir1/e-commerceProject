import { useState } from "react";
import { TiTick } from "react-icons/ti";


const ColorBtn = ({item,index}) => {
    const [tickColor,setTickColor]=useState(false)

    // console.log(item);
    // console.log(index)

    const handleClick=(e,index)=>{
        index===e.target.index ? (
            setTickColor(true)
        ):
            setTickColor(false)
        
    }

  return (
    <button style={{backgroundColor:item}} className="rounded-circle border-0 mx-1" onClick={(e)=>handleClick(e)}>
    <TiTick  style={!tickColor && {color:item}} className={`fs-5 ${tickColor && "active" }`} />
  </button>
  )
}

export default ColorBtn

