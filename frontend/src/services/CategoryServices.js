import axios from "axios";

const API_URL = "http://localhost:3000/api/category/";

const getCategoryList = () =>{
   return axios.get(
        API_URL + 'list',
    )
}

const addCategory = () =>{
  return axios.post(
       API_URL + 'create',
   )
}

const CategoryServices = {
    getCategoryList,
    addCategory
 
  }
export default CategoryServices