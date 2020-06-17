package com.seventhgroup.collegesearchjob.dao;

import com.seventhgroup.collegesearchjob.entity.PersonalInfo;

import com.seventhgroup.collegesearchjob.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PersonalInfoDao extends JpaRepository<PersonalInfo,String> {

    @Query(value = "select * from personalinfo where concat(realname,school,degree,major,experience,expectjob,expectcity) like %?1%",nativeQuery = true)
    List<PersonalInfo> findByExpect(String keyword);
}
