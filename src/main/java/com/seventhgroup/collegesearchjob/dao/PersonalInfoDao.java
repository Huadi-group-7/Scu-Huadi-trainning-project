package com.seventhgroup.collegesearchjob.dao;

import com.seventhgroup.collegesearchjob.entity.PersonalInfo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonalInfoDao extends JpaRepository<PersonalInfo,String> {
}