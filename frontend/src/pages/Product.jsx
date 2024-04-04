import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Breadcrum from '../Compnents/Breadcrums/Breadcrum';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../Compnents/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Compnents/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Compnents/RelatedProducts/RelatedProducts';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId))
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  )
}

export default Product
