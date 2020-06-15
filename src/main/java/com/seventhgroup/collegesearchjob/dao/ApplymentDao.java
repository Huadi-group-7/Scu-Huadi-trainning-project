package com.seventhgroup.collegesearchjob.dao;

import com.seventhgroup.collegesearchjob.entity.ApplymentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ApplymentDao extends JpaRepository<com.seventhgroup.collegesearchjob.entity.ApplymentEntity,String> {
}
