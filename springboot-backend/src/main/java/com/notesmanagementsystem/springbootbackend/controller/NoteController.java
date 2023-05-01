package com.notesmanagementsystem.springbootbackend.controller;

import com.notesmanagementsystem.springbootbackend.exception.NoteNotFoundException;
import com.notesmanagementsystem.springbootbackend.model.Note;
import com.notesmanagementsystem.springbootbackend.repository.NoteRepository;
import org.aspectj.weaver.ast.Not;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
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

    @GetMapping("/user/{id}")
    Note getNoteById(@PathVariable Long id) {
        return noteRepository.findById(id)
                .orElseThrow(() -> new NoteNotFoundException(id));
    }

    @PutMapping("/user/{id}")
    Note updateNote(@RequestBody Note newNote, @PathVariable Long id) {
        return noteRepository.findById(id)
                .map(note -> {
                    note.setTitle(newNote.getTitle());
                    note.setTag(newNote.getTag());
                    note.setDescription(newNote.getDescription());
                    return noteRepository.save(note);
                }).orElseThrow(() -> new NoteNotFoundException(id));
    }

    @DeleteMapping("/user/{id}")
    String deleteNote(@PathVariable Long id){
        if(!noteRepository.existsById(id)){
            throw new NoteNotFoundException(id);
        }
        noteRepository.deleteById(id);
        return  "Note with id "+id+" has been deleted success.";
    }}
