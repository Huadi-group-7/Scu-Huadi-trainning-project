package com.seventhgroup.collegesearchjob.dao;

import com.seventhgroup.collegesearchjob.entity.ResumeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ResumeDao extends JpaRepository<ResumeEntity,String> {

}
