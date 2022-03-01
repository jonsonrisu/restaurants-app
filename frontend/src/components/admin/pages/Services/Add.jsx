import React from 'react'
import adminLayout from '../../layout/Layout'
const AddServices = () => {
  return (
    <>
          <div className="container-fluid pt-4 px-4">
                <div className="row g-4">
                    <div className="col-sm-12 col-xl-6">
                        <div className="bg-light rounded h-100 p-4">
                            <h6 className="mb-4">Add Category</h6>
                            <form>
                                <div className="mb-3">
                                    <label forhtml="category" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="category" name='category'
                                        aria-describedby="category" />
                                </div>
                                <div className="mb-3">
                                    <label forhtml="Keywords" className="form-label">Keywords</label>
                                    <input type="text" className="form-control" id="Keywords" name='keywords'/>
                                </div>
                                <div className="mb-3">
                                    <label forhtml="image" className="form-label">Icon</label>
                                    <input type="file" className="form-control" id="image"  name='image'/>
                                </div>
                                <div className="mb-3">
                                    <label forhtml="status" className="form-label">Status</label>
                                    <select name="status" id="status" className="form-control">
                                        <option value="">Select Status</option>
                                        <option value="Y">Active</option>
                                        <option value="N">Inactive</option>
                                    </select>
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

export default adminLayout(AddServices)