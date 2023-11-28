import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <section class="vh-100 gradient-custom">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div class="card bg-dark text-white">
                    <div class="card-body p-5 text-center">

                        <div class="mb-md-5 mt-md-4 pb-5">

                        <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                        <p class="text-white-50 mb-5">Please enter your login and password!</p>

                        <div class="form-outline form-white mb-4">
                            <label class="form-label" className="w-100 text-start mb-2" for="typeEmailX">Email</label>
                            <input type="email" id="typeEmailX" class="form-control form-control-lg" />
                        </div>

                        <div class="form-outline form-white mb-4">
                            <label class="form-label" className='w-100 text-start mb-2' for="typePasswordX">Password</label>
                            <input type="password" id="typePasswordX" class="form-control form-control-lg" />
                        </div>

                        <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>

                        <Link to={"/list"} class="btn btn-outline-light btn-lg px-5" type="submit">Login</Link>

                        <div class="d-flex justify-content-center text-center mt-4 pt-1 gap-4">
                            <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
                            <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>
                        </div>

                        </div>

                        <div>
                        <p class="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a>
                        </p>
                        </div>

                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Login