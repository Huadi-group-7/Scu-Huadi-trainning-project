package com.seventhgroup.collegesearchjob.util;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.util.Date;
import java.util.Map;
import java.util.Random;

public class Util {
    private static Random random = new Random(getUniqueId().hashCode());

    /*获得唯一id的函数*/
    public static String getUniqueId() {

        return Util.getMD5(String.valueOf(new Date().getTime())).substring(0, 20);

    }

    public static String getMD5(String str) {

        try {

            // 生成一个MD5加密计算摘要

            MessageDigest md = MessageDigest.getInstance("MD5");

            // 计算md5函数

            md.update(str.getBytes());



            return new BigInteger(1, md.digest()).toString(16);

        } catch (Exception e) {

            // 出现异常返回时间戳

            return String.valueOf(new Date().getTime());

        }

    }

    public static void setMapFromUserId(Map<String, Object> map, String userId) {
        if (userId == null) {
            map.put("code", 1);
            map.put("userId", null);
        }
        else {
            map.put("code", 0);
            map.put("userId", userId);
        }


    }

}
