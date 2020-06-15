package com.seventhgroup.collegesearchjob.service;


import com.seventhgroup.collegesearchjob.dao.UserDao;
import com.seventhgroup.collegesearchjob.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserDao userDao;
    public String register(String phone, String password) throws RuntimeException {
        /*手机号作为唯一标识*/
        List<User> checkPhone = userDao.findByPhone(phone);

        if (checkPhone.size() > 0) {
            throw  new RuntimeException("手机号已经存在,请重新输入");
        }


        userDao.save(new User (phone, password));

        return phone;
    }



}
