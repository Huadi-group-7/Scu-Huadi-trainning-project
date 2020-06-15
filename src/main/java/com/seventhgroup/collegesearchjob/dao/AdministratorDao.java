package com.seventhgroup.collegesearchjob.dao;


import com.seventhgroup.collegesearchjob.entity.AdministratorEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdministratorDao extends JpaRepository<AdministratorEntity,String> {
}
