package com.sweetitech.template.controller;

import com.sweetitech.template.domain.User;
import com.sweetitech.template.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user-info")
public class UserController  {

    @Autowired
    private final UserService userService;


    public UserController(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping(value = "/{userId}", method = RequestMethod.GET)
    @CrossOrigin(origins = "*")
    public User getUserByUserId(@PathVariable long userId) throws Exception {
        User user = userService.getById(userId);

        return user;
    }

}
