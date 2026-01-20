import React, { useState, useEffect } from "react";
import axios from "axios";

/* DISPLAY INVENTORY */
function Display_Inventory() {
  const [res, setRes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000")
      .then(response => {
        setRes(response.data);
      });
  }, []);

  return (
    <div>
      <h1>Inventory Management</h1>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {res.map((inventory) => (
            <tr key={inventory.id}>
              <td>{inventory.id}</td>
              <td>{inventory.prodname}</td>
              <td>{inventory.qty}</td>
              <td>{inventory.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ADD INVENTORY */
function AddInventory() {
  const [id, setId] = useState("");
  const [prodname, setProdname] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");

  const SubmitEvent = () => {
    const fo = {
      id: id,
      prodname: prodname,
      qty: qty,
      price: price
    };

    axios.post("http://localhost:8000/add", fo)
      .then(() => {
        alert("Product added successfully");
      });
  };

  return (
    <div>
      <h1>Add Inventory</h1>

      <table>
        <tbody>
          <tr>
            <td>ID</td>
            <td><input type="number" value={id} onChange={e => setId(e.target.value)} /></td>
          </tr>
          <tr>
            <td>Product Name</td>
            <td><input type="text" value={prodname} onChange={e => setProdname(e.target.value)} /></td>
          </tr>
          <tr>
            <td>Quantity</td>
            <td><input type="number" value={qty} onChange={e => setQty(e.target.value)} /></td>
          </tr>
          <tr>
            <td>Price</td>
            <td><input type="number" value={price} onChange={e => setPrice(e.target.value)} /></td>
          </tr>
          <tr>
            <td colSpan="2">
              <button onClick={SubmitEvent}>Add</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export { Display_Inventory, AddInventory };
