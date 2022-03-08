import React, {useState,useEffect} from 'react'
import adminLayout from '../../layout/Layout'
import Services  from '../../../../services/Services';
import validate from './addProductsRules';
import useForm from '../../../common/Validation';
import { NavLink } from 'react-router-dom';

const AddProduct = () => {

    const { values, file, errors, handleChange, handleUpload, handleSubmit } = useForm(productAdd, validate);
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");
    function productAdd(){

        Services.addProducts().then()
    }
  return (
    <>
          <div className="container-fluid pt-4 px-4">
                <div className="row g-4">
                    <div className="col-sm-12 col-xl-12">
                        <div className="bg-light rounded h-100 p-4">
                        <div>
                            <NavLink to="/admin/products" className="btn btn-primary btn-sm" style={{float: "right"}}>List</NavLink>
                            <h6 className="mb-4">Add Products</h6>
                           
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label forhtml="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name" name='name'
                                        aria-describedby="name" onChange={handleChange} value={values.name}/>
                                        {errors.name && (
                                            <p className="text-danger">{errors.name}</p>
                                        )}
                                </div>
                                <div className="mb-3">
                                    <label forhtml="description" className="form-label">Description</label>
                                    <textarea type="text" className="form-control" id="description" name='description'  onChange={handleChange} value={values.description}>

                                    </textarea>
                                    {errors.description && (
                                             <p className="text-danger">{errors.description}</p>
                                        )}
                                </div>
                                <div className="mb-3">
                                    <label forhtml="icon" className="form-label">Icon</label>
                                    <input type="text" className="form-control" id="icon"  name='icon' onChange={handleChange}/>
                                    {errors.icon && (
                                    <p className="text-danger">{errors.icon}</p>
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

export default adminLayout(AddProduct)