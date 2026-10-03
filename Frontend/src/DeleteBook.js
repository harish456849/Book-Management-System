import { useState } from "react";

export default function DeleteBook() {
    const [id, setId] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:9090/books/delete/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
                
            });
            if (!response.ok) {
                throw new Error("Failed to delete book");
            }
            else {
                alert("Book deleted successfully");
                setId("");
            }
        } catch (error) {
            console.error("Error deleting book:", error);
        }
    };
  return (
    <div>
      <h2>Delete Book</h2>
      <form onSubmit={handleSubmit}>
        <label>Enter Book ID to Delete:</label>
        <input
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <br />
        <button type="submit">Delete</button>
      </form>
    </div>
  );
}
