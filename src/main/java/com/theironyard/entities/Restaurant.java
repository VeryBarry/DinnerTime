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

    @Column(nullable = false, unique = true)
    public String restaurantName;

    @Column(nullable = false)
    public int waitTime;

    @Column(nullable = false)
    public boolean barSeating;

    @Column(nullable = false)
    public String submitTime;

    @Column(nullable = false)
    public Rating rating;

    @ManyToOne
    User user;

    public Restaurant() {
    }

    public Restaurant(String restaurantName, int waitTime, boolean barSeating, String submitTime, Rating rating, User user) {
        this.restaurantName = restaurantName;
        this.waitTime = waitTime;
        this.barSeating = barSeating;
        this.submitTime = submitTime;
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

    public boolean isBarSeating() {
        return barSeating;
    }

    public void setBarSeating(boolean barSeating) {
        this.barSeating = barSeating;
    }

    public String getSubmitTime() {
        return submitTime;
    }

    public void setSubmitTime(String submitTime) {
        this.submitTime = submitTime;
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
