package com.seventhgroup.collegesearchjob.service;


import com.seventhgroup.collegesearchjob.dao.UserDao;
import com.seventhgroup.collegesearchjob.entity.User;
import com.seventhgroup.collegesearchjob.util.Util;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserDao userDao;
    public String register(String username, String email, String password) throws RuntimeException {

        String userId = Util.getUniqueId();
        List<User> checkPhone = userDao.findByEmail(email);
        if (checkPhone.size() > 0) {
            throw  new RuntimeException("邮箱已经存在,请重新输入");
        }

        userDao.save(new User(userId, username, email, password));
        return userId;
    }



}
