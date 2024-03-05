import React, { useState } from "react";
import './App.css';

//ANCHOR - Setting form data here along with the handle change and handle submit functions
const Review = () => {
  const [formData, setFormData] = useState({
    name: "",
    review: "",
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

   const handleSubmit = (e) => {
    e.preventDefault();
    const { review, value } = e.target;
    setFormData({ ...formData, [review]: value });
    console.log(e)
    
    };

    //ANCHOR - Submit form data here

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="review"
        placeholder="Comments"
        value={formData.review}
        onChange={handleChange}
      />

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Review</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{formData.name}</td>
            <td>{formData.review}</td>
          </tr>
        </tbody>
      </table>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Review;