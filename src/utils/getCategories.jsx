// utils/getCategories.js
export const getCategories = () => {
    const storedCategories = localStorage.getItem("category");
    return storedCategories ? JSON.parse(storedCategories) : [];
};
