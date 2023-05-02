import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const AddNote = (props) => {

    let navigate = useNavigate();

    const [note, setNote] = useState({
        title : "",
        tag : "",
        description : ""
      });

      const { title, tag, description } = note;
    
      const onInputChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
      };
    
      const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/note", note);
        navigate("/notes");
      };
    
    return (
        <div className="container my-3">
            <h2 className='text-center'>Add a Note</h2>
            <div className='row'>
            <div className='col-2'></div>
            
            <form className="my-3 col-8" onSubmit={(e) => onSubmit(e)}>
                <div className="row">
                <div className=" mb-3  col-8">
                    <input type="text" className="form-control" placeholder="Enter Title" id="title" name="title" aria-describedby="emailHelp" value={title}  onChange={(e) => onInputChange(e)} minLength={5} required /> 
                
                </div>
                <div className=" mb-3  col-4">
                    <input type="text" className="form-control" placeholder="Enter Tag" id="tag" name="tag" value={tag}  onChange={(e) => onInputChange(e)} minLength={5} required />

                </div>
                </div>
                <div className="mb-3  col-12">
                    <textarea type="text" className="form-control" id="description" placeholder="Enter Description" name="description" value={description}  onChange={(e) => onInputChange(e)} minLength={5} required  rows="3"> </textarea>
                </div>
               
               
                <button  type="submit" className="btn btn-primary" ><i class="fa-solid fa-plus me-2"></i>Add Note</button>
                {/* <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}><i class="fa-solid fa-plus me-2"></i>Add Note</button> */}
            </form>
            <div className='col-2'></div>
            </div>
        </div>

        
    )
}

export default AddNote