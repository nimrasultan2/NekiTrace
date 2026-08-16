package com.nekitrace.nekitrace.Model;
import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "ProjectUpdates")
public class ProjectUpdate
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "UpdateId")
    private Integer updateId;

    @Column(name = "UpdateDate", nullable = false)
    private LocalDate updateDate;

    @Column(name = "Title", nullable = false)
    private String title;

    @Column(name = "Content", nullable = false)
    private String content;

    @ManyToOne
    @JoinColumn(name = "ProjectId", nullable = false)
    private Project project;

    public Integer getUpdateId() { return updateId; }
    public void setUpdateId(Integer updateId) { this.updateId = updateId; }

    public LocalDate getUpdateDate() { return updateDate; }
    public void setUpdateDate(LocalDate updateDate) { this.updateDate = updateDate; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getContent()
    {
        return content;
    }
    public void setContent(String content) { this.content = content; }

    public Project getProject() { return project; }
    public void setProject(Project project) { this.project = project; }
}
