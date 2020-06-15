package com.seventhgroup.collegesearchjob.dao;


import com.seventhgroup.collegesearchjob.entity.RecruitmentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecruitmentDao extends JpaRepository<RecruitmentEntity,String> {




}
