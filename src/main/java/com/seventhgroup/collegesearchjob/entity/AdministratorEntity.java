package com.seventhgroup.collegesearchjob.entity;


import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "administrator")
@NoArgsConstructor
public class AdministratorEntity {

    @Id
    private String admin_id;
    private String admin_password;
    private String name;

    public AdministratorEntity(String admin_id, String admin_password, String name) {
        this.admin_id = admin_id;
        this.admin_password = admin_password;
        this.name = name;
    }

    public String getAdmin_id() {
        return admin_id;
    }

    public void setAdmin_id(String admin_id) {
        this.admin_id = admin_id;
    }

    public String getAdmin_password() {
        return admin_password;
    }

    public void setAdmin_password(String admin_password) {
        this.admin_password = admin_password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
