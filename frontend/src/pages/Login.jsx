import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import axios from 'axios';

const Login = () => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    const handleChange = e => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async e => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', credentials);
            alert("Login successful");
        } catch (error) {
            console.error('There was an error logging in!', error);
            alert('Login failed!');
        }
    };

    return (
        <Container>
            <Row>
                <Col lg='8' className="m-auto">
                    <h2>Login</h2>
                    <Form onSubmit={handleClick}>
                        <FormGroup>
                            <input type="email" placeholder="Email" required id="email" onChange={handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <input type="password" placeholder="Password" required id="password" onChange={handleChange} />
                        </FormGroup>
                        <Button type="submit">Login</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;


// // import React, { useState } from "react";
// // import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
// // import { Link } from 'react-router-dom';
// // import '../styles/login.css';
// // import loginImg from '../assets/images/login.png';
// // import userIcon from '../assets/images/user.png';

// // const Login = () => {
// //     const [credentials, setCredentials] = useState({
// //         email: undefined,
// //         password: undefined        
// //     });

// //     const handleChange = e => {
// //         setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
// //     };

// //     const handleClick = e => {
// //         e.preventDefault();
// //         // Add your login logic here
// //     };

// //     return (
// //         <section>
// //             <Container>
// //                 <Row>
// //                     <Col lg='8' className="m-auto">
// //                         <div className="logo_container d-flex justify-content-between">
// //                             <div className="login__img">
// //                                 <img src={loginImg} alt="Login" />
// //                             </div>
// //                             <div className="login__form">
// //                                 <div className="user">
// //                                     <img src={userIcon} alt='User' />
// //                                 </div>
// //                                 <h2>Login</h2>
// //                                 <Form onSubmit={handleClick}>
// //                                     <FormGroup>
// //                                         <input type="text" placeholder="Email" required id="email" onChange={handleChange} />
// //                                     </FormGroup>
// //                                     <FormGroup>
// //                                         <input type="password" placeholder="Password" required id="password" onChange={handleChange} />
// //                                     </FormGroup>
// //                                     <Button className="btn secondary__btn auth__btn" type="submit" style={{color:"white"}}>Login</Button>
// //                                 </Form>
// //                                 <p>Don't have an Account? <Link to="/register">Register</Link></p>
// //                             </div>
// //                         </div>
// //                     </Col>
// //                 </Row>
// //             </Container>
// //         </section>
// //     );
// // };

// // export default Login;

// import React, { useState } from "react";
// import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
// import { Link, useNavigate } from 'react-router-dom';
// import '../styles/login.css';
// import loginImg from '../assets/images/login.png';
// import userIcon from '../assets/images/user.png';

// const Login = () => {
//     const [credentials, setCredentials] = useState({
//         email: '',
//         password: ''
//     });

//     const navigate = useNavigate();

//     const handleChange = e => {
//         setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
//     };

//     const handleClick = async e => {
//         e.preventDefault();
//         try {
//             const response = await fetch('http://localhost:5000/login', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(credentials)
//             });
//             const data = await response.json();
//             if (response.ok) {
//                 alert('Login successful');
//                 // Redirect to a different page after successful login
//                 navigate('/dashboard');
//             } else {
//                 alert(data.error);
//             }
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };

//     return (
//         <section>
//             <Container>
//                 <Row>
//                     <Col lg='8' className="m-auto">
//                         <div className="logo_container d-flex justify-content-between">
//                             <div className="login__img">
//                                 <img src={loginImg} alt="Login" />
//                             </div>
//                             <div className="login__form">
//                                 <div className="user">
//                                     <img src={userIcon} alt='User' />
//                                 </div>
//                                 <h2>Login</h2>
//                                 <Form onSubmit={handleClick}>
//                                     <FormGroup>
//                                         <input type="email" placeholder="Email" required id="email" onChange={handleChange} />
//                                     </FormGroup>
//                                     <FormGroup>
//                                         <input type="password" placeholder="Password" required id="password" onChange={handleChange} />
//                                     </FormGroup>
//                                     <button type="submit">login</button>
//                                    </Form>
//                                 <p>Don't have an Account? <Link to="/register">Register</Link></p>
//                             </div>
//                         </div>
//                     </Col>
//                 </Row>
//             </Container>
//         </section>
//     );
// };

// export default Login;
