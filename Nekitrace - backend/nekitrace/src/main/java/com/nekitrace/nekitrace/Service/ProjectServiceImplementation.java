package com.nekitrace.nekitrace.Service;

import com.nekitrace.nekitrace.Dto.ProjectCreateDTO;
import com.nekitrace.nekitrace.Dto.ProjectResponseDTO;
import com.nekitrace.nekitrace.Dto.CompaignUpdateDTO;
import com.nekitrace.nekitrace.Model.Admin;
import com.nekitrace.nekitrace.Model.Beneficiary;
import com.nekitrace.nekitrace.Model.Project;
import com.nekitrace.nekitrace.Model.ProjectUpdate;
import com.nekitrace.nekitrace.Repository.AdminRepository;
import com.nekitrace.nekitrace.Repository.BeneficiaryRepository;
import com.nekitrace.nekitrace.Repository.ProjectRepository;
import com.nekitrace.nekitrace.Repository.ProjectUpdateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProjectServiceImplementation implements ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private ProjectUpdateRepository projectUpdateRepository;

    @Autowired
    private BeneficiaryRepository beneficiaryRepository;

    @Autowired
    private AdminRepository adminRepository;

        @Override
        public List<ProjectResponseDTO> getAllProjects() {
            List<Project> projects = projectRepository.findAll();
            List<ProjectResponseDTO> projectDTOs = new ArrayList<>();

            for (Project project : projects)
            {
                projectDTOs.add(ProjectResponseDTO.fromEntity(project));
            }

            return projectDTOs;
        }

        @Override
        public ProjectResponseDTO getProjectById(Integer id) {
            Project project = projectRepository.findById(id)
                    .orElseThrow(() -> new RuntimeException("Project not found"));

            List<ProjectUpdate> updates = projectUpdateRepository.findByProject_ProjectId(id);
            List<CompaignUpdateDTO> updateDTOs = new ArrayList<>();

            for (ProjectUpdate update : updates) {
                updateDTOs.add(CompaignUpdateDTO.fromEntity(update));
            }

            return ProjectResponseDTO.fromEntityWithUpdates(project, updateDTOs);
        }

        @Override
        public ProjectResponseDTO createProject(ProjectCreateDTO request) {
            Beneficiary beneficiary = beneficiaryRepository.findById(request.getBeneficiaryId())
                    .orElseThrow(() -> new RuntimeException("Beneficiary not found"));

            Project project = new Project();
            project.setTitle(request.getTitle());
            project.setCategory(request.getCategory());
            project.setLocation(request.getLocation());
            project.setImageUrl(request.getImage());
            project.setDescription(request.getDescription());
            project.setStory(request.getStory());
            project.setGoal(request.getGoal());
            project.setRaised(request.getRaised());
            project.setStatus(request.getStatus());
            project.setBeneficiary(beneficiary);

            Admin admin = adminRepository.findById(1)
                    .orElseThrow(() -> new RuntimeException("Default admin not found — check Admins table has AdminId 1"));
            project.setCreatedByAdmin(admin);

            Project saved = projectRepository.save(project);
            return ProjectResponseDTO.fromEntity(saved);
        }

        @Override
        public ProjectResponseDTO updateProject(Integer id, ProjectCreateDTO request) {
            Project project = projectRepository.findById(id)
                    .orElseThrow(() -> new RuntimeException("Project not found"));

            Beneficiary beneficiary = beneficiaryRepository.findById(request.getBeneficiaryId())
                    .orElseThrow(() -> new RuntimeException("Beneficiary not found"));

            project.setTitle(request.getTitle());
            project.setCategory(request.getCategory());
            project.setLocation(request.getLocation());
            project.setImageUrl(request.getImage());
            project.setDescription(request.getDescription());
            project.setStory(request.getStory());
            project.setGoal(request.getGoal());
            project.setRaised(request.getRaised());
            project.setStatus(request.getStatus());
            project.setBeneficiary(beneficiary);

            Project updated = projectRepository.save(project);
            return ProjectResponseDTO.fromEntity(updated);
        }

        @Override
        public void deleteProject(Integer id) {
            if (!projectRepository.existsById(id)) {
                throw new RuntimeException("Project not found");
            }
            projectRepository.deleteById(id);
        }
    }
