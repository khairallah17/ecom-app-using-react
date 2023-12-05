import React, { useState, useEffect } from 'react'
import { addUser } from '../services/login.services'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

    const [fName, setFName] = useState("")
    const [lName, setLName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPAssword] = useState("")

    const navigate = useNavigate()

    const submitForm = async (e) => {

        e.preventDefault()
        const response = await addUser({fName, lName, email, password})
        if (!response.error)
            navigate("/products")
    }
    
    return (
        <section class="vh-100 gradient-custom">
            <div class="mask d-flex align-items-center h-100 gradient-custom-3">
                <div class="container h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100 bg-subtle">
                        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                        <div class="card bg-dark text-white">
                            <div class="card-body p-5">
                            <h2 class="text-uppercase text-center mb-5">Create an account</h2>

                            <form onSubmit={submitForm} >

                                <div class="form-outline mb-4">
                                <label class="form-label" for="form3Example1cg">First Name</label>
                                <input type="text" id="form3Example1cg" value={fName} onChange={(e) => setFName(e.target.value)} class="form-control form-control-lg" />
                                </div>

                                <div class="form-outline mb-4">
                                <label class="form-label" for="form3Example1cg">Last Name</label>
                                <input type="text" id="form3Example1cg" value={lName} onChange={(e) => setLName(e.target.value)} class="form-control form-control-lg" />
                                </div>

                                <div class="form-outline mb-4">
                                <label class="form-label" for="form3Example3cg">Your Email</label>
                                <input type="email" id="form3Example3cg" value={email} onChange={(e) => setEmail(e.target.value)} class="form-control form-control-lg" />
                                </div>

                                <div class="form-outline mb-4">
                                <label class="form-label" for="form3Example4cg">Password</label>
                                <input type="password" id="form3Example4cg" value={password} onChange={(e) => setPAssword(e.target.value)} class="form-control form-control-lg" />
                                </div>

                                <div class="form-outline mb-4">
                                <label class="form-label" for="form3Example4cdg">Repeat your password</label>
                                <input type="password" id="form3Example4cdg" class="form-control form-control-lg" />
                                </div>

                                <div class="d-flex justify-content-center">
                                <button type="submit"
                                    class="btn btn-outline-warning btn-block btn-lg gradient-custom-4">Register</button>
                                </div>

                                <p class="text-center mt-5 mb-0 text-white">Have already an account? <a href="/"
                                    class="fw-bold"><u>Login here</u></a></p>

                            </form>

                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signup