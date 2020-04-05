package net.guides.springboot2.springboot2jpacrud.controller;

import net.guides.springboot2.springboot2jpacrud.exception.ResourceNotFoundException;
import net.guides.springboot2.springboot2jpacrud.model.Pet;
import net.guides.springboot2.springboot2jpacrud.repository.PetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class PetController {

	@Autowired
	private PetRepository petRepository;

	@GetMapping("/pet")
	public List<Pet> getAllPets() {
		return petRepository.findAll();
	}

	@GetMapping("/pet/{id}")
	public ResponseEntity<Pet> getPetById(@PathVariable(value = "id") Long petId)
			throws ResourceNotFoundException {
		Pet pet = petRepository.findById(petId)
				.orElseThrow(() -> new ResourceNotFoundException("Pet not found for this id :: " + petId));
		return ResponseEntity.ok().body(pet);
	}

	@PostMapping("/pets")
	public Pet createPet(@Valid @RequestBody Pet pet) {
		return petRepository.save(pet);
	}

	@PutMapping("/pets/{id}")
	public ResponseEntity<Pet> updatePet(@PathVariable(value = "id") Long petId,
			@Valid @RequestBody Pet petDetails) throws ResourceNotFoundException {
		Pet pet = petRepository.findById(petId)
				.orElseThrow(() -> new ResourceNotFoundException("Pet not found for this id :: " + petId));

		pet.setPetName(petDetails.getPetName());
		pet.setOwnerName(petDetails.getOwnerName());
		pet.setSpecies(petDetails.getSpecies());
		pet.setDob(petDetails.getDob());
		final Pet updatedPet = petRepository.save(pet);
		return ResponseEntity.ok(updatedPet);
	}

	@DeleteMapping("/pets/{id}")
	public Map<String, Boolean> deletePet(@PathVariable(value = "id") Long petId)
			throws ResourceNotFoundException {
		Pet pet = petRepository.findById(petId)
				.orElseThrow(() -> new ResourceNotFoundException("Pet not found for this id :: " + petId));

		petRepository.delete(pet);
		Map<String, Boolean> response = new HashMap<>();
		response.put("Deleted!", Boolean.TRUE);
		return response;
	}
}
