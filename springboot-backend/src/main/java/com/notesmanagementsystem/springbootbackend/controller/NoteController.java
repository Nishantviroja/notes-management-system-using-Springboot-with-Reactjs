package com.notesmanagementsystem.springbootbackend.controller;

import com.notesmanagementsystem.springbootbackend.model.Note;
import com.notesmanagementsystem.springbootbackend.repository.NoteRepository;
import org.aspectj.weaver.ast.Not;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class NoteController {

    @Autowired
    private NoteRepository noteRepository;

    @PostMapping("/note")
    Note newNote(@RequestBody Note newNote){
        return noteRepository.save(newNote);
    }

    @GetMapping("/notes")
    List<Note> getAllNotes() {
        return noteRepository.findAll();
    }
}
