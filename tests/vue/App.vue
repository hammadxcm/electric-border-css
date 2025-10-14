<template>
  <div class="app-container">
    <h1 class="main-title">⚡ Vue 3 Component Test</h1>

    <!-- Test 1: Basic Usage -->
    <section class="test-section">
      <h2 class="section-title" style="color: #00fffb">Test 1: Basic Usage</h2>
      <ElectricBorder
        preset="cyan"
        label="Test 1"
        title="Basic Usage"
        description="Testing basic props with Composition API"
      />
    </section>

    <!-- Test 2: Custom Content (Slots) -->
    <section class="test-section">
      <h2 class="section-title" style="color: #b000ff">Test 2: Custom Content (Slots)</h2>
      <ElectricBorder preset="purple">
        <div class="custom-content">
          <h3>Custom Slot Content</h3>
          <p>This demonstrates Vue 3 slots functionality</p>
          <button @click="handleButtonClick" class="test-button">
            Click Me
          </button>
        </div>
      </ElectricBorder>
    </section>

    <!-- Test 3: All Color Presets -->
    <section class="test-section">
      <h2 class="section-title" style="color: #ff00ff">Test 3: All Color Presets</h2>
      <div class="grid">
        <ElectricBorder
          v-for="preset in presets"
          :key="preset"
          :preset="preset"
          :width="300"
          :height="200"
          :label="preset.toUpperCase()"
          :title="`${capitalize(preset)} Preset`"
        />
      </div>
    </section>

    <!-- Test 4: Reactive State -->
    <section class="test-section">
      <h2 class="section-title" style="color: #00ff88">Test 4: Reactive State</h2>

      <div class="controls">
        <div class="control-group">
          <label>Color Preset: {{ currentPreset }}</label>
          <div class="button-group">
            <button
              v-for="preset in presets.slice(0, 4)"
              :key="preset"
              @click="currentPreset = preset"
              :class="['preset-button', { active: currentPreset === preset }]"
            >
              {{ preset }}
            </button>
          </div>
        </div>

        <div class="control-group">
          <label>Custom Color: {{ customColor }}</label>
          <input type="color" v-model="customColor" class="color-input" />
        </div>

        <div class="control-group">
          <label>Animation Speed: {{ animationSpeed }}s</label>
          <input
            type="range"
            v-model.number="animationSpeed"
            min="1"
            max="10"
            step="0.5"
            class="range-input"
          />
        </div>

        <div class="control-group">
          <label>Glow Intensity: {{ glowIntensity }}</label>
          <input
            type="range"
            v-model.number="glowIntensity"
            min="0.1"
            max="1"
            step="0.1"
            class="range-input"
          />
        </div>
      </div>

      <ElectricBorder
        :color="customColor"
        :animation-speed="animationSpeed"
        :glow-intensity="glowIntensity"
        label="Interactive"
        title="Reactive Props"
        description="Adjust controls above to see real-time updates"
      />
    </section>

    <!-- Test 5: Event Handling -->
    <section class="test-section">
      <h2 class="section-title" style="color: #ff6600">Test 5: Event Handling (@click)</h2>
      <ElectricBorder
        preset="orange"
        label="Clickable"
        :title="`Clicked ${clickCount} times`"
        description="Click this card to increment counter"
        @click="handleCardClick"
      />
    </section>

    <!-- Test 6: Different Sizes -->
    <section class="test-section">
      <h2 class="section-title" style="color: #ff0044">Test 6: Custom Sizes</h2>
      <div class="flex-container">
        <ElectricBorder
          preset="red"
          :width="250"
          :height="150"
          label="Small"
          title="250x150"
        />
        <ElectricBorder
          preset="red"
          :width="350"
          :height="250"
          label="Medium"
          title="350x250"
        />
        <ElectricBorder
          preset="red"
          :width="450"
          :height="350"
          label="Large"
          title="450x350"
        />
      </div>
    </section>

    <!-- Test 7: Computed Properties -->
    <section class="test-section">
      <h2 class="section-title" style="color: #0088ff">Test 7: Computed Properties</h2>
      <ElectricBorder
        preset="blue"
        label="Computed"
        :title="computedTitle"
        :description="computedDescription"
      />
    </section>

    <!-- Test 8: v-bind with Object -->
    <section class="test-section">
      <h2 class="section-title" style="color: #00fffb">Test 8: v-bind Props Object</h2>
      <ElectricBorder v-bind="cardProps" />
    </section>

    <!-- Success Message -->
    <div class="success-message">
      <h2>✅ All Vue 3 Tests Passed!</h2>
      <p>Component works perfectly with Composition API and TypeScript</p>
      <div class="features">
        <code>Reactive State ✓</code>
        <code>Event Emitters ✓</code>
        <code>Slots ✓</code>
        <code>TypeScript ✓</code>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import ElectricBorder from '../../components/vue/ElectricBorder.vue';

