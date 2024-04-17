import { FaListUl } from "react-icons/fa";
import Headings from "./Headings";
import PropTypes from "prop-types";

const Categories = ({ category, addcategeories, NewCategoriesInput }) => {
    return (
        <div className="mt-5">
            <Headings title={'Categories'} icon={<FaListUl size={40} />} />
            <div className="d-flex gap-3 mt-4">
                <input
                    className={`form-control form-control-sm`}
                    style={{ maxWidth: "500px" }}
                    type="text"
                    placeholder="Enter your Categories here"
                    onChange={NewCategoriesInput}
                />
                <button className="btn btn-primary" onClick={addcategeories}>Add Categories</button>
            </div>
            <div className="d-flex gap-3 flex-wrap alig-items-center mt-4">
                {category.map((x, index) => <div key={index} className="border px-2 rounded-3">{x}</div>)}
            </div>
        </div>
    );
};

Categories.propTypes = {
    category: PropTypes.array.isRequired,
    addcategeories: PropTypes.func.isRequired,
    NewCategoriesInput: PropTypes.func.isRequired,
};

export default Categories;
