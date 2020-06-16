package com.seventhgroup.collegesearchjob.controller;


import com.seventhgroup.collegesearchjob.service.UserService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.HashMap;
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






}
