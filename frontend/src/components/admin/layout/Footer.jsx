import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="container-fluid pt-4 px-4 ">
                <div className="bg-light rounded-top p-4">
                    <div className="row">
                        <div className="col-12 col-sm-6 text-center text-sm-start">
                            &copy; <a href="#">Restoran</a>, All Right Reserved.
                        </div>
                        <div className="col-12 col-sm-6 text-center text-sm-end">

                            Designed By <a href="#">Chetu</a>
                        </div>
                    </div>
                </div>
            </div>

            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
        </>

    )
}

export default Footer