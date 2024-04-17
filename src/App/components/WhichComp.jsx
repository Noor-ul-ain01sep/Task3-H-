// import React from "react";
import PropTypes from "prop-types";

const WhichComp = ({ whichcomponents, setwhichcomponents }) => {
  return (
    <div className="p-2 rounded d-flex align-items-center gap-4 mt-5" style={{ maxWidth: "200px" }}>
      <span className={`${whichcomponents === 'category' && "bg-primary"} px-2 py-2 rounded-3`} onClick={() => setwhichcomponents('category')}>Categories</span>
      <span className={`${whichcomponents === 'Lists' && "bg-primary"} px-2 py-2 rounded-3`} onClick={() => setwhichcomponents('Lists')}>Lists</span>
    </div>
  );
};

WhichComp.propTypes = {
  whichcomponents: PropTypes.string.isRequired,
  setwhichcomponents: PropTypes.func.isRequired,
};

export default WhichComp;