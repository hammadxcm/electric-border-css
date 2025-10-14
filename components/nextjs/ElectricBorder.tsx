/**
 * Electric Border Component for Next.js
 * Author: Fyniti (https://fyniti.co.uk)
 * GitHub: https://github.com/hammadxcm/electric-border-css
 * License: MIT
 */

'use client';

import React, { CSSProperties } from 'react';
import './ElectricBorder.css';

export interface ElectricBorderProps {
  /** Card width in pixels */
  width?: number;
  /** Card height in pixels */
  height?: number;
  /** Border color (hex, rgb, etc.) */
  color?: string;
  /** Color preset: 'cyan' | 'purple' | 'pink' | 'green' | 'orange' | 'red' | 'blue' | 'yellow' */
  preset?: 'cyan' | 'purple' | 'pink' | 'green' | 'orange' | 'red' | 'blue' | 'yellow';
  /** Animation speed in seconds */
  animationSpeed?: number;
  /** Glow intensity (0.1 - 1) */
  glowIntensity?: number;
  /** Background blur amount in pixels */
  blurAmount?: number;
  /** Card border radius in pixels */
  borderRadius?: number;
  /** Label text */
  label?: string;
  /** Title text */
  title?: string;
  /** Description text */
  description?: string;
  /** Custom content */
  children?: React.ReactNode;
  /** Additional CSS class */
  className?: string;
  /** Custom styles */
  style?: CSSProperties;
  /** Disable hover effects */
  disableHover?: boolean;
  /** onClick handler */
  onClick?: () => void;
  /** Use as Link wrapper */
  href?: string;
  /** Link target */
  target?: '_blank' | '_self' | '_parent' | '_top';
}

const colorPresets = {
  cyan: '#00fffb',
  yellow: '#f2ff00',
  purple: '#b000ff',
  pink: '#ff00ff',
  green: '#00ff88',
  orange: '#ff6600',
  red: '#ff0044',
  blue: '#0088ff',
};

export const ElectricBorder: React.FC<ElectricBorderProps> = ({
  width = 350,
  height = 500,
  color,
  preset = 'cyan',
  animationSpeed = 3,
  glowIntensity = 0.5,
  blurAmount = 28,
  borderRadius = 24,
  label,
  title,
  description,
  children,
  className = '',
  style = {},
  disableHover = false,
  onClick,
  href,
  target,
}) => {
  const borderColor = color || colorPresets[preset];

  const containerStyle: CSSProperties = {
    '--electric-border-color': borderColor,
    '--electric-light-color': `oklch(from ${borderColor} l c h)`,
    '--gradient-color': `oklch(from ${borderColor} 0.3 calc(c / 2) h / 0.4)`,
    '--animation-speed': `${animationSpeed}s`,
    '--glow-intensity': glowIntensity,
    '--blur-amount': `${blurAmount}px`,
    '--border-radius': `${borderRadius}px`,
    '--card-width': `${width}px`,
    '--card-height': `${height}px`,
    ...style,
  } as CSSProperties;

  const content = (
    <>
      {/* SVG Filter */}
      <svg className="electric-svg-container" style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="turbulent-displace-nextjs" colorInterpolationFilters="sRGB" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="turbulence" baseFrequency="0.025" numOctaves="12" result="noise1" seed="1" />
            <feOffset in="noise1" dx="0" dy="0" result="offsetNoise1">
              <animate attributeName="dy" values="700; 0; 700" dur="8s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" />
            </feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.025" numOctaves="12" result="noise2" seed="1" />
            <feOffset in="noise2" dx="0" dy="0" result="offsetNoise2">
              <animate attributeName="dy" values="0; -700; 0" dur="8s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" />
            </feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.025" numOctaves="12" result="noise1" seed="2" />
            <feOffset in="noise1" dx="0" dy="0" result="offsetNoise3">
              <animate attributeName="dx" values="490; 0; 490" dur="8s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" />
            </feOffset>
            <feTurbulence type="turbulence" baseFrequency="0.025" numOctaves="12" result="noise2" seed="2" />
            <feOffset in="noise2" dx="0" dy="0" result="offsetNoise4">
              <animate attributeName="dx" values="0; -490; 0" dur="8s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" />
            </feOffset>
            <feComposite in="offsetNoise1" in2="offsetNoise2" result="part1" />
            <feComposite in="offsetNoise3" in2="offsetNoise4" result="part2" />
            <feBlend in="part1" in2="part2" mode="color-dodge" result="combinedNoise" />
            <feDisplacementMap in="SourceGraphic" in2="combinedNoise" scale="40" xChannelSelector="R" yChannelSelector="B" />
          </filter>
        </defs>
      </svg>

      <div
        className={`electric-card-container ${className} ${disableHover ? 'no-hover' : ''}`}
        style={containerStyle}
        onClick={onClick}
      >
        <div className="electric-inner-container">
          <div className="electric-border-outer">
            <div className="electric-main-card" />
          </div>
          <div className="electric-glow-layer-1" />
          <div className="electric-glow-layer-2" />
        </div>

        <div className="electric-overlay-1" />
        <div className="electric-overlay-2" />
        <div className="electric-background-glow" />

        <div className="electric-content-container">
          {children ? (
            children
          ) : (
            <>
              <div className="electric-content-top">
                {label && (
                  <div className="electric-scrollbar-glass">{label}</div>
                )}
                {title && <p className="electric-title">{title}</p>}
              </div>
              <hr className="electric-divider" />
              <div className="electric-content-bottom">
                {description && <p className="electric-description">{description}</p>}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );

  // Wrap in Link if href is provided
  if (href) {
    const Link = require('next/link').default;
    return (
      <Link href={href} target={target} style={{ textDecoration: 'none', color: 'inherit' }}>
        {content}
      </Link>
    );
  }

  return content;
};

export default ElectricBorder;
