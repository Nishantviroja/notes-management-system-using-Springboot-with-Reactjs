import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const CRUDnote = (props) => {


      const [title, setTitle] = useState("")
      const [tag, setTag] = useState("")
      const [description, setDescription] = useState("")
    
      const onSubmit = async (e) => {
        e.preventDefault();
        const note = {
            title,
            tag,
            description,
        }
        await axios.post("http://localhost:8080/note", note);
        props.setNotes([...props.notes, note]);
        setTitle("")
        setDescription("")
        setTag("")
       // props.history.push("/");
      };
    
    return (
        <div className="container my-3 ">
            <h2 className='text-center'>Add a Note</h2>
            <div className='row'>
            <div className='col-6'>
            <div className="col-8">
            <img src={require("../Images/svg2.svg").default} />
          </div>
            </div>
            <div className='col-1'></div>
            <form className="my-3 col-4 border border-2 border-primary p-5 rounded card " onSubmit={(e) => onSubmit(e)}>
                <div className="row">
                <div className=" mb-3  col-8">
                    <input type="text" className="form-control" placeholder="Enter Title" id="title" name="title" aria-describedby="emailHelp" value={title}  onChange={(e) => setTitle(e.target.value)} minLength={5} required /> 
                
                </div>
                <div className=" mb-3  col-4">
                    <input type="text" className="form-control" placeholder="Enter Tag" id="tag" name="tag" value={tag}  onChange={(e) => setTag(e.target.value)} minLength={5} required />

                </div>
                </div>
                <div className="mb-3  col-12">
                    <textarea type="text" className="form-control" id="description" placeholder="Enter Description" name="description" value={description}  onChange={(e) => setDescription(e.target.value)} minLength={5} required  rows="3"> </textarea>
                </div>
               
               
                <button  type="submit" className="btn btn-primary w-5" ><i class="fa-solid fa-plus me-2"></i>Add Note</button>
                {/* <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}><i class="fa-solid fa-plus me-2"></i>Add Note</button> */}
            </form>
            <div className='col-1'></div>
            </div>
        </div>

        
    )
}

export default CRUDnote