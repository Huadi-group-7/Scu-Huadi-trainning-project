package com.seventhgroup.collegesearchjob.entity;


import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "v2user")
@NoArgsConstructor
public class CommentsEntity {
    @Id
    private String userid;
    private int company_id;
    private String comment_content;

    public CommentsEntity(String userid, int company_id) {
        this.userid = userid;
        this.company_id = company_id;
    }

    public String getUserid() {
        return userid;
    }

    public void setUserid(String userid) {
        this.userid = userid;
    }

    public int getCompany_id() {
        return company_id;
    }

    public void setCompany_id(int company_id) {
        this.company_id = company_id;
    }

    public String getComment_content() {
        return comment_content;
    }

    public void setComment_content(String comment_content) {
        this.comment_content = comment_content;
    }
}
