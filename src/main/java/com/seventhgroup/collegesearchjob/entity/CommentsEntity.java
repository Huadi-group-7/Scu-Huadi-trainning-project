package com.seventhgroup.collegesearchjob.entity;


import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "comments")
@NoArgsConstructor
public class CommentsEntity {
    @Id
    private String comment_id;
    private String user_id;
    private String company_id;
    private String recruitment_id;
    private String comment_content;

    public CommentsEntity(String comment_id, String user_id, String company_id, String recruitment_id, String comment_content) {
        this.comment_id = comment_id;
        this.user_id = user_id;
        this.company_id = company_id;
        this.recruitment_id = recruitment_id;
        this.comment_content = comment_content;
    }

    public String getUser_id() {
        return user_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }

    public String getCompany_id() {
        return company_id;
    }

    public void setCompany_id(String company_id) {
        this.company_id = company_id;
    }

    public String getRecruitment_id() {
        return recruitment_id;
    }

    public void setRecruitment_id(String recruitment_id) {
        this.recruitment_id = recruitment_id;
    }

    public String getComment_content() {
        return comment_content;
    }

    public void setComment_content(String comment_content) {
        this.comment_content = comment_content;
    }

    public String getComment_id() {
        return comment_id;
    }

    public void setComment_id(String comment_id) {
        this.comment_id = comment_id;
    }
}
