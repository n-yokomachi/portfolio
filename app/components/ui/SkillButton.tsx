type SkillLevel = 'expert' | 'intermediate' | 'beginner';

interface SkillButtonProps {
  name: string;
  level: SkillLevel;
}

const SkillButton = ({ name, level }: SkillButtonProps) => {
  const getStyles = (level: SkillLevel) => {
    const baseClasses = 'px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105';
    const borderClasses = 'border border-opacity-20';
    
    switch (level) {
      case 'expert':
        return `${baseClasses} ${borderClasses} 
          bg-gradient-to-r from-[#FFE4E4] to-[#FFD7D7] hover:from-[#FFD7D7] hover:to-[#FFC8C8]
          dark:from-[#4A2F2F] dark:to-[#5A3F3F] dark:hover:from-[#5A3F3F] dark:hover:to-[#6A4F4F]
          text-[#8B4343] dark:text-[#FFB8B8] border-[#8B4343] dark:border-[#FFB8B8]`;
      case 'intermediate':
        return `${baseClasses} ${borderClasses}
          bg-gradient-to-r from-[#E4F5F3] to-[#B8E6E1] hover:from-[#B8E6E1] hover:to-[#95D8D2]
          dark:from-[#2F4A47] dark:to-[#3F5A57] dark:hover:from-[#3F5A57] dark:hover:to-[#4F6A67]
          text-[#437B74] dark:text-[#95D8D2] border-[#437B74] dark:border-[#95D8D2]`;
      case 'beginner':
        return `${baseClasses} ${borderClasses}
          bg-gradient-to-r from-[#F8F9FA] to-[#E9ECEF] hover:from-[#E9ECEF] hover:to-[#DEE2E6]
          dark:from-gray-800 dark:to-gray-700 dark:hover:from-gray-700 dark:hover:to-gray-600
          text-gray-600 dark:text-gray-300 border-gray-400 dark:border-gray-500`;
      default:
        return baseClasses;
    }
  };

  return (
    <button className={getStyles(level)}>
      {name}
    </button>
  );
};

export default SkillButton;