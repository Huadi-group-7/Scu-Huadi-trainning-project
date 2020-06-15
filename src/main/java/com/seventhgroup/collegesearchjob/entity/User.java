package com.seventhgroup.collegesearchjob.entity;


import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "user")
@NoArgsConstructor
public class User {
  @Id
  private String id;
  private String phone;
  private String name;
  private String school;
  private String sex;
  private String password;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSchool() {
        return school;
    }

    public void setSchool(String school) {
        this.school = school;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public User(String id, String phone, String name, String school, String sex, String password) {
        this.id = id;
        this.phone = phone;
        this.name = name;
        this.school = school;
        this.sex = sex;
        this.password = password;
    }
}
