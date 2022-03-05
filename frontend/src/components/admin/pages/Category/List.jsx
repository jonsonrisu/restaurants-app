import React, { useState, useEffect } from 'react'
import adminLayout from '../../layout/Layout'
import CategorySevices from '../../../../services/CategoryServices'

const CategoryList = () => {
    const [category, setCategory] = useState([]);
    const imgUrl = "http://localhost:3000/";
    useEffect(() => {
        CategorySevices.getCategoryList().then(
            (response) => {
                const content = response;
                setCategory(content.data);
            },
            (error) => {
                const _content =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                setCategory(_content);
            }
        );
    }, []);
    //console.log(category);
    return (
        <>
            <div className="container-fluid pt-5 px-4">
                <div className="row g-4"></div>
                <div className="col-12">
                    <div className="bg-light rounded h-100 p-4">
                        <h6 className="mb-4">Category List</h6>
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Keywords</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {category.map((cate, key) =>
                                        <tr key={key}>
                                            <th scope="row">{key+1}</th>
                                            <td>{cate.name}</td>
                                            <td>{cate.keywords}</td>
                                            <td><img src={imgUrl + cate.image} alt={cate.name} srcset="" height={50} width={100} /></td>
                                            <td>{cate.status == 1 ? <div className="p-2 bg-success text-white" style={{textAlign:"center"}}>Active</div> : <div className="p-2 bg-danger text-white" style={{textAlign:"center"}}>Inactive</div>}</td>
                                            <td>
                                                <a href="" className='btn btn-primary sm mx-2'><i className='fa fa-edit'></i></a>
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

export default adminLayout(CategoryList)