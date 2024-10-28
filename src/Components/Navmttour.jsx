// TourForm.js
import React, { useState } from "react";
import axios from "axios";

const Navmttour = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("image", image);

    try {
      const response = await axios.post("/api/tours", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Tour created:", response.data);
    } catch (error) {
      console.error("Error uploading tour:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div>
        <label>Image:</label>
        <input type="file" onChange={handleImageChange} />
      </div>
      <button type="submit">Create Tour</button>
    </form>
  );
};

export default Navmttour;
