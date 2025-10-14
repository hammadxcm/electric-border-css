/**
 * Electric Border CSS - Interactive Examples JavaScript
 * Author: Fyniti (https://fyniti.co.uk)
 * GitHub: https://github.com/hammadxcm/electric-border-css
 * License: MIT
 */

// DOM Elements
const customCard = document.getElementById('customCard');
const controlPanel = document.getElementById('controlPanel');
const togglePanelBtn = document.getElementById('togglePanel');
const colorPicker = document.getElementById('colorPicker');
const speedSlider = document.getElementById('speedSlider');
const intensitySlider = document.getElementById('intensitySlider');
const blurSlider = document.getElementById('blurSlider');
const speedValue = document.getElementById('speedValue');
const intensityValue = document.getElementById('intensityValue');
const blurValue = document.getElementById('blurValue');
const copyHTMLBtn = document.getElementById('copyHTMLBtn');
const copyCSSBtn = document.getElementById('copyCSSBtn');
const codePreview = document.getElementById('codePreview');
const presetButtons = document.querySelectorAll('.preset-btn');

// Current customization state
let currentColor = '#00fffb';
let currentSpeed = 3;
let currentIntensity = 0.5;
let currentBlur = 28;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeControls();
    applyCustomStyles();
});

// Toggle Control Panel
togglePanelBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    controlPanel.classList.toggle('hidden');
    if (controlPanel.classList.contains('hidden')) {
        togglePanelBtn.textContent = '🎨 Customize';
    } else {
        togglePanelBtn.textContent = '✕ Close';
    }
});

// Close panel when clicking outside
document.addEventListener('click', (e) => {
    if (!controlPanel.contains(e.target) && !togglePanelBtn.contains(e.target)) {
        if (!controlPanel.classList.contains('hidden')) {
            controlPanel.classList.add('hidden');
            togglePanelBtn.textContent = '🎨 Customize';
        }
    }
});

// Color Picker
colorPicker.addEventListener('input', (e) => {
    currentColor = e.target.value;
    applyCustomStyles();
    updateActivePreset(currentColor);
});

// Preset Color Buttons
presetButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        currentColor = btn.dataset.color;
        colorPicker.value = currentColor;
        applyCustomStyles();
        updateActivePreset(currentColor);
    });
});

// Speed Slider
speedSlider.addEventListener('input', (e) => {
    currentSpeed = parseFloat(e.target.value);
    speedValue.textContent = `${currentSpeed}s`;
    applyCustomStyles();
});

// Intensity Slider
intensitySlider.addEventListener('input', (e) => {
    currentIntensity = parseFloat(e.target.value);
    intensityValue.textContent = currentIntensity;
    applyCustomStyles();
});

// Blur Slider
blurSlider.addEventListener('input', (e) => {
    currentBlur = parseInt(e.target.value);
    blurValue.textContent = `${currentBlur}px`;
    applyCustomStyles();
});

// Apply Custom Styles to Card
function applyCustomStyles() {
    const glowLayers = customCard.querySelectorAll('.glow-layer-1, .glow-layer-2');
    const backgroundGlow = customCard.querySelector('.background-glow');

    // Set CSS custom properties
    customCard.style.setProperty('--electric-border-color', currentColor);
    customCard.style.setProperty('--electric-light-color', `oklch(from ${currentColor} l c h)`);
    customCard.style.setProperty('--gradient-color', `oklch(from ${currentColor} 0.3 calc(c / 2) h / 0.4)`);

    // Apply animation speed
    glowLayers.forEach(layer => {
        layer.style.animationDuration = `${currentSpeed}s`;
    });

    // Apply intensity
    glowLayers[0].style.opacity = currentIntensity;
    glowLayers[1].style.opacity = currentIntensity * 0.6;

    // Apply blur
    if (backgroundGlow) {
        backgroundGlow.style.filter = `blur(${currentBlur}px)`;
    }
}

