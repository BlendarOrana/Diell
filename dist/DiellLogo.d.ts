import React from 'react';
export interface DiellLogoProps {
    size?: number | string;
    width?: number | string;
    height?: number | string;
    primaryColor?: string;
    secondaryColor?: string;
    inactiveColor?: string;
    textColor?: string;
    animationDuration?: number;
    hoverScale?: number;
    showText?: boolean;
    text?: string;
    showBackground?: boolean;
    backgroundColor?: string;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    className?: string;
    style?: React.CSSProperties;
    containerStyle?: React.CSSProperties;
    alt?: string;
    title?: string;
}
declare const DiellLogo: React.FC<DiellLogoProps>;
export default DiellLogo;
