package com.nekitrace.nekitrace.Model;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "Projects")
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ProjectId")
    private Integer projectId;

    @Column(name = "Title", nullable = false)
    private String title;

    @Column(name = "Category", nullable = false)
    private String category;

    @Column(name = "Location", nullable = false)
    private String location;

    @Column(name = "ImageUrl")
    private String imageUrl;

    @Column(name = "Description", nullable = false)
    private String description;

    @Column(name = "Story", nullable = false, columnDefinition = "NVARCHAR(MAX)")
    private String story;

    @Column(name = "Goal", nullable = false)
    private BigDecimal goal;

    @Column(name = "Raised", nullable = false)
    private BigDecimal raised;

    @Column(name = "Status", nullable = false)
    private String status;

    @ManyToOne
    @JoinColumn(name = "BeneficiaryId", nullable = false)
    private Beneficiary beneficiary;

    @ManyToOne
    @JoinColumn(name = "CreatedByAdminId", nullable = false)
    private Admin createdByAdmin;

    public Admin getCreatedByAdmin() { return createdByAdmin; }
    public void setCreatedByAdmin(Admin createdByAdmin) { this.createdByAdmin = createdByAdmin; }


    public Integer getProjectId() { return projectId; }
    public void setProjectId(Integer projectId) { this.projectId = projectId; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }

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

    public Beneficiary getBeneficiary() { return beneficiary; }
    public void setBeneficiary(Beneficiary beneficiary) { this.beneficiary = beneficiary; }
}