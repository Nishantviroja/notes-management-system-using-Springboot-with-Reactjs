package com.notesmanagementsystem.springbootbackend.exception;
import jakarta.persistence.Id;


public class NoteNotFoundException extends RuntimeException {
    public NoteNotFoundException(Long Id){
        super("Could not found the note with id " + Id);
    }

}
