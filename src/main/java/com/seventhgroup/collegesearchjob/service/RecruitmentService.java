package com.seventhgroup.collegesearchjob.service;

import com.seventhgroup.collegesearchjob.dao.RecruitmentDao;
import com.seventhgroup.collegesearchjob.entity.RecruitmentEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecruitmentService {

    @Autowired
    private RecruitmentDao recruitmentDao;
    /*首页搜索招聘*/
    public List<RecruitmentEntity> searchJob(String job){
        List<RecruitmentEntity> check = recruitmentDao.findByJob(job);

        return check;

    }
}
