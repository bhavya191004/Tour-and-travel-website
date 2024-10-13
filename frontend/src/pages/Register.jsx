import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import axios from 'axios';

const Register = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = e => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async e => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/register', credentials);
            alert("Registration successful");
        } catch (error) {
            console.error('There was an error registering!', error);
            alert('Registration failed!');
        }
    };

    return (
        <Container>
            <Row>
                <Col lg='8' className="m-auto">
                    <h2>Signup</h2>
                    <Form onSubmit={handleClick}>
                        <FormGroup>
                            <input type="text" placeholder="Username" required id="username" onChange={handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <input type="email" placeholder="Email" required id="email" onChange={handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <input type="password" placeholder="Password" required id="password" onChange={handleChange} />
                        </FormGroup>
                        <Button type="submit">Signup</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;

// import React, { useState } from "react";
// import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// import userIcon from '../assets/images/user.png';

// const Register = () => {
//     const [credentials, setCredentials] = useState({
//         username: '',
//         email: '',
//         password: ''
//     });

//     const handleChange = e => {
//         setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
//     };

//     const handleClick = async e => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:5000/api/register', credentials);
//             console.log(response.data);
//             alert("Successful");

//         } catch (error) {
//             console.error('There was an error registering!', error);
//             // Handle registration error
//         }
//     };

//     return (
//         <section>
//             <Container>
//                 <Row>
//                     <Col lg='8' className="m-auto">
//                         <div className="logo_container d-flex justify-content-between">
//                             <div className="signup__img">
//                                 {/* <img src={signupImg} alt="Signup" /> */}
//                             </div>
//                             <div className="signup__form">
//                                 <div className="user">
//                                     <img src={userIcon} alt='User' />
//                                 </div>
//                                 <h2>Signup</h2>
//                                 <Form onSubmit={handleClick}>
//                                     <FormGroup>
//                                         <input type="text" placeholder="Username" required id="username" onChange={handleChange} />
//                                     </FormGroup>
//                                     <FormGroup>
//                                         <input type="email" placeholder="Email" required id="email" onChange={handleChange} />
//                                     </FormGroup>
//                                     <FormGroup>
//                                         <input type="password" placeholder="Password" required id="password" onChange={handleChange} />
//                                     </FormGroup>
//                                     <button type="Submit">Signup</button>
//                                    </Form>
//                                 <p>Already have an Account? <Link to="/login">Login</Link></p>
//                             </div>
//                         </div>
//                     </Col>
//                 </Row>
//             </Container>
//         </section>
//     );
// };

// export default Register;
