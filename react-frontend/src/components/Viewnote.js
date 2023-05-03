import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

const ViewNote = (props) => {

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

  

 

    
    return (
        <div className="container my-3">
          
            <div className='d-flex flex-row justify-content-center align-items-center  p-3 '>
                    <div className='col-6 '>
                        <img className="h-100" src={require("../Images/svg4.svg").default} />
                    </div>
                     
                    <div className='col-1 d-flex  h-75'></div>   
                    <div className='col-4 row d-flex justify-content-center align-items-center '>
                        <div className="container my-3 card border border-2 border-primary p-4">
                                    
                                
                                
                                    <form className="  justify-content-around" >
                                       
                                        <div className="mt-2 mb-3  ">
                                            <label>Title</label>
                                            <input type="text" disabled className="form-control"  id="title" name="title" aria-describedby="emailHelp" value={title}  onChange={(e) => onInputChange(e)} minLength={5} required /> 
                                        
                                        </div>
                                        <div className=" mb-3 ">
                                        <label>Tag</label>
                                            <input type="text" className="form-control" disabled id="tag" name="tag" value={tag}  onChange={(e) => onInputChange(e)} minLength={5} required />

                                        </div>
                                        
                                        <div className="mb-3">
                                        <label>Description</label>
                                            <textarea type="text" className="form-control" disabled id="description"  name="description" value={description}  onChange={(e) => onInputChange(e)} minLength={5} required  rows="5"> </textarea>
                                        </div>
                                    
                                        <div className="mt-4 d-flex justify-content-center align-items-center">
                                            <Link to="/notes"  type="submit" className="btn btn-outline-danger  w-100" >Back</Link>
                                        </div>
                                    </form>
                                    
                                    
                        </div>

                    </div>   
                    <div className='col-1 d-flex h-100'></div>   
            </div>
        </div>

        
    )
}

export default ViewNote