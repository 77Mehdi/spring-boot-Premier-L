package player;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Column;
import jakarta.persistence.Id;

@Entity
@Table(name="player_statistic")
public class Player {

    @Id
    @Column(name="player_name")
    private String playerName;

    @Column(name="nation")
    private String nation;

    @Column(name="position")
    private String position;

    @Column(name="age")
    private Integer age;

    @Column(name="matches_played")
    private Integer matchesPlayed;

    @Column(name="starts")
    private Integer starts;

    @Column(name="minutes_played")
    private Double minutesPlayed;

    @Column(name="goals")
    private Double goals;

    @Column(name="assists")
    private Double assists;

    @Column(name="penalty_goals")
    private Double penaltyGoals;

    @Column(name="yellow_cards")
    private Double yellowCards;

    @Column(name="red_cards")
    private Double redCards;

    @Column(name="expected_goals")
    private Double expectedGoals;

    @Column(name="expected_assists")
    private Double expectedAssists;

    @Column(name="team_name")
    private String teamName;


}
