// utils/getlists.js
export const getLists= () => {
    const storedLists= localStorage.getItem("Lists");
    return storedLists? JSON.parse(storedLists) : [];
};
