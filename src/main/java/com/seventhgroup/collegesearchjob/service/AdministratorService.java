package com.seventhgroup.collegesearchjob.service;

import com.seventhgroup.collegesearchjob.dao.AdministratorDao;
import com.seventhgroup.collegesearchjob.dao.CompanyDao;
import com.seventhgroup.collegesearchjob.dao.RecruitmentDao;
import com.seventhgroup.collegesearchjob.dao.UserDao;
import com.seventhgroup.collegesearchjob.entity.AdministratorEntity;
import com.seventhgroup.collegesearchjob.entity.CompanyEntity;
import com.seventhgroup.collegesearchjob.entity.RecruitmentEntity;
import com.seventhgroup.collegesearchjob.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdministratorService {
    @Autowired
    private AdministratorDao administratorDao;
    @Autowired
    private UserDao userDao;
    @Autowired
    private CompanyDao companyDao;

    @Autowired
    private RecruitmentDao recruitmentDao;

    /*登录*/
    public String login(String admin_id, String admin_password) throws RuntimeException{
        AdministratorEntity check = administratorDao.findByAdmin_idAndAdmin_password(admin_id, admin_password);
        /*没有该账号*/
        if (check == null) {
            return "";
        }

        return check.getAdmin_id();
    }

    /*管理员页面得到所有的学生用户信息*/
    public List<User> getAllUsers() throws RuntimeException{
        List<User> users = userDao.findAll();
        return users;
    }

    /*搜索某些学生用户的信息*/
    public List<User> getUserInfo(String keyword) throws RuntimeException{
        List<User> users = userDao.findUsers(keyword);
        return users;
    }

    /*删除某个指定的用户*/
    public void deleteUser(String id) throws RuntimeException{
        userDao.deleteUser(id);
        return;
    }

    /*管理员页面得到所有的企业用户信息*/
    public List<CompanyEntity> getAllCompanies() throws RuntimeException{
        List<CompanyEntity> companyEntities = companyDao.findAll();
        return companyEntities;
    }

    /*管理员页面搜索得到某些企业用户的信息*/
    public List<CompanyEntity> getCompanyInfo(String keyword) throws RuntimeException{
        List<CompanyEntity> companyEntities = companyDao.getCompanyInfo(keyword);
        return companyEntities;
    }

    /*管理员删除某个企业用户的信息*/
    public void deleteCompany(String company_id) throws RuntimeException{
        companyDao.deleteCompany(company_id);
        return;
    }

    /*管理员获得所有招聘的信息*/
    public List<RecruitmentEntity> getAllRecruits() throws RuntimeException{
        List<RecruitmentEntity> recruitmentEntities =  recruitmentDao.findAll();
        return recruitmentEntities;
    }


    /*管理员模糊搜索某些招聘*/
    public List<RecruitmentEntity> getRecruitInfo(String keyword)throws RuntimeException{
        List<RecruitmentEntity> recruitmentEntities =  recruitmentDao.getRecruitInfo(keyword);
        return recruitmentEntities;
    }

    /*管理员删除某一个招聘的信息*/
    public void deleteRecruitment(String recruitment_id) throws RuntimeException{
        recruitmentDao.deleteRecruitment(recruitment_id);
        return;
    }
}
