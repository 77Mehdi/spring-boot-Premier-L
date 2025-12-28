import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Users, AlertCircle } from 'lucide-react';
import { searchPlayers, type Player, type PlayerSearchParams } from '@/services/api';
import PlayerCard from '@/components/PlayerCard';
import SearchFilters from '@/components/SearchFilters';
import LoadingSpinner from '@/components/LoadingSpinner';
import EmptyState from '@/components/EmptyState';

/**
 * Players Page Component
 * Displays searchable/filterable list of Premier League players
 */
const Players = () => {
  // State management
  const [players, setPlayers] = useState<Player[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<PlayerSearchParams>({
    name: '',
    team: '',
    position: '',
    nation: '',
  });

  /**
   * Fetch players from the API
   */
  const fetchPlayers = useCallback(async (searchParams?: PlayerSearchParams) => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await searchPlayers(searchParams || filters);
      setPlayers(data);
    } catch (err) {
      console.error('Failed to fetch players:', err);
      setError(
        'Unable to connect to the server. Please ensure the backend API is running at http://localhost:8080'
      );
      // Set demo data for UI preview
      setPlayers(getDemoPlayers());
    } finally {
      setIsLoading(false);
    }
  }, [filters]);

  // Initial data fetch
  useEffect(() => {
    fetchPlayers({});
  }, []);

  /**
   * Handle search action
   */
  const handleSearch = () => {
    fetchPlayers(filters);
  };

  /**
   * Handle clear filters action
   */
  const handleClearFilters = () => {
    const emptyFilters = { name: '', team: '', position: '', nation: '' };
    setFilters(emptyFilters);
    fetchPlayers(emptyFilters);
  };

  // Check if any filters are active
  const hasActiveFilters = Object.values(filters).some(
    (value) => value && value.trim() !== ''
  );

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container px-4">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4">
            <Users className="w-4 h-4" />
            Player Database
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Premier League <span className="text-gradient">Players</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Search and explore all players from the Premier League. 
            Filter by name, team, position, or nationality.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-10"
        >
          <SearchFilters
            filters={filters}
            onFilterChange={setFilters}
            onSearch={handleSearch}
            onClear={handleClearFilters}
          />
        </motion.div>

        {/* Error Message */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-4 rounded-xl bg-destructive/10 border border-destructive/20 flex items-start gap-3"
          >
            <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-destructive">Connection Error</p>
              <p className="text-sm text-muted-foreground mt-1">{error}</p>
              <p className="text-sm text-muted-foreground mt-2">
                Showing demo data for preview purposes.
              </p>
            </div>
          </motion.div>
        )}

        {/* Results Count */}
        {!isLoading && players.length > 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-muted-foreground mb-6"
          >
            Showing <span className="text-foreground font-medium">{players.length}</span> player
            {players.length !== 1 ? 's' : ''}
            {hasActiveFilters && ' matching your filters'}
          </motion.p>
        )}

        {/* Content Area */}
        {isLoading ? (
          <LoadingSpinner />
        ) : players.length === 0 ? (
          <EmptyState
            hasFilters={hasActiveFilters}
            onClearFilters={handleClearFilters}
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {players.map((player, index) => (
              <PlayerCard key={player.id || player.name} player={player} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

/**
 * Demo players for UI preview when backend is not available
 */
const getDemoPlayers = (): Player[] => [
  {
    id: 1,
    name: 'Erling Haaland',
    team: 'Manchester City',
    position: 'Forward',
    nation: 'Norway',
    goals: 27,
    assists: 5,
    appearances: 31,
  },
  {
    id: 2,
    name: 'Mohamed Salah',
    team: 'Liverpool',
    position: 'Forward',
    nation: 'Egypt',
    goals: 18,
    assists: 10,
    appearances: 32,
  },
  {
    id: 3,
    name: 'Kevin De Bruyne',
    team: 'Manchester City',
    position: 'Midfielder',
    nation: 'Belgium',
    goals: 7,
    assists: 16,
    appearances: 28,
  },
  {
    id: 4,
    name: 'Bukayo Saka',
    team: 'Arsenal',
    position: 'Forward',
    nation: 'England',
    goals: 14,
    assists: 11,
    appearances: 35,
  },
  {
    id: 5,
    name: 'Bruno Fernandes',
    team: 'Manchester United',
    position: 'Midfielder',
    nation: 'Portugal',
    goals: 8,
    assists: 8,
    appearances: 34,
  },
  {
    id: 6,
    name: 'Cole Palmer',
    team: 'Chelsea',
    position: 'Midfielder',
    nation: 'England',
    goals: 22,
    assists: 11,
    appearances: 34,
  },
  {
    id: 7,
    name: 'Son Heung-min',
    team: 'Tottenham',
    position: 'Forward',
    nation: 'South Korea',
    goals: 17,
    assists: 10,
    appearances: 35,
  },
  {
    id: 8,
    name: 'Virgil van Dijk',
    team: 'Liverpool',
    position: 'Defender',
    nation: 'Netherlands',
    goals: 2,
    assists: 1,
    appearances: 33,
  },
];

export default Players;
