/**
 * API Service for Premier League Players
 * Handles all HTTP requests to the Spring Boot backend
 */

import axios from 'axios';


// Create axios instance with default configuration
const apiClient = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
  // Enable CORS credentials if needed
  withCredentials: false,
});

// Player interface matching backend model
export interface Player {
  id?: number;
  playerName: string;
  teamName: string;
  position: string;
  nation: string;
  age?: number;
  matchesPlayed?: number;
  starts?: number;
  minutesPlayed?: number;
  goals?: number;
  assists?: number;
  penaltyGoals?: number;
  yellowCards?: number;
  redCards?: number;
  expectedGoals?: number;
  expectedAssists?: number;
}

// Search parameters interface
export interface PlayerSearchParams {
  name?: string;
  team?: string;
  position?: string;
  nation?: string;
}

/**
 * Fetch all players from the API
 * @returns Promise with array of players
 */
export const getAllPlayers = async (): Promise<Player[]> => {
  const response = await apiClient.get('');
  return response.data;
};

/**
 * Search players with optional filters
 * @param params - Search parameters (name, team, position, nation)
 * @returns Promise with filtered array of players
 */
export const searchPlayers = async (params: PlayerSearchParams): Promise<Player[]> => {
  const queryParams = new URLSearchParams();

  if (params.name) queryParams.append('name', params.name);
  if (params.team) queryParams.append('team', params.team);
  if (params.position) queryParams.append('position', params.position);
  if (params.nation) queryParams.append('nation', params.nation);

  const queryString = queryParams.toString();
 const url = queryString ? `/api/player?${queryString}` : '/api/player'; // keep ? only if there are params

  // ⚡ Instead of apiClient.get(''), do:
  return (await apiClient.get(url)).data;
  //return [] ;
};




/**
 * Add a new player
 * @param player - Player data to add
 * @returns Promise with created player
 */
export const addPlayer = async (player: Omit<Player, 'id'>): Promise<Player> => {
  const response = await apiClient.post('/player', player);
  return response.data;
};

/**
 * Update an existing player
 * @param player - Player data to update
 * @returns Promise with updated player
 */
export const updatePlayer = async (player: Player): Promise<Player> => {
  if (!player.id) throw new Error('Player ID is required to update');
  const response = await apiClient.put(`/api/player/${player.id}`, player);
  return response.data;
};

/**
 * Delete a player by name
 * @param playerName - Name of the player to delete
 * @returns Promise with deletion result
 */
export const deletePlayer = async (playerName: string): Promise<void> => {
  await apiClient.delete(`/player/${encodeURIComponent(playerName)}`);
};

// Export the axios instance for custom requests
export default apiClient;
