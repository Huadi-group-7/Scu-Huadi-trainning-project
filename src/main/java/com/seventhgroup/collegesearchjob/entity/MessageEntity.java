package com.seventhgroup.collegesearchjob.entity;


import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "message")
@NoArgsConstructor
public class MessageEntity {
    @Id
    private String message_id;
    private String message_sender_id;
    private String messge_receiver_id;
    private String message_content;

    public MessageEntity(String message_id, String message_sender_id, String messge_receiver_id, String message_content) {
        this.message_id = message_id;
        this.message_sender_id = message_sender_id;
        this.messge_receiver_id = messge_receiver_id;
        this.message_content = message_content;
    }

    public String getMessage_id() {
        return message_id;
    }

    public void setMessage_id(String message_id) {
        this.message_id = message_id;
    }

    public String getMessage_sender_id() {
        return message_sender_id;
    }

    public void setMessage_sender_id(String message_sender_id) {
        this.message_sender_id = message_sender_id;
    }

    public String getMessge_receiver_id() {
        return messge_receiver_id;
    }

    public void setMessge_receiver_id(String messge_receiver_id) {
        this.messge_receiver_id = messge_receiver_id;
    }

    public String getMessage_content() {
        return message_content;
    }

    public void setMessage_content(String message_content) {
        this.message_content = message_content;
    }
}
