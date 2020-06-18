package com.seventhgroup.collegesearchjob.dao;


import com.seventhgroup.collegesearchjob.entity.RecruitmentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface RecruitmentDao extends JpaRepository<RecruitmentEntity,String> {
    @Query(value = "select * from recruitment where recruitment_need like %?1%",nativeQuery = true)
    List<RecruitmentEntity> findByJob(String job);

    @Transactional
    @Modifying
    @Query(value = "delete from recruitment where recruitment_id = ?1",nativeQuery = true)
    void deleteRecruitment(String recruitment_id);

    @Query(value = "select * from recruitment where concat(recruitment_id,recruitment_holder,recruitment_payment,recruitment_require,recruitment_applicants,recruitment_need,recruitment_pass_accounts) like %?1%",nativeQuery = true)
    List<RecruitmentEntity> getRecruitInfo(String keyword);
}
