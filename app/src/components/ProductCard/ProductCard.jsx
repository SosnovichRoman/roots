import React from 'react'

const ProductCard = ({className, tall, product, ...props}) => {
  return (
    <div className={`${className} ${tall ? 'row-span-2' : ''}`}>
      <img src={product.img} className={`rounded-[5px] w-full object-cover  ${tall ? 'h-[400px]' : 'h-[350px]'}`} />
      <div className='mt-[10px] flex justify-between'>
        <p>{product.title}</p>
        <p>{product.price}р</p>
      </div>
    </div>
  )
}

export default ProductCard