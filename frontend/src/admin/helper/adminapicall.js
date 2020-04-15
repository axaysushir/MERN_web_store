import API from '../../backend'

//category
export const createCategory = (userId, token, category) => {
  return fetch(`${API}/category/create/${userId}`, {
    method: "POST", /// header info
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(category)
  })
  .then(response => {
      return response.json()
  })
  .catch(err => console.log(err))
};

// get all ctegory
export const getCategories = () => {
  return fetch(`${API}/categories`, {
    method: 'GET'
  })
  .then(response => {
    return response.json()
})
.catch(err => console.log(err))
}

//product call
export const createProduct = (userId, token, product) => {
  return fetch(`${API}/product/create/${userId}`, {
    method: 'POST',
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body: product
  })
  .then(response => {
    return response.json()
})
.catch(err => console.log(err))
}
// get all products
export const getProducts = () => {
  return fetch(`${API}/products`, {
    method: 'GET'
  })
  .then(response => {
    return response.json()
})
.catch(err => console.log(err))
}

//get product
export const getProduct = productId => {
  return fetch(`${API}/product/${productId}`, {
    method: 'GET'
  })
  .then(response => {
    return response.json()
})
.catch(err => console.log(err))
}

//update product
export const updateProduct = (productId, userId, token, product) => {
  return fetch(`${API}/product/${productId}/${userId}`, {
    method: 'PUT',
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body: product
  })
  .then(response => {
    return response.json()
})
.catch(err => console.log(err))

}

//delete product
export const deleteProduct = (productId, userId, token) => {
  return fetch(`${API}/product/${productId}/${userId}`, {
    method: 'DELETE',
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    }  
  })
  .then(response => {
    return response.json()
})
.catch(err => console.log(err))
}

export const removeCategory = (categoryId, userId, token) => {
  return fetch(`${API}/category/${categoryId}/${userId}`, {
    method: 'DELETE',
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    }
  })
  .then(response => {
    return response.json()
  })
  .catch(err => console.log(err))
}

export const updateCategory = (categoryId, userId, token, category) => {
  return fetch(`${API}/category/${categoryId}/${userId}`, {
    method: 'PUT',
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body: category
  })
  .then(response => {
    return response.json()
})
.catch(err => console.log(err))

}


export const createOrder = (userId, token, order) => {
  return fetch(`${API}/category/order/${userId}`, {
    method: "POST", /// header info
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(order)
  })
  .then(response => {
      return response.json()
  })
  .catch(err => console.log(err))
};

export const getAllOrder = (userId) => {
  return fetch(`${API}/order/all/${userId}`, {
    method: 'GET',
  })
    .then(response => {
      return response.json()
    })
    .catch(err => console.log(err))
}

export const getOrderStatus = (userId, token, order, status) => {
  return fetch(`${API}/order/status/${userId}`, {
    method: 'GET',
  })
    .then(response => response.json())
}