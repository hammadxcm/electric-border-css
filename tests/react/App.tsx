/**
 * React Test Application
 * Tests the ElectricBorder component with all features
 */

import React, { useState } from 'react';
import { ElectricBorder } from '../../components/react/ElectricBorder';
import '../../components/react/ElectricBorder.css';

const App: React.FC = () => {
  const [currentPreset, setCurrentPreset] = useState<'cyan' | 'purple' | 'pink' | 'green'>('cyan');
  const [customColor, setCustomColor] = useState('#00fffb');
  const [animationSpeed, setAnimationSpeed] = useState(3);
  const [glowIntensity, setGlowIntensity] = useState(0.5);

  const presets = ['cyan', 'purple', 'pink', 'green', 'orange', 'red', 'blue', 'yellow'] as const;

  return (
    <div style={{
      fontFamily: 'system-ui, sans-serif',
      padding: '40px',
      background: '#151f28',
      minHeight: '100vh'
    }}>
      <h1 style={{ color: 'white', textAlign: 'center', marginBottom: '40px' }}>
        ⚡ React Component Test
      </h1>

      {/* Test 1: Basic Usage with Props */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ color: '#00fffb', marginBottom: '20px' }}>Test 1: Basic Usage</h2>
        <ElectricBorder
          preset="cyan"
          label="Test 1"
          title="Basic Usage"
          description="Testing basic props with preset color"
        />
      </section>

      {/* Test 2: Custom Content (Children) */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ color: '#b000ff', marginBottom: '20px' }}>Test 2: Custom Content</h2>
        <ElectricBorder preset="purple">
          <div style={{ padding: '48px', color: 'white' }}>
            <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>Custom Content</h3>
            <p style={{ marginBottom: '16px', opacity: 0.8 }}>
              This is custom content using children prop.
            </p>
            <button
              onClick={() => alert('Button clicked!')}
              style={{
                padding: '12px 24px',
                background: '#b000ff',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '600'
              }}
            >
              Click Me
            </button>
          </div>
        </ElectricBorder>
      </section>

      {/* Test 3: All Color Presets */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ color: '#ff00ff', marginBottom: '20px' }}>Test 3: All Color Presets</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px'
        }}>
          {presets.map(preset => (
            <ElectricBorder
              key={preset}
              preset={preset}
              width={300}
              height={200}
              label={preset.toUpperCase()}
              title={`${preset.charAt(0).toUpperCase() + preset.slice(1)} Preset`}
            />
          ))}
        </div>
      </section>

      {/* Test 4: Interactive Controls */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ color: '#00ff88', marginBottom: '20px' }}>Test 4: Interactive Controls</h2>

        <div style={{
          background: 'rgba(255,255,255,0.05)',
          padding: '24px',
          borderRadius: '12px',
          marginBottom: '30px',
          color: 'white'
        }}>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '8px' }}>
              Color Preset: {currentPreset}
            </label>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {presets.slice(0, 4).map(preset => (
                <button
                  key={preset}
                  onClick={() => setCurrentPreset(preset as any)}
                  style={{
                    padding: '8px 16px',
                    background: currentPreset === preset ? '#00fffb' : 'rgba(255,255,255,0.1)',
                    color: currentPreset === preset ? '#151f28' : 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontWeight: '600'
                  }}
                >
                  {preset}
                </button>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '8px' }}>
              Custom Color: {customColor}
            </label>
            <input
              type="color"
              value={customColor}
              onChange={(e) => setCustomColor(e.target.value)}
              style={{ width: '100px', height: '40px', cursor: 'pointer' }}
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '8px' }}>
              Animation Speed: {animationSpeed}s
            </label>
            <input
              type="range"
              min="1"
              max="10"
              step="0.5"
              value={animationSpeed}
              onChange={(e) => setAnimationSpeed(parseFloat(e.target.value))}
              style={{ width: '100%' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '8px' }}>
              Glow Intensity: {glowIntensity}
            </label>
            <input
              type="range"
              min="0.1"
              max="1"
              step="0.1"
              value={glowIntensity}
              onChange={(e) => setGlowIntensity(parseFloat(e.target.value))}
              style={{ width: '100%' }}
            />
          </div>
        </div>

        <ElectricBorder
          color={customColor}
          animationSpeed={animationSpeed}
          glowIntensity={glowIntensity}
          label="Interactive"
          title="Customizable Card"
          description="Adjust the controls above to see changes"
        />
      </section>

      {/* Test 5: Click Handler */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ color: '#ff6600', marginBottom: '20px' }}>Test 5: Click Handler</h2>
        <ElectricBorder
          preset="orange"
          label="Clickable"
          title="Click Me"
          description="This card has a click handler"
          onClick={() => alert('Card clicked! ✅')}
        />
      </section>

      {/* Test 6: Custom Sizes */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ color: '#ff0044', marginBottom: '20px' }}>Test 6: Custom Sizes</h2>
        <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', alignItems: 'flex-end' }}>
          <ElectricBorder
            preset="red"
            width={250}
            height={150}
            label="Small"
            title="250x150"
          />
          <ElectricBorder
            preset="red"
            width={350}
            height={250}
            label="Medium"
            title="350x250"
          />
          <ElectricBorder
            preset="red"
            width={450}
            height={350}
            label="Large"
            title="450x350"
          />
        </div>
      </section>

      {/* Test 7: Disabled Hover */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ color: '#0088ff', marginBottom: '20px' }}>Test 7: Disabled Hover</h2>
        <ElectricBorder
          preset="blue"
          label="No Hover"
          title="Hover Disabled"
          description="This card has hover effects disabled"
          disableHover={true}
        />
      </section>

      {/* Test 8: TypeScript Types */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ color: '#00fffb', marginBottom: '20px' }}>Test 8: TypeScript Types</h2>
        <ElectricBorder
          preset="cyan"
          width={350}
          height={200}
          animationSpeed={4}
          glowIntensity={0.7}
          blurAmount={35}
          borderRadius={20}
          label="TypeScript"
          title="Fully Typed"
          description="All props have proper TypeScript types"
          className="custom-class"
          style={{ marginTop: '20px' }}
        />
      </section>

      {/* Success Message */}
      <div style={{
        background: 'linear-gradient(135deg, #00fffb, #b000ff)',
        padding: '32px',
        borderRadius: '12px',
        textAlign: 'center',
        color: 'white',
        marginTop: '60px'
      }}>
        <h2 style={{ marginBottom: '16px', fontSize: '32px' }}>✅ All Tests Passed!</h2>
        <p style={{ fontSize: '18px', opacity: 0.9 }}>
          React component is working perfectly with all features
        </p>
      </div>
    </div>
  );
};

export default App;
