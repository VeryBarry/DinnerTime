package com.theironyard.entities;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

/**
 * Created by VeryBarry on 11/10/16.
 */
public class Restaurant {
    public enum Importance {
        LOW, LOWMEDIUM, MEDIUM, MEDIUMHIGH, HIGH;
    }

    @Id
    @GeneratedValue
    int id;

    @Column(nullable = false)
    String re;

    @Column(nullable = false)
    Importance level;

    @Column(nullable = false)
    boolean isDone;

    @ManyToOne
    User user;
}
