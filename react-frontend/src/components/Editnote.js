import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2';


const EditNote = (props) => {

    let navigate = useNavigate();

    const { id } = useParams();

    const [note, setNote] = useState({
        title : "",
        tag : "",
        description : ""
      });

      const { title, tag, description } = note;
    
      const onInputChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
      };
    
      
  useEffect(() => {
    loadNote();
  }, []);

  const loadNote = async () => {
    const result = await axios.get(`http://localhost:8080/note/${id}`);
    setNote(result.data);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/note/${id}`, note);
    navigate("/notes");
    
    Swal.fire(
      '',
      'Note Updated Successfully..',
      'success'
      );
  };

 

    
    return (
        <div className="container my-3">
          
            <div className='d-flex flex-row justify-content-center align-items-center  p-3 '>
                    <div className='col-6 '>
                        <img className="h-100" src={require("../Images/svg4.svg").default} />
                    </div>
                     
                    <div className='col-1 d-flex  h-75'></div>   
                    <div className='col-4 row d-flex justify-content-center align-items-center '>
                        <div className="container my-3 card border border-2 border-primary p-4">
                                    <h2 className='text-center card-heading'>Edit Note</h2>
                                
                                
                                    <form className="  justify-content-around" onSubmit={(e) => onSubmit(e)}>
                                       
                                       <div className="mt-2 mb-3  ">
                                           <label>Title</label>
                                           <input type="text" className="form-control"  id="title" name="title" aria-describedby="emailHelp" value={title}  onChange={(e) => onInputChange(e)} minLength={5} required /> 
                                       
                                       </div>
                                       <div className=" mb-3 ">
                                       <label>Tag</label>
                                           <input type="text" className="form-control"  id="tag" name="tag" value={tag}  onChange={(e) => onInputChange(e)} minLength={5} required />

                                       </div>
                                       
                                       <div className="mb-3">
                                       <label>Description</label>
                                           <textarea type="text" className="form-control" id="description"  name="description" value={description}  onChange={(e) => onInputChange(e)} minLength={5} required  rows="5"> </textarea>
                                       </div>
                                   
                                       <div className="mt-4 d-flex justify-content-center align-items-center">
                                            <button  type="submit" className="btn btn-primary w-75" >Save</button>
                                            <Link to="/notes"  type="submit" className="btn btn-outline-danger ms-2  w-25" >Cancel</Link>
                                        </div>
                                   </form>
                                    
                                    
                        </div>

                    </div>   
                    <div className='col-1 d-flex h-100'></div>   
            </div>
        </div>

        
    )
}

export default EditNote;