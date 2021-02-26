import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { useState } from 'react';

const  AddToCartModal = dynamic(()=> import('../../../components/AddToCartModal'),{
  loading: ()=> <p>Loading...</p>
})

export default function Product(){
  const  [isAddToCartModalVisible, setAddToCartModalVisible] =  useState(false)

  const  router = useRouter();
  
  const  handleAddToCart = () =>{
    setAddToCartModalVisible(true)
  }

  return (
    <div>
      <h1>{router.query.slug}</h1>
      <button onClick={handleAddToCart}> Add to cart</button>
      { isAddToCartModalVisible && <AddToCartModal/>}
    </div>
  )
}