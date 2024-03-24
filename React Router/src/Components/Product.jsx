import {NavLink,Outlet } from "react-router-dom";
const Product = () => {
  return (
    <>
      <div>These are the Products:</div>
      <NavLink className="links" to="/products/1">Product1</NavLink>
      <NavLink className="links" to="/products/2">Product2</NavLink>
      <NavLink className="links" to="/products/3">Product3</NavLink>
      <Outlet />
    </>


  )
}
export default Product;