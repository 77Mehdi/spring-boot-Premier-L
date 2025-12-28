import { motion } from 'framer-motion';
import { Users, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EmptyStateProps {
  hasFilters: boolean;
  onClearFilters?: () => void;
}

/**
 * EmptyState Component
 * Displays when no players are found
 */
const EmptyState = ({ hasFilters, onClearFilters }: EmptyStateProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-20 text-center"
    >
      {/* Icon */}
      <motion.div
        className="w-20 h-20 rounded-2xl bg-secondary flex items-center justify-center mb-6"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {hasFilters ? (
          <Search className="w-10 h-10 text-muted-foreground" />
        ) : (
          <Users className="w-10 h-10 text-muted-foreground" />
        )}
      </motion.div>

      {/* Message */}
      <h3 className="text-xl font-bold text-foreground mb-2">
        {hasFilters ? 'No players found' : 'No players available'}
      </h3>
      <p className="text-muted-foreground max-w-md mb-6">
        {hasFilters
          ? "We couldn't find any players matching your search criteria. Try adjusting your filters or search terms."
          : 'There are no players in the database yet. Make sure your backend server is running.'}
      </p>

      {/* Clear Filters Button */}
      {hasFilters && onClearFilters && (
        <Button onClick={onClearFilters} variant="accent">
          Clear all filters
        </Button>
      )}
    </motion.div>
  );
};

export default EmptyState;
