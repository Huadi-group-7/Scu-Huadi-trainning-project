package com.seventhgroup.collegesearchjob.entity;


import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "personalinfo")
@NoArgsConstructor
public class PersonalInfo {
    @Id
    private String id;
    private String picture;
    private boolean gender;
    private String realname;
    private String birthday;
    private String school;
    private String degree;
    private String major;
    private String majordate;
    private String experience;
    private String expectjob;
    private String expectcity;

    public PersonalInfo(String id, String picture, boolean gender, String realname, String birthday, String school,
                        String degree, String major, String majordate, String experience, String expectjob, String expectcity) {
        this.id = id;
        this.picture = picture;
        this.gender = gender;
        this.realname = realname;
        this.birthday = birthday;
        this.school = school;
        this.degree = degree;
        this.major = major;
        this.majordate = majordate;
        this.experience = experience;
        this.expectjob = expectjob;
        this.expectcity = expectcity;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public boolean isGender() {
        return gender;
    }

    public void setGender(boolean gender) {
        this.gender = gender;
    }

    public String getRealname() {
        return realname;
    }

    public void setRealname(String realname) {
        this.realname = realname;
    }

    public String getBirthday() {
        return birthday;
    }

    public void setBirthday(String birthday) {
        this.birthday = birthday;
    }

    public String getSchool() {
        return school;
    }

    public void setSchool(String school) {
        this.school = school;
    }

    public String getDegree() {
        return degree;
    }

    public void setDegree(String degree) {
        this.degree = degree;
    }

    public String getMajor() {
        return major;
    }

    public void setMajor(String major) {
        this.major = major;
    }

    public String getMajordate() {
        return majordate;
    }

    public void setMajordate(String majordate) {
        this.majordate = majordate;
    }

    public String getExperience() {
        return experience;
    }

    public void setExperience(String experience) {
        this.experience = experience;
    }

    public String getExpectjob() {
        return expectjob;
    }

    public void setExpectjob(String expectjob) {
        this.expectjob = expectjob;
    }

    public String getExpectcity() {
        return expectcity;
    }

    public void setExpectcity(String expectcity) {
        this.expectcity = expectcity;
    }

    @Override
    public String toString() {
        return "PersonalInfo{" +
                "id='" + id + '\'' +
                ", picture='" + picture + '\'' +
                ", gender=" + gender +
                ", realname='" + realname + '\'' +
                ", birthday='" + birthday + '\'' +
                ", school='" + school + '\'' +
                ", degree='" + degree + '\'' +
                ", major='" + major + '\'' +
                ", majordate='" + majordate + '\'' +
                ", experience='" + experience + '\'' +
                ", expectjob='" + expectjob + '\'' +
                ", expectcity='" + expectcity + '\'' +
                '}';
    }
}
