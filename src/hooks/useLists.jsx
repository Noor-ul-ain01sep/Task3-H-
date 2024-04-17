import { useState, useEffect } from "react";
import { getLists } from "../utils/getLists";

const useLists = () => {
    const [Lists, setLists] = useState(() => {
        const storedLists = getLists();
        return storedLists.length > 0 ? storedLists : ['HTML', 'CSS', 'JavaScript', 'MySQL'];
    });

    const [newLists, setNewLists] = useState('');

    const addLists = () => {
        setLists([...Lists, newLists.trim()]);
        setNewLists('');
    };

    const NewListsInput = (e) => {
        setNewLists(e.target.value);
    };

    useEffect(() => {
        localStorage.setItem("Lists", JSON.stringify(Lists));
    }, [Lists]);

    return {
        Lists,
        addLists,
        NewListsInput,
        newLists,
    };
};

export default useLists;
