package com.theironyard.controller;


import com.theironyard.services.RestaurantRepo;
import com.theironyard.services.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by VeryBarry on 11/10/16.
 */
@RestController
public class DinnerTimeController {
    @Autowired
    UserRepo users;

    @Autowired
    RestaurantRepo restaurant;



}
