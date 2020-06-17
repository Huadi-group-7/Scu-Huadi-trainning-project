package com.seventhgroup.collegesearchjob.service;


import com.seventhgroup.collegesearchjob.dao.PersonalInfoDao;
import com.seventhgroup.collegesearchjob.dao.UserDao;
import com.seventhgroup.collegesearchjob.entity.PersonalInfo;
import com.seventhgroup.collegesearchjob.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonalInfoService {


    @Autowired
    private PersonalInfoDao personalInfoDao;
    /*注册或修改个人信息*/
    public String modifyInfo(String id,String picture,boolean gender,String realname,String birthday,
                             String school,String degree,String major,String majordate,String experience,String expectjob,String expectcity) {
        personalInfoDao.save(new PersonalInfo(id,picture,gender,realname,birthday,
                school,degree,major,majordate,experience,expectjob,expectcity));
       return id;
    }

    /*首页搜索求职意向*/

    public List<PersonalInfo> searchExpect(String keyword){
        List<PersonalInfo> check = personalInfoDao.findByExpect(keyword);
        return check;

    }

}
