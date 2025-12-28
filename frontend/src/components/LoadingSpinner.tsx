import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  message?: string;
}

/**
 * LoadingSpinner Component
 * Animated loading indicator with optional message
 */
const LoadingSpinner = ({ message = 'Loading players...' }: LoadingSpinnerProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      {/* Animated spinner */}
      <div className="relative w-16 h-16">
        {/* Outer ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-border"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
        
        {/* Inner spinning arc */}
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-transparent border-t-accent"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
        
        {/* Center dot */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-3 h-3 rounded-full bg-accent" />
        </motion.div>
      </div>

      {/* Loading message */}
      <motion.p
        className="mt-6 text-muted-foreground font-medium"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        {message}
      </motion.p>
    </div>
  );
};

export default LoadingSpinner;
