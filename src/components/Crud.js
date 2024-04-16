import React, { useState } from "react";
import Navbar from './Navbar';

function Crud() {
    var [ items, setItems ] = useState ([
        { id : 1, name : "John" },
        { id : 2, name : "David" },
        { id : 3, name : "William" }
]);

const [itemName, setItemName ] = useState(" ");

const [editingItemId, setEditingItemId] = useState(null);
const [editedItemName, setEditedItemName] = useState("");
const [searchTerm, setSearchTerm] = useState("");

const handleInputChange = (event ) => {
    setItemName(event.target.value);
};

const handleSubmit = ( event ) => {
    event.preventDefault();
    var x = items.length+1;
    var newItem = {
        id : x,
        name : itemName
        };
    setItems([...items, newItem]);
    setItemName(" ");
    };

const handleDelete = (id) => {
    const filteredItems = items.filter( (item) => item.id !== id);
    setItems(filteredItems);
};

const handleEditItem = (item) => {
    setEditingItemId(item.id);
    setEditedItemName(item.name);
  };

  const handleSaveItem = () => {
    if (editedItemName.trim() !== "") {
      const updatedItems = items.map((item) => {
        if (item.id === editingItemId) {
          return { ...item, name: editedItemName };
        }
        return item;
      });
      setItems(updatedItems);
      setEditingItemId(null);
    }
  };

  const handleCancelEdit = () => {
    setEditingItemId(null);
    setEditedItemName("");
  };


  const handleDeleteItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };


  const handleSearch = (event) => {
    event.preventDefault();
    const filteredItems = items.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setItems(filteredItems);
};

const handleResetSearch = () => {
    setSearchTerm("");
};

return (
    <div>
    <div> <Navbar/> </div><br/>
    <div className = "container ">
      <div className = "row" >
          <div className= "col-md-8">
        <h2>CRUD</h2>
        <form onSubmit={handleSubmit} >
            <label> Enter Name </label>
            <input type="text" value={itemName} onChange={handleInputChange}/>
            <button className="btn btn-small btn-success" type="submit"> Add </button>
        </form>
        </div>
        </div>
        </div><br/>
<div className="container">
<table className="table table-bordered table-dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  {editingItemId === item.id ? (
                    <input
                      type="text"
                      value={editedItemName}
                      onChange={(e) => setEditedItemName(e.target.value)}
                    />
                  ) : (
                    item.name
                  )}
                </td>
                <td>
                  {editingItemId === item.id ? (
                    <>
                      <button
                        className="btn btn-primary"
                        onClick={handleSaveItem}
                      >
                        Save
                      </button>
                      <button
                        className="btn btn-secondary"
                        onClick={handleCancelEdit}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleEditItem(item)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDeleteItem(item.id)}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
</div>
<div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <form onSubmit={handleSearch}>
                            <label>Search Name: </label>
                            <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />&nbsp;
                            <button className="btn btn-small btn-success" type="submit">Search</button>&nbsp;
                            <button className="btn btn-small btn-secondary" type="button" onClick={handleResetSearch}>
                            Reset
                        </button>
                        </form>
                    </div>
                </div>
            </div>
</div>
);
}

export default Crud;