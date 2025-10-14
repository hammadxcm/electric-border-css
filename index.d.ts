/**
 * Electric Border CSS - TypeScript Definitions
 * Author: Fyniti (https://fyniti.co.uk)
 * License: MIT
 */

declare module 'electric-border-css' {
  const css: string;
  export default css;
}

declare module 'electric-border-css/style.css' {
  const css: string;
  export default css;
}

// React TypeScript Definitions
declare module 'electric-border-css/react' {
  import { CSSProperties, ReactNode } from 'react';

  export interface ElectricBorderProps {
    /** Card width in pixels */
    width?: number;
    /** Card height in pixels */
    height?: number;
    /** Border color (hex, rgb, etc.) */
    color?: string;
    /** Color preset */
    preset?: 'cyan' | 'yellow' | 'purple' | 'pink' | 'green' | 'orange' | 'red' | 'blue';
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
    children?: ReactNode;
    /** Additional CSS class */
    className?: string;
    /** Custom styles */
    style?: CSSProperties;
    /** Disable hover effects */
    disableHover?: boolean;
    /** onClick handler */
    onClick?: () => void;
  }

  export const ElectricBorder: React.FC<ElectricBorderProps>;
  export default ElectricBorder;
}

declare module 'electric-border-css/react/ElectricBorder.css' {
  const css: string;
  export default css;
}

// Next.js TypeScript Definitions
declare module 'electric-border-css/nextjs' {
  import { CSSProperties, ReactNode } from 'react';

  export interface ElectricBorderProps {
    /** Card width in pixels */
    width?: number;
    /** Card height in pixels */
    height?: number;
    /** Border color (hex, rgb, etc.) */
    color?: string;
    /** Color preset */
    preset?: 'cyan' | 'yellow' | 'purple' | 'pink' | 'green' | 'orange' | 'red' | 'blue';
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
    children?: ReactNode;
    /** Additional CSS class */
    className?: string;
    /** Custom styles */
    style?: CSSProperties;
    /** Disable hover effects */
    disableHover?: boolean;
    /** onClick handler */
    onClick?: () => void;
    /** Next.js Link href */
    href?: string;
    /** Link target */
    target?: '_blank' | '_self' | '_parent' | '_top';
  }

  export const ElectricBorder: React.FC<ElectricBorderProps>;
  export default ElectricBorder;
}

declare module 'electric-border-css/nextjs/ElectricBorder.css' {
  const css: string;
  export default css;
}

// Vue TypeScript Definitions
declare module 'electric-border-css/vue' {
  import { DefineComponent } from 'vue';

  export interface ElectricBorderProps {
    /** Card width in pixels */
    width?: number;
    /** Card height in pixels */
    height?: number;
    /** Border color (hex, rgb, etc.) */
    color?: string;
    /** Color preset */
    preset?: 'cyan' | 'yellow' | 'purple' | 'pink' | 'green' | 'orange' | 'red' | 'blue';
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

  const ElectricBorder: DefineComponent<ElectricBorderProps>;
  export default ElectricBorder;
}

// Svelte TypeScript Definitions
declare module 'electric-border-css/svelte' {
  import { SvelteComponentTyped } from 'svelte';

  export interface ElectricBorderProps {
    /** Card width in pixels */
    width?: number;
    /** Card height in pixels */
    height?: number;
    /** Border color (hex, rgb, etc.) */
    color?: string;
    /** Color preset */
    preset?: 'cyan' | 'yellow' | 'purple' | 'pink' | 'green' | 'orange' | 'red' | 'blue';
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

  export interface ElectricBorderEvents {
    click: CustomEvent<void>;
  }

  export interface ElectricBorderSlots {
    default: {};
  }

  export default class ElectricBorder extends SvelteComponentTyped<
    ElectricBorderProps,
    ElectricBorderEvents,
    ElectricBorderSlots
  > {}
}
