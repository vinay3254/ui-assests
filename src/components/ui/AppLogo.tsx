'use client';

import React, { memo, useMemo } from 'react';
import AppIcon from './AppIcon';
import AppImage from './AppImage';

interface AppLogoProps {
  src?: string; // Image source (optional)
  iconName?: string; // Icon name when no image
  size?: number; // Size for icon/image
  className?: string; // Additional classes
  onClick?: () => void; // Click handler
}

const AppLogo = memo(function AppLogo({
  src = '/assets/images/logo.jpg',
  iconName = 'SparklesIcon',
  size = 32,
  className = '',
  onClick,
}: AppLogoProps) {
  // Memoize className calculation
  const containerClassName = useMemo(() => {
    const classes = ['flex items-center justify-center overflow-hidden rounded-full shrink-0'];
    if (onClick) classes.push('cursor-pointer hover:opacity-80 transition-opacity');
    if (className) classes.push(className);
    return classes.join(' ');
  }, [onClick, className]);

  return (
    <div className={containerClassName} onClick={onClick} style={{ width: size, height: size }}>
      {/* Show image if src provided, otherwise show icon */}
      {src ? (
        <AppImage
          src={src}
          alt="Logo" 
          width={size}
          height={size}
          className="w-full h-full object-cover rounded-full"
          priority={true}
          unoptimized={true}
        />
      ) : (
        <AppIcon name={iconName} size={size} className="flex-shrink-0" />
      )}
    </div>
  );
});

export default AppLogo;

