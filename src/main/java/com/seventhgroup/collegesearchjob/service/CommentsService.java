package com.seventhgroup.collegesearchjob.service;

import com.seventhgroup.collegesearchjob.dao.CommentsDao;
import com.seventhgroup.collegesearchjob.dao.RecruitmentDao;
import com.seventhgroup.collegesearchjob.entity.CommentsEntity;
import com.seventhgroup.collegesearchjob.entity.RecruitmentEntity;
import com.seventhgroup.collegesearchjob.entity.User;
import com.seventhgroup.collegesearchjob.util.Util;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentsService {
    @Autowired
    private CommentsDao commentsDao;
    /*获取评论*/
    public List<CommentsEntity> getComment(String recruitment_id) throws RuntimeException {

        List<CommentsEntity> check = commentsDao.findByID(recruitment_id);

        return check;
    }


    /*新建某个招聘的评论*/
    public void releaseCommment(String comment_id,String user_id,String company_id,String recruitment_id,String comment_content) throws RuntimeException {

        commentsDao.save(new CommentsEntity(comment_id,user_id,company_id,recruitment_id,comment_content));

        return;
    }

    /*查看个人所发布的评论*/
    public List<CommentsEntity> getPersonalComment(String user_id) throws RuntimeException{
        return commentsDao.findByUserId(user_id);
    }

    /*删除个人所发的某条评论*/
    public void delPersonalComment(String user_id, String comment_id) throws RuntimeException{
        commentsDao.delPersonalComment(user_id,comment_id);
        return;
    }

}
