package com.seventhgroup.collegesearchjob.dao;


import com.seventhgroup.collegesearchjob.entity.CompanyEntity;
import com.seventhgroup.collegesearchjob.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface CompanyDao extends JpaRepository<CompanyEntity,String> {
    @Query(value = "select * from company where concat(company_id,company_password,company_email,company_phone_number,company_nature,company_date_of_establishment,company_brief_introduce,company_address,company_homepage,company_legal_persion,company_type,company_name) like %?1%",nativeQuery = true)
    List<CompanyEntity> getCompanyInfo(String keyword);

    @Transactional
    @Modifying
    @Query(value = "delete from company where company_id = ?1",nativeQuery = true)
    void deleteCompany(String company_id);

}
