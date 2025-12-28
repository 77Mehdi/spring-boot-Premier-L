import { motion } from 'framer-motion';
import { User, MapPin, Shield, Flag } from 'lucide-react';
import type { Player } from '@/services/api';

interface PlayerCardProps {
  player: Player;
  index: number;
}

/**
 * PlayerCard Component
 * Displays individual player information in a styled card
 */
const PlayerCard = ({ player, index }: PlayerCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative gradient-card rounded-2xl border border-border overflow-hidden card-shadow hover:card-hover-shadow transition-all duration-300"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent" />
      </div>

      {/* Card Header with Player Avatar */}
      <div className="relative p-6 pb-4">
        <div className="flex items-start gap-4">
          {/* Player Avatar */}
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-secondary to-muted flex items-center justify-center flex-shrink-0 group-hover:from-accent/20 group-hover:to-accent/5 transition-colors duration-300">
            {player.imageUrl ? (
              <img
                src={player.imageUrl}
                alt={player.name}
                className="w-full h-full object-cover rounded-xl"
              />
            ) : (
              <User className="w-8 h-8 text-muted-foreground group-hover:text-accent transition-colors duration-300" />
            )}
          </div>

          {/* Player Name and Position */}
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-foreground truncate group-hover:text-accent transition-colors duration-300">
              {player.name}
            </h3>
            <span className="inline-flex items-center gap-1.5 mt-1 px-2.5 py-0.5 rounded-full bg-accent/10 text-accent text-xs font-semibold">
              {player.position}
            </span>
          </div>
        </div>
      </div>

      {/* Card Body with Player Details */}
      <div className="px-6 pb-6 space-y-3">
        {/* Team */}
        <div className="flex items-center gap-3 text-sm">
          <Shield className="w-4 h-4 text-muted-foreground" />
          <span className="text-muted-foreground">Team:</span>
          <span className="font-medium text-foreground ml-auto truncate max-w-[120px]">
            {player.team}
          </span>
        </div>

        {/* Nation */}
        <div className="flex items-center gap-3 text-sm">
          <Flag className="w-4 h-4 text-muted-foreground" />
          <span className="text-muted-foreground">Nation:</span>
          <span className="font-medium text-foreground ml-auto truncate max-w-[120px]">
            {player.nation}
          </span>
        </div>

        {/* Stats Row (if available) */}
        {(player.goals !== undefined || player.assists !== undefined) && (
          <div className="pt-3 mt-3 border-t border-border flex items-center justify-around">
            {player.goals !== undefined && (
              <div className="text-center">
                <span className="block text-xl font-bold text-gradient">{player.goals}</span>
                <span className="text-xs text-muted-foreground">Goals</span>
              </div>
            )}
            {player.assists !== undefined && (
              <div className="text-center">
                <span className="block text-xl font-bold text-gradient">{player.assists}</span>
                <span className="text-xs text-muted-foreground">Assists</span>
              </div>
            )}
            {player.appearances !== undefined && (
              <div className="text-center">
                <span className="block text-xl font-bold text-gradient">{player.appearances}</span>
                <span className="text-xs text-muted-foreground">Apps</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};

export default PlayerCard;
