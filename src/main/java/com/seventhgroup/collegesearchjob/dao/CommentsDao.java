package com.seventhgroup.collegesearchjob.dao;


import com.seventhgroup.collegesearchjob.entity.CommentsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentsDao extends JpaRepository<CommentsEntity,String> {




}
