// import React from 'react'
// import { IoMdSunny,IoMoon } from "react-icons/io5";

export const header = ({value, handleEvents}) => {
    return (

        <div className="d-flex justify-content-between align-items-center align-items-center py-2 border-bottom">
            <h5>Noor-ul-ain</h5>
            {/* <IoMdSunny/>*/}
            <div className={value === "dark"?'dark':''}> 
                <select value={value} onChange={handleEvents} className="form-select form-select-sm">
                    <option value="light">light☀️</option>  {/* Google->Emoji->copy8*/}
                    <option value="dark">dark🌙</option>
                </select>

            </div>
        </div>
    )
}
export default header

