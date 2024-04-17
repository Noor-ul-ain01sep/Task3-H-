// import React from 'react'

import { useState } from "react";
import { getTheme } from "../utils/getTheme";

export const useTheme = () => {
   
   const [value,setValue]= useState(getTheme());
   const handleEvents =(e)=>
    {
        setValue(e.target.value)
        localStorage.setItem("theme",e.target.value); 
    }
   
   localStorage.getItem('theme')
  return {
    
  
  value,handleEvents
  }
}
export default useTheme