package com.seventhgroup.collegesearchjob.dao;


import com.seventhgroup.collegesearchjob.entity.RecruitmentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RecruitmentDao extends JpaRepository<RecruitmentEntity,String> {
    @Query(value = "select * from recruitment where recruitment_need like %?1%",nativeQuery = true)
    List<RecruitmentEntity> findByJob(String job);

}
