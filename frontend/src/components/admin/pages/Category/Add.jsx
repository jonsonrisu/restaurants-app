import React, { useState, useEffect } from 'react';
import adminLayout from '../../layout/Layout'
import CategoryServices from '../../../../services/CategoryServices';
import useForm from './addCategoryValidation';
import validate from './addCategoryRules';

const CategoryAdd = () => {

    const { values, file, errors,imgErrors, handleChange, handleUpload, handleSubmit } = useForm(addCategory, validate);
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");
    function addCategory() {
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("keywords", values.keywords);
        formData.append("status", values.status);
        formData.append("image", file);
        CategoryServices.addCategory(formData).then(
            (response) => {
                setMessage(response.data.message);
                setSuccessful(true);
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setMessage(resMessage);
                setSuccessful(false);
            }
        );
    }

    return (
        <>
            <div className="container-fluid pt-4 px-4">
                <div className="row g-4">
                    <div className="col-sm-12 col-xl-6">
                        <div className="bg-light rounded h-100 p-4">
                            <h6 className="mb-4">Add Category</h6>
                            {message && (
                                <div
                                    className={
                                        successful ? "alert alert-success" : "alert alert-danger"
                                    }
                                    role="alert"
                                >
                                    {message}
                                </div>
                            )}
                            <form id='addCategory' onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label forhtml="category" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="category" name='name'
                                        aria-describedby="category" onChange={handleChange} value={values.name} />
                                        {errors.name && (
                                            <p className="text-danger">{errors.name}</p>
                                        )}
                                </div>
                                <div className="mb-3">
                                    <label forhtml="Keywords" className="form-label">Keywords</label>
                                    <input type="text" className="form-control" id="Keywords" name='keywords' onChange={handleChange}
                                     value={values.keywords}/>
                                      {errors.keywords && (
                                            <p className="text-danger">{errors.keywords}</p>
                                        )}
                                </div>
                                <div className="mb-3">
                                    <label forhtml="image" className="form-label">Icon</label>
                                    <input type="file" className="form-control" id="image" name='image' onChange={handleUpload}/>
                                    {errors.image && (
                                            <p className="text-danger">{errors.image}</p>
                                        )}
                                </div>
                                <div className="mb-3">
                                    <label forhtml="status" className="form-label">Status</label>
                                    <select name="status" id="status" className="form-control" onChange={handleChange} value={values.status || ''} >
                                        <option value="">Select Status</option>
                                        <option value={true}>Active</option>
                                        <option value={false}>Inactive</option>
                                    </select>
                                    {errors.status && (
                                            <p className="text-danger">{errors.status}</p>
                                        )}
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default adminLayout(CategoryAdd)