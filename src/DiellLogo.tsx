import React, { useState } from 'react';

export interface DiellLogoProps {
  // Size props
  size?: number | string;
  width?: number | string;
  height?: number | string;

  // Color customization
  primaryColor?: string;
  secondaryColor?: string;
  inactiveColor?: string;
  textColor?: string;

  // Animation props
  animationDuration?: number;
  hoverScale?: number;

  // Display options
  showText?: boolean;
  text?: string;
  showBackground?: boolean;
  backgroundColor?: string;

  // Interaction
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;

  // Style overrides
  className?: string;
  style?: React.CSSProperties;
  containerStyle?: React.CSSProperties;

  // Accessibility
  alt?: string;
  title?: string;
}

const DiellLogo: React.FC<DiellLogoProps> = ({
  size = 80,
  width,
  height,
  primaryColor = '#fbbf24', // yellow-400
  secondaryColor = '#f97316', // orange-500
  inactiveColor = 'rgba(100,100,100,0.6)',
  textColor,
  animationDuration = 300,
  hoverScale = 1.2,
  showText = true,
  text = 'DIELL',
  showBackground = false,
  backgroundColor = '#f3f4f6',
  onClick,
  onMouseEnter: externalOnMouseEnter,
  onMouseLeave: externalOnMouseLeave,
  className = '',
  style = {},
  containerStyle = {},
  alt = 'Diell Logo',
  title = 'Diell Logo',
}) => {
  const [isComplete, setIsComplete] = useState(false);
  const [lightingIntensity, setLightingIntensity] = useState(0.8);

  // Calculate dimensions
  const logoWidth = width || size;
  const logoHeight = height || size;
  const logoSize = typeof logoWidth === 'number' ? logoWidth : parseInt(logoWidth as string);

  // Advanced formula for ray positioning
  // translation = desired_gap + half_of_ray_height
  const rayTranslation = {
    initial: logoSize * 0.2 + (logoSize * 0.1) / 2, // Gap + half initial height
    hover: logoSize * 0.2 + (logoSize * 0.15) / 2, // Gap + half hover height
  };

  const handleMouseEnter = () => {
    setIsComplete(true);
    setLightingIntensity(1);
    externalOnMouseEnter?.();
  };

  const handleMouseLeave = () => {
    setIsComplete(false);
    setLightingIntensity(0.8);
    externalOnMouseLeave?.();
  };

  // Dynamic color calculation
  const getActiveColor = (intensity: number) => {
    return lightingIntensity > intensity ? primaryColor : inactiveColor;
  };

  const getDynamicTextColor = () => {
    if (textColor) return textColor;
    return lightingIntensity > 0.7 ? primaryColor : '#374151';
  };

  // Container component
  const LogoContent = () => {
    
    // FIX: Advanced multi-layer text shadow for a "wrapping" glow effect
    // This creates three stacked shadows: a tight "wrap", a main glow, and a soft ambient glow.
    const textGlowEffect = isComplete
      ? `0 0 ${logoSize * 0.03}px ${primaryColor}, 0 0 ${logoSize * 0.1}px ${primaryColor}, 0 0 ${logoSize * 0.2}px ${secondaryColor}`
      : 'none';
      
    return (
      <div
        className={`relative cursor-pointer flex flex-col items-center justify-center ${className}`}
        style={{
          width: logoWidth,
          height: showText ? `calc(${logoHeight}px + 40px)` : logoHeight,
          ...style
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        title={title}
        role="img"
        aria-label={alt}
      >
        <div
          className="relative flex items-center justify-center"
          style={{ width: logoSize, height: logoSize }}
        >
          <div
            className="absolute inset-0 rounded-full flex items-center justify-center transition-all ease-out"
            style={{
              borderColor: getActiveColor(0.3),
              transform: isComplete ? `scale(${hoverScale})` : 'scale(1)',
              transitionDuration: `${animationDuration}ms`
            }}
          >
            {/* Outer ring that appears when completed */}
            {isComplete && (
              <div
                className="absolute rounded-full transition-all ease-out"
                style={{
                  width: '120%',
                  height: '120%',
                  borderColor: `${primaryColor}99`, // Add transparency
                  background: 'transparent',
                  transitionDuration: `${animationDuration * 1.5}ms`
                }}
              />
            )}
  
            {/* Sun rays */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute"
                style={{
                  width: logoSize * 0.045,
                  height: isComplete ? logoSize * 0.15 : logoSize * 0.1,
                  transform: `rotate(${i * 45}deg) translateY(-${isComplete ? rayTranslation.hover : rayTranslation.initial}px)`,
                  backgroundColor: getActiveColor(0.3),
                  boxShadow: isComplete
                    ? `0 0 ${logoSize * 0.2}px ${primaryColor}`
                    : lightingIntensity > 0.5
                    ? `0 0 ${logoSize * 0.125}px ${primaryColor}`
                    : 'none',
                  transition: `all ${animationDuration}ms ease-out`
                }}
              />
            ))}
  
            {/* Center circle */}
            <div
              className="absolute rounded-full transition-all ease-out"
              style={{
                width: isComplete ? logoSize * 0.25 : logoSize * 0.2,
                height: isComplete ? logoSize * 0.25 : logoSize * 0.2,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: getActiveColor(0.2),
                boxShadow: isComplete
                  ? `0 0 ${logoSize * 0.3}px ${primaryColor}, 0 0 ${logoSize * 0.6}px ${secondaryColor}`
                  : lightingIntensity > 0.4
                  ? `0 0 ${logoSize * 0.2}px ${primaryColor}`
                  : 'none',
                transitionDuration: `${animationDuration}ms`
              }}
            />
          </div>
        </div>
  
        {/* Logo text */}
        {showText && (
          <h1
            className="font-bold tracking-widest transition-all text-center mt-2"
            style={{
              fontSize: logoSize * 0.2,
              color: getDynamicTextColor(),
              textShadow: textGlowEffect, 
              transition: `all ${animationDuration}ms ease-out`
            }}
          >
            {text}
          </h1>
        )}
      </div>
    );
  }

  // Return with or without background container
  if (showBackground) {
    return (
      <div
        className="flex flex-col items-center justify-center min-h-screen"
        style={{
          backgroundColor,
          ...containerStyle
        }}
      >
        <LogoContent />
      </div>
    );
  }

  return <LogoContent />;
};

export default DiellLogo;