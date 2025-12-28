import { Search, Filter, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import type { PlayerSearchParams } from '@/services/api';

interface SearchFiltersProps {
  filters: PlayerSearchParams;
  onFilterChange: (filters: PlayerSearchParams) => void;
  onSearch: () => void;
  onClear: () => void;
}

/**
 * SearchFilters Component
 * Provides search and filter controls for the players list
 */
const SearchFilters = ({ filters, onFilterChange, onSearch, onClear }: SearchFiltersProps) => {
  // Handle input changes
  const handleChange = (field: keyof PlayerSearchParams, value: string) => {
    onFilterChange({ ...filters, [field]: value });
  };

  // Handle Enter key press to trigger search
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  // Check if any filters are active
  const hasActiveFilters = Object.values(filters).some((value) => value && value.trim() !== '');

  

  return (
    <div className="w-full space-y-4">
      {/* Main Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search players by name..."
          value={filters.name || ''}
          onChange={(e) => handleChange('name', e.target.value)}
          onKeyPress={handleKeyPress}
          className="pl-12 h-14 text-base bg-card border-border"
        />
      </div>

      {/* Filter Row */}
      <div className="flex flex-wrap gap-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Filter className="w-4 h-4" />
          <span>Filters:</span>
        </div>

        {/* Team Filter */}
        <div className="flex-1 min-w-[150px]">
          <Input
            type="text"
            placeholder="Team"
            value={filters.team || ''}
            onChange={(e) => handleChange('team', e.target.value)}
            onKeyPress={handleKeyPress}
            className="h-10 bg-card border-border"
          />
        </div>

        {/* Position Filter */}
        <div className="flex-1 min-w-[150px]">
          <Input
            type="text"
            placeholder="Position"
            value={filters.position || ''}
            onChange={(e) => handleChange('position', e.target.value)}
            onKeyPress={handleKeyPress}
            className="h-10 bg-card border-border"
          />
        </div>

        {/* Nation Filter */}
        <div className="flex-1 min-w-[150px]">
          <Input
            type="text"
            placeholder="Nation"
            value={filters.nation || ''}
            onChange={(e) => handleChange('nation', e.target.value)}
            onKeyPress={handleKeyPress}
            className="h-10 bg-card border-border"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button onClick={onSearch} variant="accent" size="default">
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>

          {hasActiveFilters && (
            <Button onClick={onClear} variant="outline" size="default">
              <X className="w-4 h-4 mr-2" />
              Clear
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
