package com.theironyard.services;

import com.theironyard.entities.Restaurant;
import com.theironyard.entities.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by VeryBarry on 11/10/16.
 */
public interface RestaurantRepo extends CrudRepository<Restaurant, Integer> {
    List<Restaurant> findByUser(User user);
    //List<Restaurant> findByCategory(Restaurant.Rating rating);
}
