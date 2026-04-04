import { motion, AnimatePresence } from 'motion/react';

interface MobileMenuItem {
  label: string;
  onClick: () => void;
  isActive?: boolean;
  className?: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  items: MobileMenuItem[];
  ctaLabel: string;
  ctaOnClick: () => void;
  navBg?: string;
  borderColor?: string;
}

export default function MobileMenu({
  isOpen,
  items,
  ctaLabel,
  ctaOnClick,
  navBg = 'bg-[#0a0a0a]/95',
  borderColor = 'border-white/10',
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className={`md:hidden ${navBg} backdrop-blur-md border-t ${borderColor}`}
        >
          <div className="px-4 py-6 space-y-4">
            {items.map((item) => (
              <button
                key={item.label}
                onClick={item.onClick}
                className={
                  item.isActive
                    ? 'block w-full text-left text-white bg-white/20 py-3 px-4 rounded-lg'
                    : item.className
                      ? `block w-full text-left ${item.className} py-3 px-4 rounded-lg hover:bg-white/10 transition-all`
                      : 'block w-full text-left text-white/80 hover:text-white py-3 px-4 rounded-lg hover:bg-white/10 transition-all'
                }
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={ctaOnClick}
              className="block w-full bg-[#F4C542] text-[#0a0a0a] py-3 px-4 rounded-lg hover:bg-[#F4C542]/90 transition-all mt-4 font-medium"
            >
              {ctaLabel}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
