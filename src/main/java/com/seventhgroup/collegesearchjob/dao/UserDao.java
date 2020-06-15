package com.seventhgroup.collegesearchjob.dao;


import com.seventhgroup.collegesearchjob.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDao extends JpaRepository<User,String>{

}
