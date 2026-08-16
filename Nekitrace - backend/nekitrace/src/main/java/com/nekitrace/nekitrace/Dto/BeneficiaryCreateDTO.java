package com.nekitrace.nekitrace.Dto;

public class BeneficiaryCreateDTO {
    private String fullName;
    private Integer age;
    private String details;
    private String image;

    public String getFullName()
    {
        return fullName;
    }
    public void setFullName(String fullName)
    {
        this.fullName = fullName;
    }

    public Integer getAge()
    {
        return age;
    }
    public void setAge(Integer age)
    {
        this.age = age;
    }
    public String getDetails()
    {
        return details;
    }
    public void setDetails(String details)
    {
        this.details = details;
    }
    public String getImage()
    {
        return image;
    }
    public void setImage(String image)
    {
        this.image = image;
    }
}