// Update Active Preset Button
function updateActivePreset(color) {
    presetButtons.forEach(btn => {
        if (btn.dataset.color.toLowerCase() === color.toLowerCase()) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Initialize Controls with Current Values
function initializeControls() {
    speedValue.textContent = `${currentSpeed}s`;
    intensityValue.textContent = currentIntensity;
    blurValue.textContent = `${currentBlur}px`;
    colorPicker.value = currentColor;
}

// Copy HTML Code
copyHTMLBtn.addEventListener('click', () => {
    const htmlCode = generateHTMLCode();
    copyToClipboard(htmlCode, copyHTMLBtn);
    codePreview.innerHTML = `<code>${escapeHtml(htmlCode)}</code>`;
});

// Copy CSS Code
copyCSSBtn.addEventListener('click', () => {
    const cssCode = generateCSSCode();
    copyToClipboard(cssCode, copyCSSBtn);
    codePreview.innerHTML = `<code>${escapeHtml(cssCode)}</code>`;
});

// Generate HTML Code
function generateHTMLCode() {
    return `<!-- SVG Filter (place once in your page) -->
<svg class="svg-container">
  <defs>
    <filter id="turbulent-displace" colorInterpolationFilters="sRGB" x="-20%" y="-20%" width="140%" height="140%">
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

<!-- Electric Border Card -->
<div class="card-container">
  <div class="inner-container">
    <div class="border-outer">
      <div class="main-card"></div>
    </div>
    <div class="glow-layer-1"></div>
    <div class="glow-layer-2"></div>
  </div>

  <div class="overlay-1"></div>
  <div class="overlay-2"></div>
  <div class="background-glow"></div>

  <div class="content-container">
    <div class="content-top">
      <div class="scrollbar-glass">Label</div>
      <p class="title">Your Title</p>
    </div>
    <hr class="divider" />
    <div class="content-bottom">
      <p class="description">Your description text.</p>
    </div>
  </div>
</div>`;
}

// Generate CSS Code
function generateCSSCode() {
    const colorName = getColorName(currentColor);
    return `/* Custom Electric Border Configuration */
:root {
  --electric-border-color: ${currentColor};
  --electric-light-color: oklch(from ${currentColor} l c h);
  --gradient-color: oklch(from ${currentColor} 0.3 calc(c / 2) h / 0.4);
}

/* Or use a preset class: */
/* <div class="card-container electric-${colorName}"> */

/* Custom Animation Speed: ${currentSpeed}s */
.glow-layer-1,
.glow-layer-2 {
  animation-duration: ${currentSpeed}s;
}

/* Custom Glow Intensity: ${currentIntensity} */
.glow-layer-1 {
  opacity: ${currentIntensity};
}

.glow-layer-2 {
  opacity: ${currentIntensity * 0.6};
}

/* Custom Background Blur: ${currentBlur}px */
.background-glow {
  filter: blur(${currentBlur}px);
}`;
}

// Get Color Name from Hex
function getColorName(hex) {
    const colorMap = {
        '#00fffb': 'cyan',
        '#f2ff00': 'yellow',
        '#b000ff': 'purple',
        '#ff00ff': 'pink',
        '#00ff88': 'green',
        '#ff6600': 'orange',
        '#ff0044': 'red',
        '#0088ff': 'blue'
    };
    return colorMap[hex.toLowerCase()] || 'custom';
}

// Copy to Clipboard
async function copyToClipboard(text, button) {
    try {
        await navigator.clipboard.writeText(text);

        // Visual feedback
        const originalText = button.textContent;
        button.textContent = '✓ Copied!';
        button.classList.add('copied');

        setTimeout(() => {
            button.textContent = originalText;
            button.classList.remove('copied');
        }, 2000);
    } catch (err) {
        // Fallback for older browsers
        fallbackCopyToClipboard(text, button);
    }
}

// Fallback Copy Method
function fallbackCopyToClipboard(text, button) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        document.execCommand('copy');
        const originalText = button.textContent;
        button.textContent = '✓ Copied!';
        button.classList.add('copied');

        setTimeout(() => {
            button.textContent = originalText;
            button.classList.remove('copied');
        }, 2000);
    } catch (err) {
        button.textContent = '✗ Failed';
        setTimeout(() => {
            button.textContent = '📋 Copy HTML';
        }, 2000);
    }

    document.body.removeChild(textArea);
}

// Escape HTML for Display
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Keyboard Shortcuts
document.addEventListener('keydown', (e) => {
    // Escape to close panel
    if (e.key === 'Escape' && !controlPanel.classList.contains('hidden')) {
        togglePanelBtn.click();
    }

    // Ctrl/Cmd + K to toggle panel
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        togglePanelBtn.click();
    }
});

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Console Easter Egg
console.log('%c⚡ Electric Border CSS', 'color: #00fffb; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with ❤️ by Fyniti', 'color: #fff; font-size: 14px;');
console.log('%cGitHub: https://github.com/hammadxcm/electric-border-css', 'color: #888; font-size: 12px;');
console.log('%cKeyboard Shortcuts:\n- Escape: Close panel\n- Ctrl/Cmd + K: Toggle panel', 'color: #00fffb; font-size: 12px;');
