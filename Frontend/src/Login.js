import { useState } from "react";
import { Form, Button, Container} from "react-bootstrap";

export default function Login() {
   const [formData, setFormData] = useState({
        User_Name: "",
        pswd: ""
    });
    const handleChange =  (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
    try {
        const response = await fetch(`http://localhost:9090/register/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });
        if (response.ok) {
            // Handle successful login
            alert("Login successful!");
            setFormData({
                User_Name: "",
                pswd: ""
            });
            window.location.href = "http://localhost:3000/home";
        }
    } catch (error) {
        // Handle login error
        alert("Login failed. Please try again.");
    }
}

   return (
        <div>
            <br />
            <br />
            <form onSubmit={handleSubmit}>
                <table align="center">
                    <thead>
                        <tr>
                            <th colSpan="3"><h1>Login</h1></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="username" className="form-label">Username:</label>
                                <input
                                    type="text"
                                    name="User_Name"
                                    value={formData.User_Name}
                                    onChange={handleChange}
                                    required
                                    className="form-control"
                                    id="username"
                                    placeholder="Enter Username"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="password" className="form-label">Password:</label>
                                <input
                                    type="password"
                                    name="pswd"
                                    value={formData.pswd}
                                    onChange={handleChange}
                                    required
                                    className="form-control"
                                    id="password"
                                    placeholder="Enter Password"
                                />
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>
                                <Button type="submit" variant="primary">
                                    Login
                                </Button>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </form>
        </div>
    );
}
