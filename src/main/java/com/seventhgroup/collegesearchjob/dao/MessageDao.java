package com.seventhgroup.collegesearchjob.dao;


import com.seventhgroup.collegesearchjob.entity.MessageEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MessageDao extends JpaRepository<MessageEntity,String> {
}
