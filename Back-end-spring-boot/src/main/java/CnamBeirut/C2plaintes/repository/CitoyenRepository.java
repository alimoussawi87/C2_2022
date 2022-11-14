package CnamBeirut.C2plaintes.repository;

import CnamBeirut.C2plaintes.entity.Citoyen;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:8080"}, allowedHeaders = "*", allowCredentials = "false", exposedHeaders="*")
    @Repository
    public interface CitoyenRepository extends JpaRepository<Citoyen, Integer> {

        public boolean existsByTelephonec(String t);

        public List<Citoyen> findByTelephonec(String t);

        @Query("select max(c.id) from Citoyen c")
        public Integer findMaxId();
    }
