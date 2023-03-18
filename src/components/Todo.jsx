import React, { useState } from "react";

function Todo(props) {
    const [input, setInput] = useState(props.desc);
    const [isEditing, setIsEditing] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        props.editTodo(props.id, input);
        setIsEditing(false);
    };

    const handleChange = (event) => {
        setInput(event.target.value);
    };

    const defaultTemplate = (
        <form onSubmit={handleSubmit}>
            <input
                type="checkbox"
                id={props.id}
                defaultChecked={props.completed}
                onChange={() => props.toggleCompleted(props.id)}
            />
            <label htmlFor={props.id}>{props.desc}</label>
            <div className="btn-group">
                <button type="button" onClick={() => setIsEditing(true)}>
                    Edit
                </button>
                <button type="button" onClick={() => props.deleteTodo(props.id)}>
                    Delete
                </button>
            </div>
        </form>
    );

    const editTemplate = (
        <form onSubmit={handleSubmit}>
            <label htmlFor={props.id}>New name for todo:</label>
            <input type="text" id={props.id} onChange={handleChange} value={input} />
            <div className="btn-group">
                <button type="button" onClick={() => setIsEditing(false)}>
                    Cancel
                </button>
                <button type="submit">Save</button>
            </div>
        </form>
    );

    return <div><li>{isEditing ? editTemplate : defaultTemplate}</li></div>;
}

export default Todo;









// import React, { useState } from "react";

// function Todo(props) {
//     const [input, setInput] = useState("");
//     const [isEditing, setIsEditing] = useState(false);

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         props.editTodo(props.id, input);
//         // setIsEditing(false);
//         setInput("");
//     };

//     const handleChange = (event) => {
//         setInput(event.target.value);
//     };

//     const defaultTemplate = (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="checkbox"
//                 id={props.id}
//                 defaultChecked={props.completed}
//                 onChange={() => props.toggleCompleted(props.id)}
//             />
//             {props.desc}
//             <div className="btn-group">
//                 <button type="button" onClick={() => setIsEditing(true)}>
//                     Edit
//                 </button>
//                 <button type="button" onClick={() => props.deleteTodo(props.id)}>
//                     Delete
//                 </button>
//             </div>
//         </form>
//     );

//     const editTemplate = (
//         <form onSubmit={handleSubmit}>
//             <label > New name for todo: {props.desc}</label>
//             <input type="text" id={props.id} onChange={handleChange} value={input}/>
//             {props.desc}
//             <div className="btn-group">
//                 <button type="button" onClick={() => setIsEditing(false)}>
//                     Cancel
//                 </button>
//                 <button type="submit">Save</button>
//             </div>
//         </form>
//     );

//     return <div><li>{isEditing ? editTemplate : defaultTemplate}</li>;
//     </div>
// }

// export default Todo; 