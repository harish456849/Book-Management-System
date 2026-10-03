import { useState } from "react";

export default function AddBooks() {
    //creating state variables to hold the form data
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const handleSubmit = async(e) => {
        e.preventDefault();
        const bookData = { id: Number(id), title, author };

        try {
            const responce = await fetch("http://localhost:9090/books/save", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(bookData)
            });
            if (!responce.ok) {
                throw new Error("Failed to add book");
            }
            else {
                alert("Book added successfully");
                const result = await responce.json();
                console.log(result);
                setId("");
                setTitle("");
                setAuthor("");

            }

        } catch (error) {
            console.error("Error adding book:", error);
        }
    };

        return (
            <div>
                <h2>Add Book</h2>
                <form onSubmit={handleSubmit}>
                    <label>Book ID:</label>
                    <input type="number" value={id} onChange={(e) => setId(e.target.value)} required /><br />
                    <label>Title:</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required /><br />
                    <label>Author:</label>
                    <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required /><br />
                    <button type="submit">Save</button>
                </form>
            </div>
        );
    }