package com.nekitrace.nekitrace.Dto;

import com.nekitrace.nekitrace.Model.Beneficiary;

public class BeneficiaryResponseDTO
{
    private Integer id;
    private String fullName;
    private Integer age;
    private String details;
    private String image;

    public static BeneficiaryResponseDTO fromEntity(Beneficiary beneficiary)
    {
        BeneficiaryResponseDTO dto = new BeneficiaryResponseDTO();
        dto.id = beneficiary.getBeneficiaryId();
        dto.fullName = beneficiary.getFullName();
        dto.age = beneficiary.getAge();
        dto.details = beneficiary.getDetails();
        dto.image = beneficiary.getImageUrl();
        return dto;
    }

    public Integer getId()
    {
        return id;
    }
    public String getFullName()
    {
        return fullName;
    }
    public Integer getAge()
    {
        return age;
    }
    public String getDetails()
    {
        return details;
    }
    public String getImage()
    {
        return image;
    }
}