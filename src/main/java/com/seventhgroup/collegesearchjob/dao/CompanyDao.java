package com.seventhgroup.collegesearchjob.dao;


import com.seventhgroup.collegesearchjob.entity.CompanyEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyDao extends JpaRepository<CompanyEntity,String> {
}
