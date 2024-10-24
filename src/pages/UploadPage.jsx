import React, {useState} from 'react';
import axios from 'axios';
import '../css/upload.css';

function UploadPage() {
 const [title, setTitle] = useState('');
 const [description,setDescription] = useState('');
 const [image , setImage]  =useState(null);

 
   return (
    <div className = "upload-design-page">
      <h2>Upload New Design</h2>
      <form onSubmit ={handleSubmit} className = "upload-form">
      </form>
        <div className = "form-group">
          <label htmlFor = "title">Title</label>
          <input type = "text" id = "title" value ={title} onchange ={(e) => setTitle(e.target.value)}
          placeholder = "Enter design title"/>
        </div>
        <div className = "form-group">
          <label htmlFor = "description">description</label>
          <input type = "text" id = "description" value ={description} onchange ={(e) => setDescription(e.target.value)}
          placeholder = "Enter design decription"/>
        </div>
        <div className = "form-group">
          <label htmlFor = "image">Image</label>
          <input type = "file" id = "image" accept = "image/*" onchange ={(handleImageChange)}
        />
        </div>
        {preview && ( 
      <div className = "image-preview">
        <h3>Image Preview:</h3>
        <img src = {preview} alt = "Preview" style = {{width : '200px',height:'auto'}}/>
        </div>
    )}
    <button type = "submit" className ="btn submit-btn">Upload Design</button>
     </div>
   
  )
}

export default UploadPage