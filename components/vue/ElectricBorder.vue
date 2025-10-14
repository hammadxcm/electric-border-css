<template>
  <div>
    <!-- SVG Filter -->
    <svg class="electric-svg-container" style="position: absolute; width: 0; height: 0">
      <defs>
        <filter
          id="turbulent-displace-vue"
          colorInterpolationFilters="sRGB"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
        >
          <feTurbulence type="turbulence" baseFrequency="0.025" numOctaves="12" result="noise1" seed="1" />
          <feOffset in="noise1" dx="0" dy="0" result="offsetNoise1">
            <animate
              attributeName="dy"
              values="700; 0; 700"
              dur="8s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
            />
          </feOffset>
          <feTurbulence type="turbulence" baseFrequency="0.025" numOctaves="12" result="noise2" seed="1" />
          <feOffset in="noise2" dx="0" dy="0" result="offsetNoise2">
            <animate
              attributeName="dy"
              values="0; -700; 0"
              dur="8s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
            />
          </feOffset>
          <feTurbulence type="turbulence" baseFrequency="0.025" numOctaves="12" result="noise1" seed="2" />
          <feOffset in="noise1" dx="0" dy="0" result="offsetNoise3">
            <animate
              attributeName="dx"
              values="490; 0; 490"
              dur="8s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
            />
          </feOffset>
          <feTurbulence type="turbulence" baseFrequency="0.025" numOctaves="12" result="noise2" seed="2" />
          <feOffset in="noise2" dx="0" dy="0" result="offsetNoise4">
            <animate
              attributeName="dx"
              values="0; -490; 0"
              dur="8s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
            />
          </feOffset>
          <feComposite in="offsetNoise1" in2="offsetNoise2" result="part1" />
          <feComposite in="offsetNoise3" in2="offsetNoise4" result="part2" />
          <feBlend in="part1" in2="part2" mode="color-dodge" result="combinedNoise" />
          <feDisplacementMap in="SourceGraphic" in2="combinedNoise" scale="40" xChannelSelector="R" yChannelSelector="B" />
        </filter>
      </defs>
    </svg>

    <!-- Card Container -->
    <div
      :class="['electric-card-container', customClass, { 'no-hover': disableHover }]"
      :style="containerStyle"
      @click="handleClick"
    >
      <div class="electric-inner-container">
        <div class="electric-border-outer">
          <div class="electric-main-card" />
        </div>
        <div class="electric-glow-layer-1" />
        <div class="electric-glow-layer-2" />
      </div>

      <div class="electric-overlay-1" />
      <div class="electric-overlay-2" />
      <div class="electric-background-glow" />

      <div class="electric-content-container">
        <slot>
          <div class="electric-content-top">
            <div v-if="label" class="electric-scrollbar-glass">{{ label }}</div>
            <p v-if="title" class="electric-title">{{ title }}</p>
          </div>
          <hr class="electric-divider" />
          <div class="electric-content-bottom">
            <p v-if="description" class="electric-description">{{ description }}</p>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, type CSSProperties } from 'vue';

/**
 * Electric Border Component for Vue 3
 * Author: Fyniti (https://fyniti.co.uk)
 * GitHub: https://github.com/hammadxcm/electric-border-css
 * License: MIT
 */

export interface ElectricBorderProps {
  /** Card width in pixels */
  width?: number;
  /** Card height in pixels */
  height?: number;
  /** Border color (hex, rgb, etc.) */
  color?: string;
  /** Color preset */
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
  /** Additional CSS class */
  customClass?: string;
  /** Disable hover effects */
  disableHover?: boolean;
}

const props = withDefaults(defineProps<ElectricBorderProps>(), {
  width: 350,
  height: 500,
  preset: 'cyan',
  animationSpeed: 3,
  glowIntensity: 0.5,
  blurAmount: 28,
  borderRadius: 24,
  customClass: '',
  disableHover: false,
});

const emit = defineEmits<{
  click: [];
}>();

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

const borderColor = computed(() => props.color || colorPresets[props.preset]);

const containerStyle = computed<CSSProperties>(() => ({
  '--electric-border-color': borderColor.value,
  '--electric-light-color': `oklch(from ${borderColor.value} l c h)`,
  '--gradient-color': `oklch(from ${borderColor.value} 0.3 calc(c / 2) h / 0.4)`,
  '--animation-speed': `${props.animationSpeed}s`,
  '--glow-intensity': props.glowIntensity,
  '--blur-amount': `${props.blurAmount}px`,
  '--border-radius': `${props.borderRadius}px`,
  '--card-width': `${props.width}px`,
  '--card-height': `${props.height}px`,
} as CSSProperties));

const handleClick = () => {
  emit('click');
};
</script>

<style scoped>
/* Card Container */
.electric-card-container {
  cursor: pointer;
  padding: 2px;
  border-radius: var(--border-radius, 24px);
  position: relative;
  background: linear-gradient(
      -30deg,
      var(--gradient-color),
      transparent,
      var(--gradient-color)
    ),
    linear-gradient(to bottom, oklch(0.185 0 0), oklch(0.185 0 0));
  animation: electricRotateBorder 8s linear infinite;
}

