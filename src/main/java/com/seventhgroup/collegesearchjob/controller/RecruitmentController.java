package com.seventhgroup.collegesearchjob.controller;


import com.seventhgroup.collegesearchjob.entity.RecruitmentEntity;
import com.seventhgroup.collegesearchjob.service.RecruitmentService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@Api(description = "应聘会接口")
public class RecruitmentController {

    @Autowired
    private RecruitmentService recruitmentService;
    /*首页搜索工作*/
    @ResponseBody
    @GetMapping(value = "/recruit/searchJob/{job}")
    public Map<String, Object> searchJob(@PathVariable(value = "job") String job) {
        Map<String, Object> map = new HashMap<>();
        List<RecruitmentEntity> recruitmentEntities = recruitmentService.searchJob(job);
        map.put("msg", "搜索成功");
        map.put("data",recruitmentEntities );
        return map;
    }








}
