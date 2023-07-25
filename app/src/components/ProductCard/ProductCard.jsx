import React from 'react'
import './productCard.scss'

const ProductCard = ({ className, tall, product, ...props }) => {
  return (
    <div className={`product-card relative`}>
      <div className='product-card__line'></div>
      <img src={product.img} className='product-card__img rounded-[5px] w-full object-cover' />
      <div className='mt-[10px] flex justify-between'>
        <p>{product.title}</p>
        <p>{product.price}р</p>
      </div>
    </div>
  )
}

export default ProductCard