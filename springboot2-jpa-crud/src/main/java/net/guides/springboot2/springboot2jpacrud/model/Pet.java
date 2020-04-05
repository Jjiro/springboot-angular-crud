package net.guides.springboot2.springboot2jpacrud.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalDate;
import java.util.Objects;

@Entity
@Table(name = "pet")
public class Pet {

	private long id;
	private String petName;
	private String ownerName;
	private String species;
	private LocalDate dob;

	public Pet() {

	}

	public Pet(String petName, String ownerName, String species, LocalDate dob) {
		this.petName = petName;
		this.ownerName = ownerName;
		this.species = species;
		this.dob = dob;
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	
	@Column(name = "petName", nullable = false)
	public String getPetName() {
		return petName;
	}
	public void setPetName(String petName) {
		this.petName = petName;
	}
	
	@Column(name = "ownerName", nullable = false)
	public String getOwnerName() {
		return ownerName;
	}
	public void setOwnerName(String ownerName) {
		this.ownerName = ownerName;
	}
	
	@Column(name = "species", nullable = false)
	public String getSpecies() {
		return species;
	}
	public void setSpecies(String species) {
		this.species = species;
	}

	@Column(name = "dob", nullable = false)
	public LocalDate getDob() {
		return dob;
	}
	public void setDob(LocalDate dob) {
		this.dob = dob;
	}

	@Override
	public String toString() {
		return "Pet{" +
				"id=" + id +
				", petName='" + petName + '\'' +
				", ownerName='" + ownerName + '\'' +
				", species='" + species + '\'' +
				", dob='" + dob + '\'' +
				'}';
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (!(o instanceof Pet)) return false;
		Pet pet = (Pet) o;
		return getId() == pet.getId() &&
				getPetName().equals(pet.getPetName()) &&
				getOwnerName().equals(pet.getOwnerName()) &&
				getSpecies().equals(pet.getSpecies()) &&
				getDob().equals(pet.getDob());
	}

	@Override
	public int hashCode() {
		return Objects.hash(getId(), getPetName(), getOwnerName(), getSpecies(), getDob());
	}
}
