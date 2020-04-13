import React,{useState, useEffect} from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import { getCategories, removeCategory } from "./helper/adminapicall";

const ManageCategory = () => {
  const [categories, setCategories] = useState([]);
  const { user, token } = isAuthenticated();

  const preload = () => {
    getCategories().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setCategories(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const deleteCategory = (categoryId) => {
    removeCategory(categoryId, user._id, token)
    .then(data => {
      if(data.error) {
        console.log(data.error)
      } else {
        preload()
      }
    })
  }
  return (
    <Base title="Welcome admin" description="Manage category here">
      <Link className="btn btn-info" to={`/admin/dashboard`}>
        <span className="">Admin Home</span>
      </Link>
      <h3 className="mb-4 p-2">All categories:</h3>
      <div className="row">
        <div className="col-12">
          <h4 className="text-center text-white my-3">Total Category</h4>
            {categories.map((category, index) => {
                return (
                  <div key={index} className="row text-center mb-2 ">
                  <div className="col-4">
                    <h5 className='text-white text-left'>{category.name}</h5>
                  </div>
                  <div className="col-4">
                    <Link
                      className="btn btn-success"
                      to={`/admin/category/update/${category._id}`}
                    >
                      <span className="">Update</span>
                    </Link>
                  </div>
                  <div className="col-4">
                    <button onClick={() => {deleteCategory(category._id)}} className="btn btn-danger">
                      Delete
                    </button>
                  </div>
                </div>
                )
            })}
          
        </div>
      </div>
    </Base>
  );
};

export default ManageCategory;
