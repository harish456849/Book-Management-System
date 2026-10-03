import { useState, useEffect } from "react";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import AddBooks from "./AddBooks";
import DeleteBook from "./DeleteBook";
import Login from "./Login";
import Register from "./Register";
import 'bootstrap/dist/css/bootstrap.min.css';


function Home({ users }) {
  return (
    <span>
      <div class="row row-cols-1 row-cols-sm-2 g-3">
  <div class="col">
    <div class="card">
      <img src="assets/images/bs-images/img-2x1.png" class="card-img-top" alt="card-grid-image">
      </img><div className="card-body">
        {users.map((user)=>(
      
          <React.Fragment key={user.id}>
            
        <h5 class="card-title">{user.title}</h5>
        <p class="card-text">This Book is Written by {user.author}.</p>
        
   
    </React.Fragment>
   
))}
</div></div>
    </div>
  </div>

    </span>
  );
}





function App() {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9090/books")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <Router>
      <nav style={{ display: "flex", gap: "20px", padding: "10px", background: "#eee" }}>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/addbooks">Add Books</Link>
        <Link to="/deletebook">Delete Book</Link>
       
        <Link to="/Login">Login</Link>
        <Link to="/">Register</Link>
      </nav>

      <Routes>
        <Route path="/home" element={<Home users={users} />} />
        <Route path="/about" element={<About />} />
        <Route path="/addbooks" element={<AddBooks />} />
        <Route path="/deletebook" element={<DeleteBook />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