@keyframes electricRotateBorder {
  0% { filter: hue-rotate(0deg) brightness(1); }
  50% { filter: hue-rotate(8deg) brightness(1.05); }
  100% { filter: hue-rotate(0deg) brightness(1); }
}

.electric-inner-container {
  position: relative;
}

.electric-border-outer {
  border: 1.5px solid var(--electric-border-color);
  border-radius: var(--border-radius, 24px);
  padding-right: 4px;
  padding-bottom: 4px;
}

.electric-main-card {
  width: var(--card-width, 350px);
  height: var(--card-height, 500px);
  border-radius: var(--border-radius, 24px);
  margin-top: -4px;
  margin-left: -4px;
  filter: url(#turbulent-displace-vue);
  transition: 0.3s;
}

.electric-card-container:not(.no-hover):hover .electric-main-card {
  border: 1.5px solid var(--electric-border-color);
  transform: scale(1.01);
}

/* Glow Layers - Continuous full border coverage using box-shadows only */
.electric-glow-layer-1 {
  border-radius: var(--border-radius, 24px);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  box-shadow:
    inset 0 0 0 2px var(--electric-border-color),
    inset 0 0 10px 2px var(--electric-border-color),
    0 0 10px 2px var(--electric-border-color),
    0 0 20px 4px var(--electric-border-color);
  opacity: var(--glow-intensity, 0.5);
  animation: electricPulse var(--animation-speed, 3s) ease-in-out infinite;
  pointer-events: none;
}

.electric-glow-layer-2 {
  border-radius: var(--border-radius, 24px);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  box-shadow:
    inset 0 0 20px 4px var(--electric-light-color),
    0 0 30px 8px var(--electric-light-color),
    0 0 50px 12px var(--electric-border-color);
  opacity: calc(var(--glow-intensity, 0.5) * 0.8);
  animation: electricPulse var(--animation-speed, 3s) ease-in-out infinite 0.5s;
  pointer-events: none;
}

@keyframes electricPulse {
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.25; transform: scale(1.01); }
}

.electric-card-container:not(.no-hover):hover .electric-glow-layer-1,
.electric-card-container:not(.no-hover):hover .electric-glow-layer-2 {
  animation: electricPulseHover 2s ease-in-out infinite;
}

@keyframes electricPulseHover {
  0%, 100% { opacity: 0.6; transform: scale(1.01); }
  50% { opacity: 0.4; transform: scale(1.02); }
}

/* Overlays */
.electric-overlay-1, .electric-overlay-2 {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: var(--border-radius, 24px);
  mix-blend-mode: overlay;
  transform: scale(1.1);
  filter: blur(20px);
  background: linear-gradient(-30deg, white, transparent 30%, transparent 70%, white);
}

.electric-overlay-1 { opacity: 0.4; }
.electric-overlay-2 { opacity: 0.25; }

.electric-background-glow {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: var(--border-radius, 24px);
  filter: var(--blur-amount, blur(28px));
  transform: scale(1.1);
  opacity: 0.15;
  z-index: -1;
  background: linear-gradient(-30deg, var(--electric-light-color), transparent, var(--electric-border-color));
  animation: electricGlowPulse 4s ease-in-out infinite;
}

@keyframes electricGlowPulse {
  0%, 100% { opacity: 0.15; }
  50% { opacity: 0.25; }
}

.electric-card-container:not(.no-hover):hover .electric-background-glow {
  opacity: 0.3;
  filter: blur(36px);
}

/* Content */
.electric-content-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.electric-content-top {
  display: flex;
  flex-direction: column;
  padding: 48px;
  padding-bottom: 16px;
  height: 100%;
}

.electric-content-bottom {
  display: flex;
  flex-direction: column;
  padding: 48px;
  padding-top: 16px;
}

.electric-scrollbar-glass {
  background: radial-gradient(47.2% 50% at 50.39% 88.37%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%),
              rgba(255, 255, 255, 0.04);
  border-radius: 14px;
  width: fit-content;
  padding: 8px 16px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  position: relative;
}

.electric-scrollbar-glass::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 1px;
  background: linear-gradient(150deg, rgba(255, 255, 255, 0.48) 16.73%, rgba(255, 255, 255, 0.08) 30.2%,
                             rgba(255, 255, 255, 0.08) 68.2%, rgba(255, 255, 255, 0.6) 81.89%);
  border-radius: inherit;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: xor;
  -webkit-mask-composite: xor;
  pointer-events: none;
}

.electric-title {
  font-size: 36px;
  font-weight: 500;
  margin-top: auto;
  color: white;
}

.electric-description {
  opacity: 0.5;
  line-height: 1.5;
  color: white;
}

.electric-divider {
  margin-top: auto;
  border: none;
  height: 1px;
  background-color: currentColor;
  opacity: 0.1;
  mask-image: linear-gradient(to right, transparent, black, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black, transparent);
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  .electric-card-container *,
  .electric-card-container *::before,
  .electric-card-container *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
