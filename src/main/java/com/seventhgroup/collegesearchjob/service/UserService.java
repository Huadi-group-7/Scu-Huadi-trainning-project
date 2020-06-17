package com.seventhgroup.collegesearchjob.service;


import com.seventhgroup.collegesearchjob.dao.UserDao;
import com.seventhgroup.collegesearchjob.entity.ApplymentEntity;
import com.seventhgroup.collegesearchjob.entity.RecruitmentEntity;
import com.seventhgroup.collegesearchjob.entity.User;
import com.seventhgroup.collegesearchjob.util.Util;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserDao userDao;
    /*注册*/
    public String register(String username, String email, String password) throws RuntimeException {

        String userId = Util.getUniqueId();
        List<User> checkPhone = userDao.findByEmail(email);
        if (checkPhone.size() > 0) {
            throw  new RuntimeException("邮箱已经存在,请重新输入");
        }

        userDao.save(new User(userId, username, email, password));
        return userId;
    }
    /*登录*/
    public String login(String email, String password) {
        List<User> check = userDao.findByEmailAndPassword(email, password);
        /*没有该账号*/
        if (check.size() == 0) {
            return "";
        }

        return check.get(0).getId();
    }

    /*修改密码*/
    public String modifyPassword(String email, String password){
        List<User> check = userDao.findByEmail(email);
        if (check.size() == 0) {
            throw new RuntimeException("该邮箱未注册,请重新输入");
        }
        String id = check.get(0).getId();
        String username = check.get(0).getUsername();
        userDao.save(new User(id, username,email, password));
        return id;

    }


    /*修改用户名*/
    public String modifyUsername(String id, String username){
        List<User> check = userDao.findByID(id);
        String email = check.get(0).getEmail();
        String password = check.get(0).getPassword();
        userDao.save(new User(id, username,email, password));
        return id;

    }

    /*获得个人信息*/
    public Object getPersonalInfo(String id){
        Object check = userDao.findById_join(id);
        return check;

    }









}
