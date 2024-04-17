// import React from 'react'
import { MdOutlinePlaylistAdd } from "react-icons/md";
import Headings from "./Headings";
import PropTypes from "prop-types";

export const Lists = ({Lists,addLists,NewListsInput}) => {

   
  return (
    <div className="mt-5">
       <Headings title={'Lists'} icon={<MdOutlinePlaylistAdd size={40}/>}/>
   
   
   {/* Input & search box */}

<div className="d-flex gap-3 mt-4">
   <input className={`form-control form-control-sm`}  style={{maxWidth:"500px"}}type="text" placeholder="Enter your Categories here" onChange={NewListsInput} />
   <button className="btn btn-primary" onClick={addLists}>Add Lists</button>
</div>







   <div className="d-flex gap-3 flex-wrap alig-items-center mt-4">
    {
    Lists.map((x,index) => <div key={index} className="border px-2 rounded-3" > {x}</div>)
    }
    </div>
    </div>
  )
}

Lists.propTypes = {
  Lists: PropTypes.string.isRequired,
  addLists: PropTypes.func.isRequired,
  NewListsInput: PropTypes.func.isRequired,

};
export default Lists

