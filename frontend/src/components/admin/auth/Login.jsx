import React from "react";
import ValidatedLoginForm from "./ValidatedLoginForm";
const Login = () => {
  return (
    <div className="container-fluid">
    <div className="row h-100 align-items-center justify-content-center" style={{minHeight: "100vh"}}>
        <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
            <div className="bg-light rounded p-4 p-sm-5 my-4 mx-3">
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <a href="/" className="">
                        <h3 className="text-primary"><i className="fa fa-hashtag me-2"></i>Restoran</h3>
                    </a>
                    <h3>Login In</h3>
                </div>
                <ValidatedLoginForm />
            </div>
        
        </div>
    </div>
</div>
  )
}

export default Login;
