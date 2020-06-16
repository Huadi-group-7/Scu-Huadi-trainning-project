package com.seventhgroup.collegesearchjob.dao;


import com.seventhgroup.collegesearchjob.entity.ApplymentEntity;
import com.seventhgroup.collegesearchjob.entity.RecruitmentEntity;
import com.seventhgroup.collegesearchjob.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserDao extends JpaRepository<User,String>{
    List<User> findByEmail(String email);
    List<User> findByEmailAndPassword(String email, String password);
    @Query(value = "select * from User where id = ?1",nativeQuery = true)
    List<User> findByID(String id);
    @Query(value = "select * from User u join personalinfo p on u.id = p.id and u.id = ?1",nativeQuery = true)
    Object findById_join(String id);

    @Query(value = "select * from recruitment where recruitment_need like %?1%",nativeQuery = true)
    List<RecruitmentEntity> findByJob(String job);

}
