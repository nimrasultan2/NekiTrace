package com.nekitrace.nekitrace.Dto;

import com.nekitrace.nekitrace.Model.Donation;

public class DonationResponseDTO {
    private Integer id;
    private String donorName;
    private String projectTitle;
    private java.math.BigDecimal amount;
    private String submittedAt;

    public static DonationResponseDTO fromEntity(Donation donation) {
        DonationResponseDTO dto = new DonationResponseDTO();
        dto.id = donation.getDonationId();
        dto.donorName = donation.getIsAnonymous() ? "Anonymous" : donation.getDonorName();
        dto.projectTitle = donation.getProject().getTitle();
        dto.amount = donation.getAmount();
        dto.submittedAt = donation.getSubmittedAt().toString();
        return dto;
    }

    public Integer getId() { return id; }
    public String getDonorName() { return donorName; }
    public String getProjectTitle() { return projectTitle; }
    public java.math.BigDecimal getAmount() { return amount; }
    public String getSubmittedAt() { return submittedAt; }
}