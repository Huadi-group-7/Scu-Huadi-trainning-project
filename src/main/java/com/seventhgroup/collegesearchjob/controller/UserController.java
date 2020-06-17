package com.seventhgroup.collegesearchjob.controller;


import com.seventhgroup.collegesearchjob.entity.ApplymentEntity;
import com.seventhgroup.collegesearchjob.entity.RecruitmentEntity;
import com.seventhgroup.collegesearchjob.entity.User;
import com.seventhgroup.collegesearchjob.service.UserService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static com.seventhgroup.collegesearchjob.util.Util.setMapFromUserId;

@RestController
@Api(description = "用户接口")
public class UserController {
    @Autowired
    private UserService userService;

    /*毕业生用户注册*/
    @ResponseBody
    @GetMapping(value = "/user/register/{username}/{email}/{password}")
    public Map<String, Object> register(@PathVariable(value = "email") String email,
                                        @PathVariable(value = "username") String username,
                                        @PathVariable(value = "password") String password) {
        Map<String, Object> map = new HashMap<>();

        try {
            String userId = userService.register(username, email, password);

            setMapFromUserId(map, userId);
            map.put("msg", "注册成功");

        } catch (Exception e) {
            map.put("code", 1);
            map.put("msg", e.getMessage());
        }
        return map;

    }





/*登录*/
    @ResponseBody
    @GetMapping(value = "/user/login/{email}/{password}")
    public Map<String, Object> login(@PathVariable(value = "email") String email,
                                        @PathVariable(value = "password") String password){
        Map<String, Object> map = new HashMap<>();


        String userId =  userService.login(email, password);

        setMapFromUserId(map, userId);
        map.put("msg", "登陆成功");
        return map;

    }


    /*修改密码*/
    @ResponseBody
    @GetMapping(value = "/user/modifyPassword/{email}/{password}")
    public Map<String, Object> modifyPassword(@PathVariable(value = "email") String email,
                                     @PathVariable(value = "password") String password) {
        Map<String, Object> map = new HashMap<>();
        String userId =  userService.modifyPassword(email, password);
        setMapFromUserId(map, userId);
        map.put("msg", "修改密码成功");
        return map;

    }

    /*修改用户名*/
    @ResponseBody
    @GetMapping(value = "/user/modifyUsername/{id}/{username}")
    public Map<String, Object> modifyUsername(@PathVariable(value = "username") String username,
                                              @PathVariable(value = "id") String id) {
            Map<String, Object> map = new HashMap<>();
            String userId =  userService.modifyUsername(id, username);
            setMapFromUserId(map, userId);
            map.put("msg", "修改密用户名成功");
            return map;

        }
    /*获取个人信息*/
    @ResponseBody
    @GetMapping(value = "/user/getPersonalInfo/{id}")
    public Map<String, Object> getPersonalInfo(@PathVariable(value = "id") String id) {
        Map<String, Object> map = new HashMap<>();
        Object temp =  userService.getPersonalInfo(id);
        map.put("msg", "返回个人信息成功");
        map.put("data", temp);
        return map;

    }









}
