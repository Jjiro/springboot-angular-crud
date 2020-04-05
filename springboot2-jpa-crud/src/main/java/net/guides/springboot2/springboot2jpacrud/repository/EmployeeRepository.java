package net.guides.springboot2.springboot2jpacrud.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.guides.springboot2.springboot2jpacrud.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{


}
