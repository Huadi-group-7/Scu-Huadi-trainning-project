package com.seventhgroup.collegesearchjob.controller;


import com.seventhgroup.collegesearchjob.service.PersonalInfoService;
import com.seventhgroup.collegesearchjob.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

import static com.seventhgroup.collegesearchjob.util.Util.setMapFromUserId;

@RestController
public class PersonalInfoController {
    @Autowired
    private PersonalInfoService personalInfoService;
    /*个人信息填写和信息修改*/
    @ResponseBody
    @GetMapping(value = "/PersonalInfo/modify/{id}/{picture}/{gender}/{realname}/{birthday}/{school}/{degree}/{major}/{majordate}/{experience}/{expectjob}/{expectcity}")
    public Map<String, Object> modifyInfo(@PathVariable(value = "id") String id,
                                          @PathVariable(value = "picture") String picture,
                                          @PathVariable(value = "gender") boolean gender,
                                          @PathVariable(value = "realname") String realname,
                                          @PathVariable(value = "birthday") String birthday,
                                          @PathVariable(value = "school") String school,
                                          @PathVariable(value = "degree") String degree,
                                          @PathVariable(value = "major") String major,
                                          @PathVariable(value = "majordate") String majordate,
                                          @PathVariable(value = "experience") String experience,
                                          @PathVariable(value = "expectjob") String expectjob,
                                          @PathVariable(value = "expectcity") String expectcity
    ){
        System.out.println("接收测试");
        Map<String, Object> map = new HashMap<>();
        String userId =  personalInfoService.modifyInfo(id,picture,gender,realname,birthday,school,degree,major,majordate,experience,expectjob,expectcity);
        setMapFromUserId(map, userId);
        map.put("msg", "个人信息填加成功");
        return map;
    }


}
