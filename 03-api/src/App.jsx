import React, { useEffect } from "react"
import { allCategories, allProducts } from "./redux/products/Action"

import { useDispatch, useSelector } from "react-redux"
import Product from "./component/product/Product"


function App() {

  const skip = useSelector((state)=> state.products.page.skip)
  const filterCategories = useSelector((state)=> state.products.filterCategories)

  const dispatch = useDispatch()



  useEffect(()=>{

    let cat = filterCategories ? `/category/${filterCategories}` : ''
   async function fetchApi(){
      let res = await fetch(`https://dummyjson.com/products/${cat}?limit=8&skip=${skip}`)
      let data = await res.json();
       dispatch(allProducts(data))
    }
    fetchApi()
  },[skip, filterCategories])
  
  useEffect(()=>{
    async function fetchCat(){
       let res = await fetch(`https://dummyjson.com/products/categories`)
       let data = await res.json();
        dispatch(allCategories(data))
     }
     fetchCat()

  },[])

  return (
    <>
     <Product/>
    </>
  )
}

export default App