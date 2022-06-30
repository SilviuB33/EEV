// import { useState, useEffect } from 'react'
// import axios from "axios";
// import { Link } from "react-router-dom";
// import Table from 'react-bootstrap/Table';
// import Header from "components/headers/light.js";

// const ProductList = () => {
//     const [products, setProduct] = useState([]);
 
//     useEffect(() => {
//         getProducts();
//     }, []);
 
//     const getProducts = async () => {
//         const response = await axios.get('http://localhost:5000/products');
//         setProduct(response.data);
//     }
 
//     const deleteProduct = async (id) => {
//         await axios.delete(`http://localhost:5000/products/${id}`);
//         getProducts();
//     }
 
//     return (
//  <Table striped bordered hover>
//   <thead>
//   <tr>
//       <th>#</th>
//       <th>First Name</th>
//       <th>Last Name</th>
//       <th>Username</th>
//     </tr>
//   </thead>
//    <tbody>
//                     { products.map((product, index) => (
//                         <tr key={ product.id }>
//                             <td>{ index + 1 }</td>
//                             <td>{ product.title }</td>
//                             <td>{ product.price }</td>
//                             <td>
//                                 <Link to={`/edit/${product.id}`} className="button is-small is-info">Edit</Link>
//                                 <button onClick={ () => deleteProduct(product.id) } className="button is-small is-danger">Delete</button>
//                             </td>
//                         </tr>
//                     )) }
//                 </tbody>
// </Table>
//     );
// }
 
// export default ProductList