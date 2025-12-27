package com.pl.premier_zone.player;


import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
public class PlayerService {

    private final PlayerRepository playerRepository ;

    @Autowired
    public PlayerService( PlayerRepository playerRepository){

        this.playerRepository = playerRepository;
    }


    public List<Player>getPlayers(){
        return playerRepository.findAll();
    }

    public List<Player> getPlayersFromTeam(String teamName){

        return playerRepository.findAll().stream()
                .filter(player -> teamName.equals(player.getTeamName()))
                .collect(Collectors.toList());
    }

    public List<Player> getPlayersByName(String searchText){
        return playerRepository.findAll().stream()
                .filter(player -> player.getPlayerName().toLowerCase().contains(searchText.toLowerCase()))
                .collect(Collectors.toList());
    }

    public List<Player> getPlayersByPos(String searchText){
        return playerRepository.findAll().stream()
                .filter(player -> player.getPosition().toLowerCase().contains(searchText.toLowerCase()))
                .collect(Collectors.toList());
    }

    public List<Player> getPlayersByNation(String searchText){
        return playerRepository.findAll().stream()
                .filter(player -> player.getNation().toLowerCase().contains(searchText.toLowerCase()))
                .collect(Collectors.toList());
    }

    public List<Player> getPlayersByTeamAndPosition(String team ,String position){
        return playerRepository.findAll().stream()
                .filter(player -> team.equals(player.getTeamName()) && position.equals(player.getPosition()))
                .collect(Collectors.toList());
    }

    public Player addPlayer(Player player){
        playerRepository.save(player);
        return player;
    }

    public Player updatePlayer(Player updatePlayer){
        Optional<Player> existingPlayer = playerRepository.findByPlayerName(updatePlayer.getPlayerName());

        if(existingPlayer.isPresent()){
            Player playerToUpdate = existingPlayer.get();
            playerToUpdate.setPlayerName(updatePlayer.getPlayerName());
            playerToUpdate.setTeamName(updatePlayer.getTeamName());
            playerToUpdate.setPosition(updatePlayer.getPosition());
            playerToUpdate.setNation(updatePlayer.getNation());

            playerRepository.save(playerToUpdate);
            return playerToUpdate;
        }
        return null;
    }


    @Transactional
    public void deletePlayer(String playerName){
        playerRepository.deleteByPlayerName(playerName);
    }




}
