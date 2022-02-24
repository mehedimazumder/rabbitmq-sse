package com.sweetitech.template.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;

@Entity
@Table(name = "users")
public class User extends BaseEntity {

    @Column(columnDefinition = "TEXT")
    private String name;

    private String deviceId;

    public User() {
    }

    public User(String name, String deviceId) {
        this.name = name;
        this.deviceId = deviceId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDeviceId() {
        return deviceId;
    }

    public void setDeviceId(String deviceId) {
        this.deviceId = deviceId;
    }

    @Override
    public String toString() {
        return "User{" +
                "name='" + name + '\'' +
                ", deviceId='" + deviceId + '\'' +
                '}';
    }
}