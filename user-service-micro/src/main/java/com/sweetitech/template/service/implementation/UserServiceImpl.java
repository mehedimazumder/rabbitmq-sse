package com.sweetitech.template.service.implementation;

import com.sweetitech.template.common.exception.UserNotFoundException;
import com.sweetitech.template.domain.User;
import com.sweetitech.template.repository.UserRepository;
import com.sweetitech.template.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User getById(long id) throws UserNotFoundException {
        Optional<User> user = userRepository.findById(id);

        if(user.isPresent())
            return user.get();
        else
            throw new UserNotFoundException("User doesn't exist with id: " + id);
    }
}