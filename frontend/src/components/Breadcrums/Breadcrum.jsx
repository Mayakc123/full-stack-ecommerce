import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrum = (props) => {
    const { product } = props;

    if (!product) {
        return null;
    }

    return (
        <div className='breadcrum'>
            HOME 
            <img className='breadimg' src={arrow_icon} alt="" /> 
            SHOP 
            <img className='breadimg' src={arrow_icon} alt="" /> 
            {product.category} 
            <img className='breadimg' src={arrow_icon} alt="" /> 
            {product.name}
        </div>
    )
}

export default Breadcrum