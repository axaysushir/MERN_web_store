import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";

import { getCategories, updateCategory } from "./helper/adminapicall";
import { isAuthenticated } from "../auth/helper/index";

const UpdateCategory = ({ match }) => {
  const { user, token } = isAuthenticated();

  const [values, setValues] = useState({
    name: "",
    categories: [],
    category: "",
    loading: false,
    error: "",
    formData: "",
    updatedCategory: ''
  });

  const { categories, category, error, loading, name, formData,updatedCategory } = values;

  const preload = (categoryId) => {
    getCategories(categoryId).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: data.name,
          category: data.category,
          formData: new FormData(),
        });
        console.log("CATEGORY:", categories);
        preloadCategories();
      }
    });
  };
  const preloadCategories = () => {
    getCategories().then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          categories: data,
          formData: new FormData(),
        });
      }
    });
  };

  useEffect(() => {
    preload(match.params.categoryId);
  }, []);

  const handleChange = (name) => (e) => {
    const value = e.target.value;
    formData.set(name, value)
    setValues({ ...values, [name]: value });
  };

  const onSubmit = event => {
    event.preventDefault()
    setValues({...values, error: '', loading: true})
    updateCategory(match.params.categoryId, user._id, token, formData)
    .then((data) => {
      if (data.error) {
        setValues({...values, error: data.error})
      } else {
        setValues({...values, name: '', category: '', 
        loading: false,
        updatedCategory: data.name
       })
      }
    })
    .catch(err => console.log(err))
  }
  const goBack = () => (
    <div className="mt-5">
      <Link className='btn btn-sm btn-success mb-3' to='/admin/categories'>
        Go Back
      </Link>
    </div>
  )

  const createCategoryForm = () => (
    <form>
      <div className="form-group">
        <span>Update category</span>
        <input
          onChange={handleChange("name")}
          value={name}
          type="text"
          className="from-control"
          placeholder="Category"
        />
      </div>
      <button type="submit" 
      onClick={onsubmit}
      className="btn btn-outline-primary mb-3 text-white">
        Update category
      </button>
    </form>
  );

  return (
    <Base
      title="Update category here"
      description="Welocome to category section"
      className="container p-4 bg-primary"
    >
      <Link to="/admin/dashboard" className="btn btn-md btn-dark mb-3">
        Admin home
      </Link>
      <div className="row bg-dark text-white rounded">
        <div className="col-md-8 offset-md-2">
          {createCategoryForm()}
          {goBack()}
        </div>
      </div>
    </Base>
  );
};

export default UpdateCategory;
