import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

interface BreadcrumbProps {
  items: Array<{
    label: string;
    onClick?: () => void;
    isActive?: boolean;
  }>;
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="flex items-center gap-2 text-sm"
    >
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <ChevronRight className="w-4 h-4 text-white/40" />
          )}
          {item.onClick ? (
            <button
              onClick={item.onClick}
              className={`transition-colors ${
                item.isActive 
                  ? 'text-white font-medium' 
                  : 'text-white/60 hover:text-white/80'
              }`}
            >
              {item.label}
            </button>
          ) : (
            <span
              className={`${
                item.isActive 
                  ? 'text-white font-medium' 
                  : 'text-white/60'
              }`}
            >
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </motion.nav>
  );
}
