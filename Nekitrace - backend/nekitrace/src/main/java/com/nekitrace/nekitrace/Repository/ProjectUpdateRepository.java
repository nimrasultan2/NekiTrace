package com.nekitrace.nekitrace.Repository;

import com.nekitrace.nekitrace.Model.ProjectUpdate;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ProjectUpdateRepository extends JpaRepository<ProjectUpdate, Integer> {
    List<ProjectUpdate> findByProject_ProjectId(Integer projectId);
}