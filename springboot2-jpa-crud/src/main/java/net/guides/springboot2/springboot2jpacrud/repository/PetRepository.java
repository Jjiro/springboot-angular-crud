package net.guides.springboot2.springboot2jpacrud.repository;

import net.guides.springboot2.springboot2jpacrud.model.Pet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PetRepository extends JpaRepository<Pet, Long>{


}
