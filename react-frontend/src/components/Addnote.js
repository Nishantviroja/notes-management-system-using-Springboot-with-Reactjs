import React from 'react'

const AddNote = (props) => {
    
    return (
        <div className="container my-3">
            <h2 className='text-center'>Add a Note</h2>
            <div className='row'>
            <div className='col-1'></div>
            
            <form className="my-3 col-10">
                <div className="row">
                <div className=" mb-3  col-8">
                    <input type="text" className="form-control" placeholder="Enter Title" id="title" name="title" aria-describedby="emailHelp"  minLength={5} required /> 
                
                </div>
                <div className=" mb-3  col-4">
                    <input type="text" className="form-control" placeholder="Enter Tag" id="tag" name="tag"  minLength={5} required />

                </div>
                </div>
                <div className="mb-3  col-12">
                    <textarea type="text" className="form-control" id="description" placeholder="Enter Description" name="description"  minLength={5} required  rows="3"> </textarea>
                </div>
               
               
                <button  type="submit" className="btn btn-primary" ><i class="fa-solid fa-plus me-2"></i>Add Note</button>
                {/* <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}><i class="fa-solid fa-plus me-2"></i>Add Note</button> */}
            </form>
            <div className='col-1'></div>
            </div>
        </div>

        
    )
}

export default AddNote