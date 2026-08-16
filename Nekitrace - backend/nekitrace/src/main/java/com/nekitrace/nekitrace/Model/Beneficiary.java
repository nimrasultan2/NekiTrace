package com.nekitrace.nekitrace.Model;

import jakarta.persistence.*;

@Entity
@Table(name = "Beneficiaries")
public class Beneficiary {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "BeneficiaryId")
    private Integer beneficiaryId;

    @Column(name = "FullName", nullable = false)
    private String fullName;

    @Column(name = "Age")
    private Integer age;

    @Column(name = "Details")
    private String details;

    @Column(name = "ImageUrl")
    private String imageUrl;

    public Integer getBeneficiaryId() { return beneficiaryId; }
    public void setBeneficiaryId(Integer beneficiaryId) { this.beneficiaryId = beneficiaryId; }

    public String getFullName() { return fullName; }
    public void setFullName(String fullName) { this.fullName = fullName; }

    public Integer getAge() { return age; }
    public void setAge(Integer age) { this.age = age; }

    public String getDetails() { return details; }
    public void setDetails(String details) { this.details = details; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }
}