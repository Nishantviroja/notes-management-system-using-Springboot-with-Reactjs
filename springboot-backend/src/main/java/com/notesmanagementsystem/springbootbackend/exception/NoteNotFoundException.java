package com.notesmanagementsystem.springbootbackend.exception;

import jakarta.persistence.Id;

public class NoteNotFoundException {
    public NoteNotFoundException(Long Id){
        super("NoteNotFoundException error not solve" + Id);
    }

}
