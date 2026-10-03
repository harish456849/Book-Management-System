import { useState } from "react";
import axiom from "axios";
import { Form, Button, Container} from "react-bootstrap";
export default function Register() {
    const [formData, setFormData] = useState({
        User_Name: "",
        pswd: "",
        email: ""
    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:9090/register/save`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
           
            if (response.ok) {
                // Handle successful registration
                alert("Registration successful!");
                setFormData({
                    User_Name: "",
                    pswd: "",
                    email: ""
                });
                window.location.href = "http://localhost:3000/Login";
            }
        } catch (error) {
            // Handle registration error
            alert("Registration failed. Please try again.");
        }
    };

    return (
        <div>
            
            <br></br>
            <br></br>
            <form onSubmit={handleSubmit}>
                <table align="center">
                    <thead>
                        <tr>
                            <th colspan="3"><h1>Register</h1></th>
                        </tr>
                    </thead>
                    <tbody>
                   <tr> <label for="formControlInput" class="form-label">Username:</label><input 
                    type="text" 
                    name="User_Name" 
                    value={formData.User_Name}
                    onChange={handleChange}
                    required 
                    class="form-control" id="formControlInput" placeholder="Username"
                /></tr>
                  <tr><label for="formControlInput" class="form-label">Password:</label> <input 
                    type="password" 
                    name="pswd" 
                    value={formData.pswd}
                    onChange={handleChange}
                    class="form-control" id="formControlInput" placeholder="Password"
                    required 
                /></tr>
                  <tr> <label for="formControlInput" class="form-label">Email:</label>
                   <input 
                    type="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                   class="form-control" id="formControlInput" placeholder="name@example.com"
                    required 
                /></tr>
                  </tbody>
                  <tfooter>
                  <Button type="submit" variant="success">
                    Register
                </Button>
                  </tfooter>
                  
                
                             
</table>
            </form>
        </div>
    );
}