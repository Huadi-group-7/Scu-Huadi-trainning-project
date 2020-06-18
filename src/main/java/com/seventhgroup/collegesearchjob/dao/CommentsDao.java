package com.seventhgroup.collegesearchjob.dao;


import com.seventhgroup.collegesearchjob.entity.CommentsEntity;
import com.seventhgroup.collegesearchjob.entity.RecruitmentEntity;
import com.seventhgroup.collegesearchjob.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface CommentsDao extends JpaRepository<CommentsEntity,String> {
    @Query(value = "select * from comments where recruitment_id = ?1",nativeQuery = true)
    List<CommentsEntity> findByID(String recruitment_id);
    @Query(value = "select * from comments where user_id = ?1",nativeQuery = true)
    List<CommentsEntity> findByUserId(String user_id);
    @Transactional
    @Modifying
    @Query(value = "delete from comments where user_id = ?1 and comment_id = ?2",nativeQuery = true)
    void delPersonalComment(String user_id, String comment_id);


}
