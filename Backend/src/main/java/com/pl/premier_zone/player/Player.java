package com.pl.premier_zone.player;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.*;

@Entity
@Table(name = "player_statistic")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "player_name", nullable = false)
    private String playerName;

    private String nation;
    private String position;
    private Integer age;

    @Column(name = "matches_played")
    private Integer matchesPlayed;

    private Integer starts;

    @Column(name = "minutes_played")
    private Double minutesPlayed;

    private Double goals;
    private Double assists;

    @Column(name = "penalty_goals")
    private Double penaltyGoals;

    @Column(name = "yellow_cards")
    private Double yellowCards;

    @Column(name = "red_cards")
    private Double redCards;

    @Column(name = "expected_goals")
    private Double expectedGoals;

    @Column(name = "expected_assists")
    private Double expectedAssists;

    @Column(name = "team_name")
    private String teamName;

    // ✅ Required by JPA
    public Player() {}

    // ✅ Optional constructor
    public Player(String playerName, String nation, String position, Integer age,
                  Integer matchesPlayed, Integer starts, Double minutesPlayed,
                  Double goals, Double assists, Double penaltyGoals,
                  Double yellowCards, Double redCards,
                  Double expectedGoals, Double expectedAssists,
                  String teamName) {
        this.playerName = playerName;
        this.nation = nation;
        this.position = position;
        this.age = age;
        this.matchesPlayed = matchesPlayed;
        this.starts = starts;
        this.minutesPlayed = minutesPlayed;
        this.goals = goals;
        this.assists = assists;
        this.penaltyGoals = penaltyGoals;
        this.yellowCards = yellowCards;
        this.redCards = redCards;
        this.expectedGoals = expectedGoals;
        this.expectedAssists = expectedAssists;
        this.teamName = teamName;
    }

    // ✅ Getters & Setters (you can auto-generate in IntelliJ)

    public Long getId() {
        return id;
    }

    public String getPlayerName() {
        return playerName;
    }

    public void setPlayerName(String playerName) {
        this.playerName = playerName;
    }

    public String getNation() {
        return nation;
    }

    public void setNation(String nation) {
        this.nation = nation;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public Integer getMatchesPlayed() {
        return matchesPlayed;
    }

    public void setMatchesPlayed(Integer matchesPlayed) {
        this.matchesPlayed = matchesPlayed;
    }

    public Integer getStarts() {
        return starts;
    }

    public void setStarts(Integer starts) {
        this.starts = starts;
    }

    public Double getMinutesPlayed() {
        return minutesPlayed;
    }

    public void setMinutesPlayed(Double minutesPlayed) {
        this.minutesPlayed = minutesPlayed;
    }

    public Double getGoals() {
        return goals;
    }

    public void setGoals(Double goals) {
        this.goals = goals;
    }

    public Double getAssists() {
        return assists;
    }

    public void setAssists(Double assists) {
        this.assists = assists;
    }

    public Double getPenaltyGoals() {
        return penaltyGoals;
    }

    public void setPenaltyGoals(Double penaltyGoals) {
        this.penaltyGoals = penaltyGoals;
    }

    public Double getYellowCards() {
        return yellowCards;
    }

    public void setYellowCards(Double yellowCards) {
        this.yellowCards = yellowCards;
    }

    public Double getRedCards() {
        return redCards;
    }

    public void setRedCards(Double redCards) {
        this.redCards = redCards;
    }

    public Double getExpectedGoals() {
        return expectedGoals;
    }

    public void setExpectedGoals(Double expectedGoals) {
        this.expectedGoals = expectedGoals;
    }

    public Double getExpectedAssists() {
        return expectedAssists;
    }

    public void setExpectedAssists(Double expectedAssists) {
        this.expectedAssists = expectedAssists;
    }

    public String getTeamName() {
        return teamName;
    }

    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }
}
