package com.sweetitech.template.service;

import com.sweetitech.template.domain.User;
import com.sweetitech.template.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.Iterator;
import java.util.List;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    private final UserRepository userRepository;

    public DataLoader(UserRepository userRepository) {
        this.userRepository = userRepository;
    }



    @Override
    public void run(ApplicationArguments args) {
        List<User> currentUsers = userRepository.findAll();

        if(currentUsers.size() == 0){
            List<User> users = Arrays.asList(new User("mehedi", "mob-101"), new User("refat", "mob-102"));
            userRepository.saveAll(users);
        }
    }
}