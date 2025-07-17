<script>
import ContentRenderer from '@/components/ContentRenderer.vue'

export default {
  components: { ContentRenderer },
  data() {
    return {
      steps: [],
      currentStep: 0,
      direction: 'next', // 'next' or 'prev' for animation
    }
  },
  async created() {
    // Fetch the JSON file (assuming it's in /public)
    const response = await fetch('/transfer.json')
    this.steps = await response.json()
  },
  methods: {
    nextStep() {
      if (this.currentStep < this.steps.length - 1) {
        this.direction = 'next'
        this.currentStep++
      }
    },
    prevStep() {
      if (this.currentStep > 0) {
        this.direction = 'prev'
        this.currentStep--
      }
    },
    handleNextOrFinish() {
      if (this.currentStep === this.steps.length - 1) {
        this.$router.push('/')
      } else {
        this.nextStep()
      }
    },
  },
}
</script>

<template>
  <div style="position: relative; min-height: 60vh">
    <div class="warning-box">
      <strong>Perhatian!</strong><br />
      Ini adalah simulasi dan hanya untuk kebutuhan edukasi. Jangan pernah bagikan informasi pribadi
      anda ke siapapun
    </div>
    <transition :name="direction === 'next' ? 'swipe-left' : 'swipe-right'" mode="out-in">
      <div :key="currentStep" style="width: 100%">
        <div v-if="steps.length">
          <h1>Langkah {{ currentStep + 1 }}</h1>
          <ContentRenderer :content="steps[currentStep]" />
        </div>
      </div>
    </transition>
    <div class="nav-buttons">
      <span v-if="currentStep > 0">
        <button @click="prevStep" :disabled="currentStep === 0">Sebelumnya</button>
      </span>
      <span v-else>
        <button class="finish-btn">
          <RouterLink to="/"> Beranda</RouterLink>
        </button>
      </span>
      <button
        @click="handleNextOrFinish"
        :disabled="steps.length === 0"
        :class="{ 'finish-btn': currentStep === steps.length - 1 }"
      >
        {{ currentStep === steps.length - 1 ? 'Selesai' : 'Lanjut' }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.nav-buttons {
  position: fixed;
  bottom: 32px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  z-index: 100;
  padding: 0 2vw;
}

.nav-buttons button {
  padding: 0.75rem 2rem;
  font-size: 1.1rem;
  border-radius: 2rem;
  border: none;
  background: #1976d2;
  color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background 0.2s;
}

.nav-buttons button:disabled {
  background: #b0b0b0;
  cursor: not-allowed;
}

.nav-buttons .finish-btn {
  background: #43a047 !important;
}

/* Swipe left (next) */
.swipe-left-enter-active,
.swipe-right-leave-active {
  transition: all 0.4s cubic-bezier(0.55, 0, 0.1, 1);
}
.swipe-left-enter,
.swipe-right-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
.swipe-left-leave-active,
.swipe-right-enter-active {
  transition: all 0.4s cubic-bezier(0.55, 0, 0.1, 1);
}
.swipe-left-leave-to,
.swipe-right-enter {
  transform: translateX(-100%);
  opacity: 0;
}

/* Swipe right (prev) */
.swipe-right-enter-active,
.swipe-left-leave-active {
  transition: all 0.4s cubic-bezier(0.55, 0, 0.1, 1);
}
.swipe-right-enter,
.swipe-left-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
.swipe-right-leave-to,
.swipe-left-enter {
  transform: translateX(100%);
  opacity: 0;
}

.warning-box {
  background-color: #fff7e6;
  color: #a15c00;
  border: 1px solid #ffe0b2;
  border-radius: 6px;
  padding: 12px 16px;
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0 1px 4px rgba(213, 213, 213, 0.2);
}
</style>
