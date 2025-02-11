type SkillLevel = 'expert' | 'intermediate' | 'beginner';

interface SkillButtonProps {
  name: string;
  level: SkillLevel;
}

const SkillButton = ({ name, level }: SkillButtonProps) => {
  const getBackgroundColor = (level: SkillLevel) => {
    switch (level) {
      case 'expert':
        return 'bg-[#FFD7D7] hover:bg-[#FFB8B8] dark:bg-[#4A2F2F] dark:hover:bg-[#5A3F3F]';
      case 'intermediate':
        return 'bg-[#B8E6E1] hover:bg-[#95D8D2] dark:bg-[#2F4A47] dark:hover:bg-[#3F5A57]';
      case 'beginner':
        return 'bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700';
      default:
        return 'bg-white dark:bg-gray-800';
    }
  };

  return (
    <button
      className={`${getBackgroundColor(level)} px-4 py-2 rounded-full text-sm 
      border border-gray-200 dark:border-gray-700 shadow-sm transition-colors duration-200
      text-gray-700 dark:text-gray-300`}
    >
      {name}
    </button>
  );
};

export default SkillButton; 