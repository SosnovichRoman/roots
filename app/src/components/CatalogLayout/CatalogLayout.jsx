import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

const CatalogLayout = ({ className, products, ...props }) => {

  // products?.map((product, index) => {
  //         const empty = (index + 1) % 8 == 4 || (index + 1) % 8 == 5;
  //         return [
  //         <ProductCard product={product}></ProductCard>,
  //         {''},
  //       ]
  // )

  return (
    <div className={`grid grid-cols-4 gap-x-[30px] gap-y-[60px] ${className}`} props>
      {products.map((product, index) => {
        index = index + 1;
        if (index % 8 == 4) return [
          <ProductCard tall="true" key={product.id} product={product} />,
          <div className='bg-main col-span-3 h-2 test'>
          </div>
        ]
        if (index % 8 == 5) return [
          <ProductCard tall="true" key={product.id} product={product} />,
        ]
        if (index % 8 == 0) return [
          <ProductCard key={product.id} product={product} />,
          <div className='bg-main col-span-3 h-2 test'>
          </div>
        ]
        return <ProductCard key={product.id} product={product} />
      }
        // <ProductCard key={product.id} product={product} />
      )}
    </div>
  )
}

export default CatalogLayout