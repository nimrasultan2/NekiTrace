package com.nekitrace.nekitrace.Controller;
import com.nekitrace.nekitrace.Dto.ProjectCreateDTO;
import com.nekitrace.nekitrace.Dto.ProjectResponseDTO;
import com.nekitrace.nekitrace.Service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
@CrossOrigin(origins = "http://localhost:5173")
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @GetMapping
    public List<ProjectResponseDTO> getAllProjects()
    {
        return projectService.getAllProjects();
    }

    @GetMapping("/{id}")
    public ProjectResponseDTO getProjectById(@PathVariable Integer id)
    {
        return projectService.getProjectById(id);
    }

    @PostMapping
    public ProjectResponseDTO createProject(@RequestBody ProjectCreateDTO request)
    {
        return projectService.createProject(request);
    }

    @PutMapping("/{id}")
    public ProjectResponseDTO updateProject(@PathVariable Integer id, @RequestBody ProjectCreateDTO request)
    {
        return projectService.updateProject(id, request);
    }

    @DeleteMapping("/{id}")
    public void deleteProject(@PathVariable Integer id)
    {
        projectService.deleteProject(id);
    }
}