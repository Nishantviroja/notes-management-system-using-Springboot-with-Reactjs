package com.notesmanagementsystem.springbootbackend.repository;

import com.notesmanagementsystem.springbootbackend.model.Note;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoteRepositiry extends JpaRepository<Note,Long> {
}
