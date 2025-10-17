'use client';

interface LabubuImageProps {
  type: string;
  alt: string;
  className?: string;
}

const imageColors: Record<string, { bg: string; accent: string }> = {
  pirate: { bg: 'bg-blue-200', accent: 'text-blue-600' },
  knight: { bg: 'bg-yellow-200', accent: 'text-yellow-600' },
  'black-crown': { bg: 'bg-gray-800', accent: 'text-yellow-400' },
  'pink-crown': { bg: 'bg-pink-200', accent: 'text-pink-600' },
  winter: { bg: 'bg-cyan-100', accent: 'text-cyan-600' },
  halloween: { bg: 'bg-orange-200', accent: 'text-orange-700' },
  artist: { bg: 'bg-purple-200', accent: 'text-purple-600' },
  vintage: { bg: 'bg-amber-100', accent: 'text-amber-700' },
  'blind-box': { bg: 'bg-gradient-to-br from-pink-200 to-blue-200', accent: 'text-gray-700' },
  rare: { bg: 'bg-gradient-to-br from-yellow-200 to-pink-200', accent: 'text-gray-700' },
};

export function LabubuImage({ type, alt, className = '' }: LabubuImageProps) {
  const colors = imageColors[type] || { bg: 'bg-gray-200', accent: 'text-gray-600' };

  return (
    <div
      className={`relative ${colors.bg} ${className} flex items-center justify-center overflow-hidden`}
      role="img"
      aria-label={alt}
    >
      {/* Stylized Labubu character representation */}
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        {/* Ears */}
        <div className="absolute top-[15%] flex gap-8">
          <div className={`w-8 h-12 ${colors.accent} opacity-70 rounded-full transform -rotate-12`} />
          <div className={`w-8 h-12 ${colors.accent} opacity-70 rounded-full transform rotate-12`} />
        </div>

        {/* Head */}
        <div className={`w-24 h-28 ${colors.accent} opacity-80 rounded-3xl relative`}>
          {/* Eyes */}
          <div className="absolute top-[35%] left-[25%] w-3 h-3 bg-white rounded-full">
            <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-black rounded-full" />
          </div>
          <div className="absolute top-[35%] right-[25%] w-3 h-3 bg-white rounded-full">
            <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-black rounded-full" />
          </div>

          {/* Nose/Mouth area */}
          <div className="absolute bottom-[30%] left-1/2 transform -translate-x-1/2 w-4 h-3 bg-white opacity-60 rounded-full" />

          {/* Teeth */}
          <div className="absolute bottom-[22%] left-[40%] w-2 h-3 bg-white rounded-sm" />
          <div className="absolute bottom-[22%] right-[40%] w-2 h-3 bg-white rounded-sm" />
        </div>

        {/* Special badge for limited editions */}
        {(type === 'black-crown' || type === 'pink-crown') && (
          <div className="absolute top-[10%] text-2xl">👑</div>
        )}
        {type === 'pirate' && <div className="absolute top-[10%] text-2xl">🏴‍☠️</div>}
        {type === 'knight' && <div className="absolute top-[10%] text-2xl">⚔️</div>}
        {type === 'halloween' && <div className="absolute top-[10%] text-2xl">🎃</div>}
        {type === 'winter' && <div className="absolute top-[10%] text-2xl">❄️</div>}
        {type === 'artist' && <div className="absolute top-[10%] text-2xl">🎨</div>}
        {type === 'vintage' && <div className="absolute top-[10%] text-2xl">⭐</div>}
      </div>
    </div>
  );
}
