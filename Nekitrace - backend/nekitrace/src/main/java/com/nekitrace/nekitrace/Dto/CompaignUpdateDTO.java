package com.nekitrace.nekitrace.Dto;

import com.nekitrace.nekitrace.Model.ProjectUpdate;

public class CompaignUpdateDTO
{
    private String date;
    private String title;
    private String content;

    public static CompaignUpdateDTO fromEntity(ProjectUpdate update)
    {
        CompaignUpdateDTO dto = new CompaignUpdateDTO();
        dto.date = update.getUpdateDate().toString();
        dto.title = update.getTitle();
        dto.content = update.getContent();
        return dto;
    }

    public String getDate()
    { return date; }
    public String getTitle() { return title; }
    public String getContent() { return content; }
}