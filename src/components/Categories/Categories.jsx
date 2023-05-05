import React from 'react'
import "./Categories.scss"
import {Link} from "react-router-dom"

const Categories = () => {
  return (
    <div className='categories'>
    <div className="col">
        <div className="row">
            <img src="https://images.pexels.com/photos/6501725/pexels-photo-6501725.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <button>
                <Link className='link' to='/products/1'>Sale</Link>
            </button>
        </div>
        <div className="row">
        <img src="https://images.pexels.com/photos/6501725/pexels-photo-6501725.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <button>
                <Link className='link' to='/products/1'>Sale</Link>
            </button>
        </div>
    </div>
    <div className="col">
        <div className="row">
        <img src="https://images.pexels.com/photos/6501725/pexels-photo-6501725.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <button>
                <Link className='link' to='/products/1'>Sale</Link>
            </button>
        </div>
    </div>
    <div className="col col-lg">
        <div className="row">
            <div className="col">
                <div className="row">
                <img src="https://images.pexels.com/photos/6501725/pexels-photo-6501725.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <button>
                <Link className='link' to='/products/1'>Sale</Link>
            </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                <img src="https://images.pexels.com/photos/6501725/pexels-photo-6501725.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <button>
                <Link className='link' to='/products/1'>Sale</Link>
            </button>
                </div>
            </div>
        </div>
        <div className="row">
        <img src="https://images.pexels.com/photos/14853565/pexels-photo-14853565.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <button>
                <Link className='link' to='/products/1'>Sale</Link>
            </button>
        </div>
    </div>
    </div>
  )
}

export default Categories
