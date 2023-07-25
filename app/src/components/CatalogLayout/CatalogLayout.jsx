import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

const CatalogLayout = ({ className, products, ...props }) => {

  return (
    <div className={`relative grid grid-cols-1 min-[480px]:grid-cols-2 gap-y-[30px] min-[480px]:gap-y-[60px] md:grid-cols-3 lg:grid-cols-4 gap-x-[30px]   ${className}`} props>
      {products.map((product, index) => {
        
        return <ProductCard key={product.id} product={product} />
      }
      )}
    </div>
  )
}

export default CatalogLayout