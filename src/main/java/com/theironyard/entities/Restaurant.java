package com.theironyard.entities;

import javax.persistence.*;

/**
 * Created by VeryBarry on 11/10/16.
 */
@Entity
@Table(name = "restaurants")
public class Restaurant {
    public enum Rating {
        ONE, TWO, THREE, FOUR, FIVE
    }

    @Id
    @GeneratedValue
    int id;

    @Column(nullable = false)
    public String restaurantName;

    @Column(nullable = false)
    public int waitTime;

    @Column(nullable = false)
    public String barSeating;


    @Column(nullable = false)
    public Rating rating;

    @ManyToOne
    User user;

    public Restaurant() {
    }

    public Restaurant(String restaurantName, int waitTime, String barSeating, Rating rating) {
        this.restaurantName = restaurantName;
        this.waitTime = waitTime;
        this.barSeating = barSeating;
        this.rating = rating;
    }

    public Restaurant(String restaurantName, int waitTime, String barSeating, Rating rating, User user) {
        this.restaurantName = restaurantName;
        this.waitTime = waitTime;
        this.barSeating = barSeating;
        this.rating = rating;
        this.user = user;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getRestaurantName() {
        return restaurantName;
    }

    public void setRestaurantName(String restaurantName) {
        this.restaurantName = restaurantName;
    }

    public int getWaitTime() {
        return waitTime;
    }

    public void setWaitTime(int waitTime) {
        this.waitTime = waitTime;
    }

    public String getBarSeating() {
        return barSeating;
    }

    public void setBarSeating(String barSeating) {
        this.barSeating = barSeating;
    }

    public Rating getRating() {
        return rating;
    }

    public void setRating(Rating rating) {
        this.rating = rating;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
