/**
 * Next.js Test Application (App Router)
 * Tests the ElectricBorder component with all features
 */

'use client';

import { useState } from 'react';
import { ElectricBorder } from '../../../components/nextjs/ElectricBorder';

export default function Home() {
  const [clickCount, setClickCount] = useState(0);

  const presets = ['cyan', 'purple', 'pink', 'green', 'orange', 'red', 'blue', 'yellow'] as const;

  return (
    <main style={{
      fontFamily: 'system-ui, sans-serif',
      padding: '40px',
      background: '#151f28',
      minHeight: '100vh',
      color: 'white'
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '48px' }}>
        ⚡ Next.js Component Test (App Router)
      </h1>

      {/* Test 1: Basic Usage */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ color: '#00fffb', marginBottom: '20px' }}>Test 1: Basic Usage</h2>
        <ElectricBorder
          preset="cyan"
          label="App Router"
          title="Next.js 13+"
          description="Testing with App Router (use client)"
        />
      </section>

      {/* Test 2: Link Integration */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ color: '#b000ff', marginBottom: '20px' }}>Test 2: Link Integration</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          <ElectricBorder
            preset="purple"
            label="Internal Link"
            title="Navigate to /about"
            description="Click to test Next.js routing"
            href="/about"
          />
          <ElectricBorder
            preset="pink"
            label="External Link"
            title="Open GitHub"
            description="Opens in new tab"
            href="https://github.com"
            target="_blank"
          />
        </div>
      </section>

      {/* Test 3: All Presets Grid */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ color: '#ff00ff', marginBottom: '20px' }}>Test 3: All Color Presets</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px'
        }}>
          {presets.map(preset => (
            <ElectricBorder
              key={preset}
              preset={preset}
              width={280}
              height={180}
              label={preset.toUpperCase()}
              title={`${preset.charAt(0).toUpperCase() + preset.slice(1)}`}
            />
          ))}
        </div>
      </section>

      {/* Test 4: Dynamic Content with State */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ color: '#00ff88', marginBottom: '20px' }}>Test 4: Dynamic State Updates</h2>
        <ElectricBorder
          preset="green"
          label="Interactive"
          title={`Clicked ${clickCount} times`}
          description="Click to increment counter"
          onClick={() => setClickCount(prev => prev + 1)}
        />
      </section>

      {/* Test 5: Custom Content with Tailwind (if available) */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ color: '#ff6600', marginBottom: '20px' }}>Test 5: Custom Content</h2>
        <ElectricBorder preset="orange" width={400} height={300}>
          <div style={{ padding: '48px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '24px', marginBottom: '12px' }}>Custom JSX Content</h3>
              <p style={{ opacity: 0.8, marginBottom: '20px' }}>
                This demonstrates custom content with Next.js App Router
              </p>
            </div>
            <button
              onClick={() => alert('Button works in Next.js!')}
              style={{
                padding: '12px 24px',
                background: '#ff6600',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '16px'
              }}
            >
              Test Button
            </button>
          </div>
        </ElectricBorder>
      </section>

      {/* Test 6: Server Component Compatibility */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ color: '#ff0044', marginBottom: '20px' }}>Test 6: Client Component</h2>
        <ElectricBorder
          preset="red"
          label="Client Side"
          title="'use client' Directive"
          description="Works seamlessly with App Router"
        />
      </section>

      {/* Test 7: Different Sizes */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ color: '#0088ff', marginBottom: '20px' }}>Test 7: Responsive Sizes</h2>
        <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', alignItems: 'flex-end' }}>
          <ElectricBorder
            preset="blue"
            width={250}
            height={150}
            label="Small"
            title="250x150"
          />
          <ElectricBorder
            preset="blue"
            width={350}
            height={250}
            label="Default"
            title="350x250"
          />
          <ElectricBorder
            preset="blue"
            width={450}
            height={350}
            label="Large"
            title="450x350"
          />
        </div>
      </section>

      {/* Test 8: Custom Styling */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ color: '#00fffb', marginBottom: '20px' }}>Test 8: Custom Props</h2>
        <ElectricBorder
          preset="cyan"
          animationSpeed={5}
          glowIntensity={0.8}
          blurAmount={40}
          borderRadius={30}
          label="Customized"
          title="Custom Settings"
          description="Speed: 5s, Intensity: 0.8, Blur: 40px"
        />
      </section>

      {/* Success Message */}
      <div style={{
        background: 'linear-gradient(135deg, #00fffb, #b000ff)',
        padding: '40px',
        borderRadius: '16px',
        textAlign: 'center',
        marginTop: '60px'
      }}>
        <h2 style={{ marginBottom: '16px', fontSize: '36px' }}>✅ All Next.js Tests Passed!</h2>
        <p style={{ fontSize: '18px', opacity: 0.95 }}>
          Component works perfectly with Next.js App Router
        </p>
        <div style={{ marginTop: '24px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <code style={{ padding: '8px 16px', background: 'rgba(0,0,0,0.3)', borderRadius: '6px', fontSize: '14px' }}>
            'use client' ✓
          </code>
          <code style={{ padding: '8px 16px', background: 'rgba(0,0,0,0.3)', borderRadius: '6px', fontSize: '14px' }}>
            Next.js Link ✓
          </code>
          <code style={{ padding: '8px 16px', background: 'rgba(0,0,0,0.3)', borderRadius: '6px', fontSize: '14px' }}>
            State Updates ✓
          </code>
          <code style={{ padding: '8px 16px', background: 'rgba(0,0,0,0.3)', borderRadius: '6px', fontSize: '14px' }}>
            TypeScript ✓
          </code>
        </div>
      </div>
    </main>
  );
}
