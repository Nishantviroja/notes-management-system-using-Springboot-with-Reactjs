package com.notesmanagementsystem.springbootbackend.repository;

        import com.notesmanagementsystem.springbootbackend.model.Note;
        import org.springframework.data.jpa.repository.JpaRepository;

public interface NoteRepository extends JpaRepository<Note,Long> {
}
