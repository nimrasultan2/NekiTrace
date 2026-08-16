package com.nekitrace.nekitrace.Dto;
import java.math.BigDecimal;
import java.util.List;

import com.nekitrace.nekitrace.Model.Project;

public class ProjectResponseDTO
{
    private Integer id;
    private String title;
    private String beneficiary;
    private String category;
    private String location;
    private String image;
    private String description;
    private String story;
    private BigDecimal goal;
    private BigDecimal raised;
    private BigDecimal remaining;
    private Integer progress;
    private String status;
    private Integer beneficiaryId;


    public static ProjectResponseDTO fromEntity(Project project)
    {
        ProjectResponseDTO dto = new ProjectResponseDTO();

        dto.id = project.getProjectId();
        dto.title = project.getTitle();
        dto.category = project.getCategory();
        dto.location = project.getLocation();
        dto.image = project.getImageUrl();
        dto.description = project.getDescription();
        dto.story = project.getStory();
        dto.goal = project.getGoal();
        dto.raised = project.getRaised();
        dto.status = project.getStatus();
        dto.beneficiaryId = project.getBeneficiary().getBeneficiaryId();

        String name = project.getBeneficiary().getFullName();
        Integer age = project.getBeneficiary().getAge();
        dto.beneficiary = (age != null) ? name + ", " + age + " years old" : name;
        dto.remaining = project.getGoal().subtract(project.getRaised());
        if (project.getGoal().compareTo(BigDecimal.ZERO) > 0) {
            dto.progress = project.getRaised()
                    .multiply(BigDecimal.valueOf(100))
                    .divide(project.getGoal(), 0, java.math.RoundingMode.HALF_UP)
                    .intValue();
        }
        else
        {
            dto.progress = 0;
        }

        return dto;
    }
    private List<CompaignUpdateDTO> updates;
    public static ProjectResponseDTO fromEntityWithUpdates(Project project, List<CompaignUpdateDTO> updates)
    {
        ProjectResponseDTO dto = fromEntity(project);
        dto.updates = updates;
        return dto;
    }

    public List<CompaignUpdateDTO> getUpdates() { return updates; }

    public Integer getId() { return id; }
    public String getTitle() { return title; }
    public String getBeneficiary() { return beneficiary; }
    public String getCategory() { return category; }
    public String getLocation() { return location; }
    public String getImage() { return image; }
    public String getDescription() { return description; }
    public String getStory() { return story; }
    public BigDecimal getGoal() { return goal; }
    public BigDecimal getRaised() { return raised; }
    public BigDecimal getRemaining() { return remaining; }
    public Integer getProgress() { return progress; }
    public String getStatus() { return status; }
    public Integer getBeneficiaryId() { return beneficiaryId; }
}