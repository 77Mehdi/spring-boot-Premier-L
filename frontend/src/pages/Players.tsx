import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Users, AlertCircle } from 'lucide-react';
import { searchPlayers, type Player, type PlayerSearchParams } from '@/services/api';
import PlayerCard from '@/components/PlayerCard';
import SearchFilters from '@/components/SearchFilters';
import LoadingSpinner from '@/components/LoadingSpinner';
import EmptyState from '@/components/EmptyState';

const Players = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [filters, setFilters] = useState<PlayerSearchParams>({
    name: '',
    team: '',
    position: '',
    nation: '',
  });

  const fetchPlayers = useCallback(
    async (searchParams?: PlayerSearchParams) => {
      setIsLoading(true);
      setError(null);

      try {
        const data = await searchPlayers(searchParams ?? filters);
        setPlayers(data);
      } catch (err) {
        console.error('Failed to fetch players:', err);
        setError('Unable to connect to the backend API.');
        //setPlayers(getDemoPlayers());
      } finally {
        setIsLoading(false);
      }
    },
    [filters]
  );

  useEffect(() => {
    fetchPlayers({});
  }, []);

  const handleSearch = () => {
    fetchPlayers(filters);
  };

  const handleClearFilters = () => {
    const emptyFilters = { name: '', team: '', position: '', nation: '' };
    setFilters(emptyFilters);
    fetchPlayers(emptyFilters);
  };

  const hasActiveFilters = Object.values(filters).some(
    (value) => value && value.trim() !== ''
  );

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4">
            <Users className="w-4 h-4" />
            Player Database
          </div>

          <h1 className="text-4xl font-bold mb-4">
            Premier League <span className="text-gradient">Players</span>
          </h1>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Search players by name, team, position, or nationality.
          </p>
        </motion.div>

        {/* Filters */}
        <SearchFilters
          filters={filters}
          onFilterChange={setFilters}
          onSearch={handleSearch}
          onClear={handleClearFilters}
        />

        {/* Error */}
        {error && (
          <div className="mt-6 p-4 rounded-xl bg-destructive/10 border border-destructive/20 flex gap-3">
            <AlertCircle className="w-5 h-5 text-destructive" />
            <p className="text-sm text-muted-foreground">{error}</p>
          </div>
        )}

        {/* Result count */}
        {!isLoading && players.length > 0 && (
          <p className="text-sm text-muted-foreground mt-6">
            Showing <strong>{players.length}</strong> player
            {players.length !== 1 && 's'}
            {hasActiveFilters && ' matching your filters'}
          </p>
        )}

        {/* Content */}
        {isLoading ? (
          <LoadingSpinner />
        ) : players.length === 0 ? (
          <EmptyState hasFilters={hasActiveFilters} onClearFilters={handleClearFilters} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
            {players.map((player, index) => (
              <PlayerCard
                key={player.id ?? `${player.playerName}-${index}`}
                player={player}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Players;
