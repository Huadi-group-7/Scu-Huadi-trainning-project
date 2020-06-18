package com.seventhgroup.collegesearchjob.controller;


import com.seventhgroup.collegesearchjob.entity.CompanyEntity;
import com.seventhgroup.collegesearchjob.entity.RecruitmentEntity;
import com.seventhgroup.collegesearchjob.entity.User;
import com.seventhgroup.collegesearchjob.service.AdministratorService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static com.seventhgroup.collegesearchjob.util.Util.setMapFromUserId;

@RestController
@Api(description = "管理员接口")
public class AdministratorController {
    @Autowired
    AdministratorService administratorService;
    /*管理员登录*/
    @ResponseBody
    @GetMapping(value = "/admin/login/{admin_id}/{admin_password}")
    public Map<String, Object> login(@PathVariable(value = "admin_id") String admin_id,
                                     @PathVariable(value = "admin_password") String admin_password){
        Map<String, Object> map = new HashMap<>();


        String id = administratorService.login(admin_id, admin_password);
        System.out.println(id);
        setMapFromUserId(map, id);
        map.put("msg", "管理员登陆成功");
        /*根据map里的code来判断是否有这个管理员账号*/
        return map;

    }
    /*管理员页面得到所有的学生用户信息*/
    @ResponseBody
    @GetMapping(value = "/admin/getAllUsers")
    public Map<String, Object> getAllUsers(){
        Map<String, Object> map = new HashMap<>();


        List<User> users = administratorService.getAllUsers();
        map.put("msg", "返回学生用户成功");
        map.put("data", users);
        /*根据map里的code来判断是否有这个管理员账号*/
        return map;

    }

    /*在管理员的学生用户页面指定搜索某些学生用户的信息*/
    @ResponseBody
    @GetMapping(value = "/admin/getUserInfo/{keyword}")
    public Map<String, Object> getUserInfo(@PathVariable(value = "keyword") String keyword){
        Map<String, Object> map = new HashMap<>();


        List<User> users = administratorService.getUserInfo(keyword);
        map.put("msg", "返回学生用户成功");
        map.put("data", users);
        /*根据map里的code来判断是否有这个管理员账号*/
        return map;

    }

    /*在管理员页面指定删除某一个学生用户的账户*/
    @ResponseBody
    @GetMapping(value = "/admin/deleteUser/{id}")
    public Map<String, Object> deleteUser(@PathVariable(value = "id") String id){
        Map<String, Object> map = new HashMap<>();
        administratorService.deleteUser(id);
        map.put("msg", "删除学生用户成功");
        return map;

    }

    /*管理员页面得到所有的企业用户信息*/
    @ResponseBody
    @GetMapping(value = "/admin/getAllCompanies")
    public Map<String, Object> getAllCompanies(){
        Map<String, Object> map = new HashMap<>();


        List<CompanyEntity> companyEntities = administratorService.getAllCompanies();
        map.put("msg", "返回企业用户成功");
        map.put("data", companyEntities);
        /*根据map里的code来判断是否有这个管理员账号*/
        return map;

    }

    /*管理员页面搜索某些特定的企业用户信息*/
    @ResponseBody
    @GetMapping(value = "/admin/getCompanyInfo/{keyword}")
    public Map<String, Object> getCompanyInfo(@PathVariable(value = "keyword") String keyword){
        Map<String, Object> map = new HashMap<>();


        List<CompanyEntity> companyEntities = administratorService.getCompanyInfo(keyword);
        map.put("msg", "返回企业用户成功");
        map.put("data", companyEntities);
        /*根据map里的code来判断是否有这个管理员账号*/
        return map;

    }



    /*管理员删除某个企业用户的信息*/
    @ResponseBody
    @GetMapping(value = "/admin/deleteCompany/{company_id}")
    public Map<String, Object> deleteCompany(@PathVariable(value = "company_id") String company_id){
        Map<String, Object> map = new HashMap<>();


        administratorService.deleteCompany(company_id);
        map.put("msg", "删除企业用户成功");
        /*根据map里的code来判断是否有这个管理员账号*/
        return map;

    }

    /*管理员得到所有的招聘信息*/
    @ResponseBody
    @GetMapping(value = "/admin/getAllRecruits")
    public Map<String, Object> getAllRecruits(){
        Map<String, Object> map = new HashMap<>();


        List<RecruitmentEntity> recruitmentEntities = administratorService.getAllRecruits();
        map.put("msg", "返回招聘信详情");
        map.put("data", recruitmentEntities);
        /*根据map里的code来判断是否有这个管理员账号*/
        return map;

    }
    /*管理员模糊搜索某些招聘*/

    @ResponseBody
    @GetMapping(value = "/admin/getRecruitInfo/{keword}")
    public Map<String, Object> getRecruitInfo(@PathVariable(value = "keword") String keword){
        Map<String, Object> map = new HashMap<>();

        List<RecruitmentEntity> recruitmentEntities = administratorService.getRecruitInfo(keword);
        map.put("msg", "返回招聘信详情");
        map.put("data", recruitmentEntities);
        /*根据map里的code来判断是否有这个管理员账号*/
        return map;

    }
    /*删除某一个具体的招聘*/
    @ResponseBody
    @GetMapping(value = "/admin/deleteRecruitment/{recruitment_id}")
    public Map<String, Object> deleteRecruitment(@PathVariable(value = "recruitment_id") String recruitment_id){
        Map<String, Object> map = new HashMap<>();
        administratorService.deleteRecruitment(recruitment_id);
        map.put("msg", "删除企业用户成功");
        /*根据map里的code来判断是否有这个管理员账号*/
        return map;

    }


}
