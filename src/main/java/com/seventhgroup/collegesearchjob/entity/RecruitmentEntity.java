package com.seventhgroup.collegesearchjob.entity;

import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "recruitment")
@NoArgsConstructor
public class RecruitmentEntity {
    @Id
    private String recruitment_id;
    private String recruitment_holder;
    private String recruitment_payment;
    private String recruitment_require;
    private String recruitment_applicants;
    private String recruitment_need;
    private String recruitment_app_accounts;
    private String recruitment_pass_accounts;

    public RecruitmentEntity(String recruitment_id, String recruitment_holder, String recruitment_payment, String recruitment_require, String recruitment_applicants, String recruitment_need, String recruitment_app_accounts, String recruitment_pass_accounts) {
        this.recruitment_id = recruitment_id;
        this.recruitment_holder = recruitment_holder;
        this.recruitment_payment = recruitment_payment;
        this.recruitment_require = recruitment_require;
        this.recruitment_applicants = recruitment_applicants;
        this.recruitment_need = recruitment_need;
        this.recruitment_app_accounts = recruitment_app_accounts;
        this.recruitment_pass_accounts = recruitment_pass_accounts;
    }

    public String getRecruitment_id() {
        return recruitment_id;
    }

    public void setRecruitment_id(String recruitment_id) {
        this.recruitment_id = recruitment_id;
    }

    public String getRecruitment_holder() {
        return recruitment_holder;
    }

    public void setRecruitment_holder(String recruitment_holder) {
        this.recruitment_holder = recruitment_holder;
    }

    public String getRecruitment_payment() {
        return recruitment_payment;
    }

    public void setRecruitment_payment(String recruitment_payment) {
        this.recruitment_payment = recruitment_payment;
    }

    public String getRecruitment_require() {
        return recruitment_require;
    }

    public void setRecruitment_require(String recruitment_require) {
        this.recruitment_require = recruitment_require;
    }

    public String getRecruitment_applicants() {
        return recruitment_applicants;
    }

    public void setRecruitment_applicants(String recruitment_applicants) {
        this.recruitment_applicants = recruitment_applicants;
    }

    public String getRecruitment_need() {
        return recruitment_need;
    }

    public void setRecruitment_need(String recruitment_need) {
        this.recruitment_need = recruitment_need;
    }

    public String getRecruitment_app_accounts() {
        return recruitment_app_accounts;
    }

    public void setRecruitment_app_accounts(String recruitment_app_accounts) {
        this.recruitment_app_accounts = recruitment_app_accounts;
    }

    public String getRecruitment_pass_accounts() {
        return recruitment_pass_accounts;
    }

    public void setRecruitment_pass_accounts(String recruitment_pass_accounts) {
        this.recruitment_pass_accounts = recruitment_pass_accounts;
    }
}
