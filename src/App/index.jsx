// import React from 'react'
 import { useState } from "react"
import Header from "./components/header";
import '../assets/app.css';
import useTheme from "../hooks/useTheme";
import  Categories  from "./components/categories";
import  List  from "./components/Lists";
import WhichComp from "./components/WhichComp";
import useCategory from "../hooks/useCategory"
import useLists from "../hooks/useLists"

export const App = () => {

    
  
    const { value, handleEvents} = useTheme();  
    const [whichcomponents,setwhichcomponents]=useState('category');
  
    const {category,addcategeories,NewCategoriesInput,newCategoory} = useCategory(); 
    const {Lists,addLists,NewListsInput,newLists} = useLists(); 

    console.log(value);
    return (
        <div className={`bg-${value} text-${value === "light" ? "dark" : "white"}`} style={{minHeight:"100vh"}}>  {/*Add Red color to text*/}
            <div className="container">
               
                <Header value={value} handleEvents={handleEvents} />
                <WhichComp
                whichcomponents={whichcomponents}
                setwhichcomponents={setwhichcomponents}
                />
              
                {
                   
                   whichcomponents==='category'?<Categories category={category} 
                   addcategeories={ addcategeories}
                   NewCategoriesInput={NewCategoriesInput}
                   newCategoory={newCategoory}
                   />:
                   <List Lists={Lists}
                   addLists={addLists}
                   NewListsInput={NewListsInput} 
                   newLists={newLists}
                   />
               }
                
                
            
            </div>
        </div>
    );
}
export default App


