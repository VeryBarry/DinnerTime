package com.theironyard.controllers;

import com.theironyard.entities.Restaurant;
import com.theironyard.entities.User;
import com.theironyard.services.RestaurantRepo;
import com.theironyard.services.UserRepo;
import com.theironyard.utilities.PasswordStorage;
import org.h2.tools.Server;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import javax.servlet.http.HttpSession;
import java.sql.SQLException;

/**
 * Created by VeryBarry on 11/10/16.
 */
@RestController
public class DinnerTimeRestController {
    @Autowired
    UserRepo users;

    @Autowired
    RestaurantRepo restaurants;

    Server h2;

    @PostConstruct
    public void init() throws SQLException, PasswordStorage.CannotPerformOperationException {
        h2 = Server.createWebServer().start();

        if (restaurants.count() == 0) {
            User user = new User("Barton", PasswordStorage.createHash("1234"));
            users.save(user);

            restaurants.save(new Restaurant("Moes", 30, "false", Restaurant.Rating.ONE, user));
            restaurants.save(new Restaurant("Fish", 30, "false", Restaurant.Rating.TWO, user));
            restaurants.save(new Restaurant("Hall's Chophouse",30, "false",  Restaurant.Rating.THREE, user));
            restaurants.save(new Restaurant("Juanita Greenbergs", 30, "false", Restaurant.Rating.FOUR, user));
            restaurants.save(new Restaurant("82 Queen", 30, "false", Restaurant.Rating.FIVE, user));
            restaurants.save(new Restaurant("Husk", 30, "false", Restaurant.Rating.FOUR, user));
            restaurants.save(new Restaurant("Fig", 30, "false", Restaurant.Rating.THREE, user));
        }
    }

    @PreDestroy
    public void destroy() {
        h2.stop();
    }

    @RequestMapping(path = "/restaurants", method = RequestMethod.GET)
    public Iterable<Restaurant> getRestaurants(){
        return restaurants.findAll();
    }

    @RequestMapping(path = "/restaurants", method = RequestMethod.POST)
    public void addRestaurant(HttpSession session, @RequestBody Restaurant restaurant) throws Exception {
        String name = (String) session.getAttribute("name");
        User user = users.findFirstByName(name);
        Restaurant r = new Restaurant(restaurant.restaurantName, restaurant.waitTime, restaurant.barSeating, restaurant.rating, user);
        restaurants.save(r);
    }
    @RequestMapping(path = "/delete-restaurants", method = RequestMethod.POST)
    public ResponseEntity<Restaurant> deleteRestaurant(HttpSession session, @RequestBody Restaurant restaurant) {
        String name = (String) session.getAttribute("name");
        if (name == null) {
            return new ResponseEntity<Restaurant>(HttpStatus.FORBIDDEN);
        }
        int id = restaurant.getId();
        restaurants.delete(id);
        return new ResponseEntity<Restaurant>(HttpStatus.OK);
    }
    @RequestMapping(path = "/login", method = RequestMethod.POST)
    public ResponseEntity<User> postUser(HttpSession session, @RequestBody User user) throws PasswordStorage.InvalidHashException, PasswordStorage.CannotPerformOperationException {
        User userFromDb = users.findFirstByName(user.getName());
        if (userFromDb == null) {
            user.setPassword(PasswordStorage.createHash(user.getPassword()));
            users.save(user);
        } else if (!PasswordStorage.verifyPassword(user.getPassword(), userFromDb.getPassword())) {
            return new ResponseEntity<User>(HttpStatus.FORBIDDEN);
        }
        session.setAttribute("name", user.getName());
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }
    @RequestMapping(path = "/logout", method = RequestMethod.POST)
    public void logout(HttpSession session) {
        session.invalidate();
    }
}