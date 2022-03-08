import React,{useState,useEffect} from 'react'
import adminLayout from '../../layout/Layout'
import { NavLink } from 'react-router-dom'
import Services from '../../../../services/Services';
import Helper from '../../../../helper/helper';

const ServicesList = () => {

    const [service, setServices] = useState([]);

    useEffect(() => {
        Services.getServicesList().then(
            (response) => {
            const content = response;
            console.log(content);
            setServices(content.data);
        },
        (error) => {
            const _content =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
                setServices(_content);
        }
    )
    }, []);
    return (
        <>
            <div className="container-fluid pt-5 px-4">
                <div className="row g-4"></div>
                <div className="col-12">
                    <div className="bg-light rounded h-100 p-4">
                    <div>
                            <NavLink to="/admin/services/create" className="btn btn-primary btn-sm" style={{float: "right"}}>Add</NavLink>
                        <h6 className="mb-4">Services List</h6>
                        </div>
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Icon</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {service.map((value, key) =>
                                    <tr>
                                        <th scope="row" key={key+1}>{key+1}</th>
                                        <td>{value.name}</td>
                                        <td>{Helper.toShort(value.description)}</td>
                                        <td><i class="fa-2x fa fa-user-tie text-primary mb-4"></i></td>
                                        <td>
                                        <NavLink to={value.id} className='btn btn-primary sm mx-2'><i className='fa fa-edit'></i></NavLink>
                                                <button className='btn btn-danger sm'><i className='fa fa-trash'></i></button>
                                        </td>
                                    </tr>
                                   )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default adminLayout(ServicesList)