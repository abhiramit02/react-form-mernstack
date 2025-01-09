import React, { useState } from "react";

function Form2() {
    const [data, setdata] = useState({
        name: "",
        rollno: "",
        gender: "",
        city: "",
        phone: ""
    });

    function formSubmit(e) {
        e.preventDefault()

        console.log("....sucess", data);
    }

    return (
        <>
            <form onSubmit={formSubmit}>
                <div>
                Name:
                <input
                    type="text"
                    onChange={(e) => setdata({ ...data, name: e.target.value })}
                />
                </div>
                <div>
                Rollno:
                <input
                    type="text"
                    onChange={(e) => setdata({ ...data, rollno: e.target.value })}
                />
                </div>
                <div>
                City:
                <input
                    type="text"
                    onChange={(e) => setdata({ ...data, city: e.target.value })}
                />
                </div>
                <div>
                Gender:
                <input
                    type="text"
                    onChange={(e) => setdata({ ...data, gender: e.target.value })}
                />
                </div>
                <div>
                Phone:
                <input
                    type="text"
                    onChange={(e) => setdata({ ...data, phone: e.target.value })}
                />
                </div>
                <div>
                <button type="submit">Signup</button>
                </div>
            </form>
            <h1>The name is: {data.name}</h1>
            <h1>The rollno is: {data.rollno}</h1>
            <h1>The city is: {data.city}</h1>
            <h1>The gender is: {data.gender}</h1>
            <h1>The phone is: {data.phone}</h1>
        </>
    );
}

export default Form2;