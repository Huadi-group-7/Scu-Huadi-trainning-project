package com.seventhgroup.collegesearchjob.dao;


import com.seventhgroup.collegesearchjob.entity.AdministratorEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AdministratorDao extends JpaRepository<AdministratorEntity,String> {
    @Query(value = "select * from administrator where admin_id = ?1 and admin_password = ?2",nativeQuery = true)
    AdministratorEntity findByAdmin_idAndAdmin_password(String admin_id, String admin_password);

    AdministratorEntity findByName(String name);
}
