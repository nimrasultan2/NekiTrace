package com.nekitrace.nekitrace.Repository;

import com.nekitrace.nekitrace.Model.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Project, Integer> {
}