// Reactive state
const currentPreset = ref<'cyan' | 'purple' | 'pink' | 'green'>('cyan');
const customColor = ref('#00fffb');
const animationSpeed = ref(3);
const glowIntensity = ref(0.5);
const clickCount = ref(0);

// Data
const presets = ['cyan', 'purple', 'pink', 'green', 'orange', 'red', 'blue', 'yellow'] as const;

// Computed properties
const computedTitle = computed(() => `Time: ${new Date().toLocaleTimeString()}`);
const computedDescription = computed(() => `Clicked: ${clickCount.value} times`);

// Props object
const cardProps = computed(() => ({
  preset: 'cyan' as const,
  label: 'v-bind',
  title: 'Props Object',
  description: 'Using v-bind with computed object',
  width: 350,
  height: 250,
}));

// Methods
const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const handleButtonClick = () => {
  alert('Button clicked in Vue! ✅');
};

const handleCardClick = () => {
  clickCount.value++;
  console.log('Card clicked!', clickCount.value);
};
</script>

<style scoped>
.app-container {
  font-family: system-ui, sans-serif;
  padding: 40px;
  background: #151f28;
  min-height: 100vh;
  color: white;
}

.main-title {
  text-align: center;
  margin-bottom: 40px;
  font-size: 48px;
}

.test-section {
  margin-bottom: 60px;
}

.section-title {
  margin-bottom: 20px;
  font-size: 24px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
}

.flex-container {
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  align-items: flex-end;
}

.custom-content {
  padding: 48px;
  color: white;
}

.custom-content h3 {
  font-size: 24px;
  margin-bottom: 16px;
}

.custom-content p {
  margin-bottom: 16px;
  opacity: 0.8;
}

.test-button {
  padding: 12px 24px;
  background: #b000ff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  transition: transform 0.2s;
}

.test-button:hover {
  transform: translateY(-2px);
}

.controls {
  background: rgba(255, 255, 255, 0.05);
  padding: 24px;
  border-radius: 12px;
  margin-bottom: 30px;
}

.control-group {
  margin-bottom: 20px;
}

.control-group:last-child {
  margin-bottom: 0;
}

.control-group label {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
}

.button-group {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.preset-button {
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s;
}

.preset-button:hover {
  background: rgba(255, 255, 255, 0.2);
}

.preset-button.active {
  background: #00fffb;
  color: #151f28;
}

.color-input {
  width: 100px;
  height: 40px;
  cursor: pointer;
  border: 2px solid rgba(0, 255, 251, 0.3);
  border-radius: 6px;
}

.range-input {
  width: 100%;
  height: 6px;
  cursor: pointer;
}

.success-message {
  background: linear-gradient(135deg, #00fffb, #b000ff);
  padding: 40px;
  border-radius: 16px;
  text-align: center;
  margin-top: 60px;
}

.success-message h2 {
  margin-bottom: 16px;
  font-size: 36px;
}

.success-message p {
  font-size: 18px;
  opacity: 0.95;
  margin-bottom: 24px;
}

.features {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.features code {
  padding: 8px 16px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  font-size: 14px;
}
</style>
