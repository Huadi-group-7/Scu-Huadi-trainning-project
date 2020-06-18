package com.seventhgroup.collegesearchjob.controller;


import com.seventhgroup.collegesearchjob.entity.CommentsEntity;
import com.seventhgroup.collegesearchjob.service.CommentsService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static com.seventhgroup.collegesearchjob.util.Util.getUniqueId;
import static com.seventhgroup.collegesearchjob.util.Util.setMapFromUserId;

@RestController
@Api(description = "评论接口")
public class CommentsController {
    @Autowired
    private CommentsService commentsService;
    /*获得某个招聘的评论*/
    @ResponseBody
    @GetMapping(value = "/comment/getCommment/{recruitment_id}")
    public Map<String, Object> getCommment(@PathVariable(value = "recruitment_id") String recruitment_id){
        Map<String, Object> map = new HashMap<>();
        List<CommentsEntity> commentsEntityList = commentsService.getComment(recruitment_id);
        map.put("msg", "获得招聘评论");
        map.put("data",commentsEntityList);
        return map;

    }

    /*新建某个招聘的评论*/
    @ResponseBody
    @GetMapping(value = "/comment/releaseCommment/{user_id}/{company_id}/{recruitment_id}/{comment_content}")
    public Map<String, Object> releaseCommment(@PathVariable(value = "user_id") String user_id,
            @PathVariable(value = "company_id") String company_id,
            @PathVariable(value = "recruitment_id") String recruitment_id,
            @PathVariable(value = "comment_content") String comment_content){
        String comment_id = getUniqueId();
        Map<String, Object> map = new HashMap<>();
        commentsService.releaseCommment(comment_id,user_id,company_id,recruitment_id,comment_content);
        map.put("user_id",user_id);
        return map;

    }

    /*查看个人所发布的评论*/
    @ResponseBody
    @GetMapping(value = "/comment/getPersonalComment/{user_id}")
    public Map<String, Object> getPersonalComment(@PathVariable(value = "user_id") String user_id){

        Map<String, Object> map = new HashMap<>();
        List<CommentsEntity> result = commentsService.getPersonalComment(user_id);
        map.put("data",result);
        return map;

    }

    /*删除个人所发的评论*/
    @ResponseBody
    @GetMapping(value = "/comment/delPersonalComment/{user_id}/{comment_id}")
    public Map<String, Object> delPersonalComment(@PathVariable(value = "user_id") String user_id,
                                                  @PathVariable(value = "comment_id") String comment_id){

        Map<String, Object> map = new HashMap<>();
        commentsService.delPersonalComment(user_id, comment_id);
        map.put("user_id",user_id);
        return map;

    }

}
