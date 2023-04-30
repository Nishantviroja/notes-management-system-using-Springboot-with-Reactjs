import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Notes } from "../components/Notes"
import AddNote from "../components/Addnote";

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
            <h2 className="text-primary">Your Notes..</h2>
              <div>
                <AddNote />
                <button
                  type="button"
                  className="btn btn-primary d-none"
                  data-bs-toggle="modal"
                  data-bs-target="#editModal"
                >
                  Update Your Note
                </button>
                <div
                  className="modal fade"
                  id="editModal"
                  tabIndex="-1"
                  aria-labelledby="editModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="editModalLabel">
                          Edit Note
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <form className="my-3">
                          <div className="mb-3">
                            <label htmlFor="etitle" className="form-label">
                              Title
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="etitle"
                              name="etitle"
                              minLength={5}
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="edescription" className="form-label">
                              Description
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="edescription"
                              name="edescription"
                              minLength={5}
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="etag" className="form-label">
                              Tag
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="etag"
                              name="etag"
                              minLength={5}
                              required
                            />
                          </div>
                        </form>
                      </div>
                      {/* <div className="modal-footer">
                              <button ref={refClose} type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                              <button disabled={note.etitle.length<5 || note.edescription.length<5} onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
                          </div> */}
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-danger"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Update Note
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-center">Your Notes</h2>
                {/* {notes.length===0 ? 'No notes to display' :  */}
                {/* <div className="row my-3">
                  {notes.map((note) => {
                      return <NoteItem key={note._id} updateNote={updateNote} note={note} />
                  })}
              </div> */}
                <div className="row my-3">
                  {notes.map((note, index) => (
                  <div className="col-md-4">
                    <div className="card my-3 border border-2 border-secondary">
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
                        <button type="submit" className="btn btn-primary col-5  ">
                          {" "}
                          <i className="fa-solid fa-pen-to-square mx-2"></i>Edit
                        </button>
                        <button type="submit" className="btn btn-danger col-5 ">
                          {" "}
                          <i className="fa-solid fa-trash mx-2"></i>Delete
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
