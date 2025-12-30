import { motion } from 'framer-motion';
import {
  User,
  Shield,
  Flag,
  Clock,
  Activity,
} from 'lucide-react';
import type { Player } from '@/services/api';

interface PlayerCardProps {
  player: Player;
  index: number;
}

const PlayerCard = ({ player, index }: PlayerCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      whileHover={{ y: -6 }}
      className="group rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-all"
    >
      {/* Header */}
      <div className="p-5 flex gap-4">
        <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center">
          <User className="w-7 h-7 text-muted-foreground" />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold truncate">
            {player.playerName}
          </h3>
          <p className="text-sm text-muted-foreground">
            {player.position} · {player.age} yrs
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="px-5 pb-5 space-y-3 text-sm">
        {/* Team & Nation */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-muted-foreground" />
            <span>{player.teamName}</span>
          </div>
          <div className="flex items-center gap-2">
            <Flag className="w-4 h-4 text-muted-foreground" />
            <span>{player.nation}</span>
          </div>
        </div>

        {/* Usage */}
        <div className="grid grid-cols-3 gap-2 text-center pt-3 border-t border-border">
          <div>
            <span className="block font-semibold">
              {player.matchesPlayed}
            </span>
            <span className="text-xs text-muted-foreground">Matches</span>
          </div>
          <div>
            <span className="block font-semibold">
              {player.starts}
            </span>
            <span className="text-xs text-muted-foreground">Starts</span>
          </div>
          <div>
            <span className="block font-semibold">
              {Math.round(player.minutesPlayed ?? 0)}
            </span>
            <span className="text-xs text-muted-foreground">Minutes</span>
          </div>
        </div>

        {/* Impact */}
        <div className="grid grid-cols-3 gap-2 text-center pt-3 border-t border-border">
          <div>
            <span className="block text-lg font-bold text-gradient text-gray-600">
              {player.goals}
            </span>
            <span className="text-xs text-muted-foreground">Goals</span>
          </div>
          <div>
            <span className="block text-lg font-bold text-gradient text-gray-600">
              {player.assists}
            </span>
            <span className="text-xs text-muted-foreground">Assists</span>
          </div>
          <div>
            <span className="block text-lg font-bold text-gradient text-gray-600 ">
              {player.expectedGoals}
            </span>
            <span className="text-xs text-muted-foreground">xG</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PlayerCard;
