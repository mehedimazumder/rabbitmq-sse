package com.sweetitech.template.service;

import com.sweetitech.template.common.exception.UserNotFoundException;
import com.sweetitech.template.domain.User;
import org.springframework.data.domain.Page;

import java.util.List;

public interface UserService {

    User getById(long id) throws UserNotFoundException;
}