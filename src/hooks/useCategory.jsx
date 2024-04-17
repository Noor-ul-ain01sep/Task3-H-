import { useState, useEffect } from "react";
import { getCategories } from "../utils/getCategories";

const useCategory = () => {
    const [category, setCategories] = useState(() => {
        const storedCategories = getCategories();
        return storedCategories.length > 0 ? storedCategories : ['ReactJs', 'Nodejs', 'JavaScript', 'MongoDB'];
    });

    const [newCategory, setNewCategory] = useState('');

    const addcategeories = () => {
        setCategories([...category, newCategory.trim()]);
        setNewCategory('');
    };

    const NewCategoriesInput = (e) => {
        setNewCategory(e.target.value);
    };

    useEffect(() => {
        localStorage.setItem("category", JSON.stringify(category));
    }, [category]);

    return {
        category,
        addcategeories,
        NewCategoriesInput,
        newCategory,
    };
};

export default useCategory;
