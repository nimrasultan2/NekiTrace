package com.nekitrace.nekitrace.Service;

import com.nekitrace.nekitrace.Dto.ProjectCreateDTO;
import com.nekitrace.nekitrace.Dto.ProjectResponseDTO;

import java.util.List;

public interface ProjectService {
    List<ProjectResponseDTO> getAllProjects();
    ProjectResponseDTO getProjectById(Integer id);
    ProjectResponseDTO createProject(ProjectCreateDTO request);
    ProjectResponseDTO updateProject(Integer id, ProjectCreateDTO request);
    void deleteProject(Integer id);
}