package com.nekitrace.nekitrace.Service;

import com.nekitrace.nekitrace.Dto.DonationCreateDTO;
import com.nekitrace.nekitrace.Dto.DonationResponseDTO;
import com.nekitrace.nekitrace.Model.Donation;
import com.nekitrace.nekitrace.Model.Project;
import com.nekitrace.nekitrace.Repository.DonationRepository;
import com.nekitrace.nekitrace.Repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;

@Service
public class DonationServiceImplementation implements DonationService {

    @Autowired
    private DonationRepository donationRepository;

    @Autowired
    private ProjectRepository projectRepository;

    @Override
    public DonationResponseDTO createDonation(DonationCreateDTO request) {
        Project project = projectRepository.findById(request.getProjectId())
                .orElseThrow(() -> new RuntimeException("Project not found"));

        Donation donation = new Donation();
        donation.setProject(project);
        donation.setDonorName(request.getDonorName());
        donation.setEmail(request.getEmail());
        donation.setPhone(request.getPhone());
        donation.setAmount(request.getAmount());
        donation.setMessage(request.getMessage());
        donation.setIsAnonymous(request.getIsAnonymous() != null ? request.getIsAnonymous() : false);
        donation.setProofImageUrl(request.getProofImageUrl());
        donation.setSubmittedAt(LocalDateTime.now());

        Donation saved = donationRepository.save(donation);

        project.setRaised(project.getRaised().add(request.getAmount()));
        projectRepository.save(project);

        return DonationResponseDTO.fromEntity(saved);
    }
}