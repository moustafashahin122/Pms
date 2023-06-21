
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const TestAxios = () => {
    const [pe, setpe] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("http://127.0.0.1:8000/workspaces/", {
                headers: { "Authorization": "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg3MzEwNTYxLCJpYXQiOjE2ODcyNzQ1NjEsImp0aSI6ImU4YjA0MGNiZTQ5NTQ3NTE5ZWUxZThmOWVjN2FkODJhIiwidXNlcl9pZCI6NH0.OKSOg3fjuuX_8XCCxlZbYDQhbEe012-4yYEuvvQvda4" },

            }
            );
            console.log("🚀 ~ file: TestAxios.jsx:13 ~ fetchData ~ res:", res);

            setpe(await JSON.stringify(res.data));
        };
        fetchData();





}, []);



return (


    <p>
        {pe}
    </p>

);
};

export default TestAxios;
