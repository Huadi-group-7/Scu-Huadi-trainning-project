package com.seventhgroup.collegesearchjob.entity;

import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "resume")
@NoArgsConstructor
public class ResumeEntity {
    @Id
    private String resume_id;
    private String resume_owner_id;
    private String resume_major;
    private String resume_owner_name;
    private String resume_owner_sex;
    private String resume_graduate_school;
    private String resume_detail;

    public ResumeEntity(String resume_id, String resume_owner_id, String resume_major, String resume_owner_name, String resume_owner_sex, String resume_graduate_school, String resume_detail) {
        this.resume_id = resume_id;
        this.resume_owner_id = resume_owner_id;
        this.resume_major = resume_major;
        this.resume_owner_name = resume_owner_name;
        this.resume_owner_sex = resume_owner_sex;
        this.resume_graduate_school = resume_graduate_school;
        this.resume_detail = resume_detail;
    }

    public String getResume_id() {
        return resume_id;
    }

    public void setResume_id(String resume_id) {
        this.resume_id = resume_id;
    }

    public String getResume_owner_id() {
        return resume_owner_id;
    }

    public void setResume_owner_id(String resume_owner_id) {
        this.resume_owner_id = resume_owner_id;
    }

    public String getResume_major() {
        return resume_major;
    }

    public void setResume_major(String resume_major) {
        this.resume_major = resume_major;
    }

    public String getResume_owner_name() {
        return resume_owner_name;
    }

    public void setResume_owner_name(String resume_owner_name) {
        this.resume_owner_name = resume_owner_name;
    }

    public String getResume_owner_sex() {
        return resume_owner_sex;
    }

    public void setResume_owner_sex(String resume_owner_sex) {
        this.resume_owner_sex = resume_owner_sex;
    }

    public String getResume_graduate_school() {
        return resume_graduate_school;
    }

    public void setResume_graduate_school(String resume_graduate_school) {
        this.resume_graduate_school = resume_graduate_school;
    }

    public String getResume_detail() {
        return resume_detail;
    }

    public void setResume_detail(String resume_detail) {
        this.resume_detail = resume_detail;
    }
}
