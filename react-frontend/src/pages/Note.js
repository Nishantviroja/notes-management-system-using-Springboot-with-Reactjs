import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link } from "react-router-dom";
// import { Notes } from "../components/Notes"


export const Note = (props) => {

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    const result = await axios.get("http://localhost:8080/notes");
    setNotes(result.data);
  };

  return (
    <>
      <div className="container mt-5" data-aos="fade-up">
        <div className="row">
          <div className="col">
            
              <div>

            
             

                <h2 className="text-primary">Your Notes..</h2>
             
                <div className="row my-3">
                <div className="col-md-4 d-flex justify-content-around ">
                  <div className="card my-3 border border-2 border-primary p-5 w-100">
                  <p className="d-flex justify-content-around m-1 card-text">Add New Note</p>
                  <div className='d-flex justify-content-around '>
                    
                      <Link to="/addnotes" type="submit" className="btn btn-primary btn-rounded px-3">
                
                      <i className="fa-solid fa-plus"></i>
                      </Link>
                      </div>
                       
                  </div>
                </div>
                  {notes.map((note, index) => (
                  <div className="col-md-4">
                    <div className="card my-3 border border-2 border-primary">
                      <div className="card-body ">
                        <h5 className="card-text text-start">
                          <span class=" me-2 fw-bold align-middle">{note.title}</span>-
                          <span class="badge badge-secondary fst-italic ms-2">
                          {note.tag}
                          </span>
                        </h5>
                        <p className="card-text">{note.description}</p>
                      </div>
                      <div class="card-footer d-flex justify-content-around ">
                        <button type="submit" className="btn btn-outline-primary col-6">
                          {" "}
                          Edit
                        </button>
                        <button type="submit" className="btn btn-primary col-2  ">
                          {" "}
                          <i className="fa-solid fa-eye"></i>
                        </button>
                        <button type="submit" className="btn btn-danger col-2 ">
                          {" "}
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
 ))}
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};
