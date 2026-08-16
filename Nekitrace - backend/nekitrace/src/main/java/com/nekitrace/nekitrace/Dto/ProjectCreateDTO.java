package com.nekitrace.nekitrace.Dto;

import java.math.BigDecimal;

public class ProjectCreateDTO {
    private String title;
    private String category;
    private String location;
    private String image;
    private String description;
    private String story;
    private BigDecimal goal;
    private BigDecimal raised;
    private String status;
    private Integer beneficiaryId;

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }

    public String getImage() { return image; }
    public void setImage(String image) { this.image = image; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getStory() { return story; }
    public void setStory(String story) { this.story = story; }

    public BigDecimal getGoal() { return goal; }
    public void setGoal(BigDecimal goal) { this.goal = goal; }

    public BigDecimal getRaised() { return raised; }
    public void setRaised(BigDecimal raised) { this.raised = raised; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public Integer getBeneficiaryId() { return beneficiaryId; }
    public void setBeneficiaryId(Integer beneficiaryId) { this.beneficiaryId = beneficiaryId; }
}