import React from 'react'
import Menu from './Menu'
import { Link } from 'react-router-dom'


const Base = ({
    title="My Title",
    description='My description',
    className=' text-white p-4',
    children
}) => {
    return (
        <div>
            <Menu />
            <div className="container-fluid">
                <div className="jumbotron  text-white text-center">
                    <h3 className="display-6">{title}</h3>
                    <p className="lead">{description}</p>
                </div>
                <div className={className}>{children}</div>
            </div>
            <footer className="footer mt-auto py-3">
                <div className="container-fluid bg-info text-white text-center py-3">
                    <p className='lead'>Buy amazing Tshirts from Quirlo</p>
                    <Link to='/contact'>
                    <button className='btn btn-warning rounded'>Contact</button>
                    </Link>
                    <p className='mt-3'>Follow Us On:</p>
                    <ul className='list-group footer-ul'>
                        <li><span className='fas fa-facebook'></span>Facebook</li>
                        <li>Instagram</li>
                        <li>Youtube</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>
                <div className="container">
                    <span className='text-muted'>
                        Amazing place to buy <span className='text-white'>Coding</span> Tshirt
                    </span>
                </div>
            </footer>
        </div>
    )
}

export default Base