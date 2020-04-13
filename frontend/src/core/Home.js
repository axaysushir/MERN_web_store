import React, {useState, useEffect} from 'react'
import '../styles.css'

import API from '../backend'
import Base from './Base'
import Card from './Card'
import {getProducts} from './helper/coreapicalls'

export default function Home() {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(false)

    const loadAllProducts = () => {
        getProducts().then(data => {
            if(data.error) {
                setError(data.error)
            } else {
                setProducts(data)
            }
        })
    }

    useEffect(() => {
        loadAllProducts()
    }, [])

    // console.log('API IS', API)
    return (
        <Base title='Quirlo Tshirts👕' description='Welcome to the Coding T-Shirt Store'>
            <div className="row text-center">
                <h3 className="text-white">All of Tshirts</h3>
                <div className="row">
                    {products.map((product, index) => {
                        return (
                            <div key={index} className="col-4 mb-4">
                                <Card product={product} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </Base>
    )
}

