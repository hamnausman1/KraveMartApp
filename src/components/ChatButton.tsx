import Content from '../imports/Content';

interface ChatButtonProps {
  onClick: () => void;
}

export default function ChatButton({ onClick }: ChatButtonProps) {
  return (
    <button
      onClick={onClick}
      className="absolute inset-[77.88%_4.8%_13.73%_73.87%] z-50 hover:scale-105 transition-transform cursor-pointer border-none p-0 bg-transparent"
      aria-label="Open chat"
    >
      <Content />
    </button>
  );
}
