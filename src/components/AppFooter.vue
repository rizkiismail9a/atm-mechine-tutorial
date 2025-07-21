<script setup>
import { ErrorMessage, Field, Form } from 'vee-validate'
import { ref } from 'vue'
import SubscribeModal from './SubscribeModal.vue'

const openModal = ref(false)
const email = ref('')
const formKey = ref(0)

const submitForm = () => {
  openModal.value = true
  formKey.value++
  email.value = ''
}
</script>

<template>
  <SubscribeModal v-model:open="openModal" />
  <div class="app-footer">
    <div class="footer-content">
      <div class="left-menu">
        <p>Tutorial Mesin ATM</p>
        <span>Tentang Kami</span>
      </div>
      <div class="subscribe-menu">
        <p>Dapatkan update terbaru dari kami!</p>
        <Form :key="formKey" v-slot="{ errors }" @submit="submitForm">
          <div class="form-wrapper">
            <div :class="['input-wrapper', { error: errors['email'] }]">
              <Field
                type="text"
                name="email"
                id="email"
                v-model="email"
                rules="required:Email|email"
                placeholder="Masukkan email kamu"
                validate-on-input
                autocomplete="off"
              />
            </div>
            <button>Langganan</button>
          </div>
          <ErrorMessage name="email" class="validator-message" />
        </Form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-footer {
  margin-top: 24px;
  min-height: 130px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.footer-content {
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.left-menu {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.left-menu p,
.subscribe-menu p {
  font-size: 14px;
  color: #121212;
  letter-spacing: 0.3px;
  line-height: 24px;
  font-weight: 600;
}

.subscribe-menu p {
  text-align: right;
}

.left-menu span {
  font-size: 12px;
  color: #4b4b4b;
  letter-spacing: 0.3px;
  line-height: 24px;
}

.subscribe-menu {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
}

input {
  border: none;
  outline: none;
  font-size: 12px;
}

input::placeholder {
  color: #959595;
  font-size: 12px;
}

input:focus {
  outline: none;
}

.form-wrapper {
  display: flex;
  align-items: center;
}

.input-wrapper {
  border: 1px solid #4b4b4b;
  background-color: white;
  border-radius: 4px 0 0 4px;
  height: 30px;
  padding: 2px 4px;
  width: 180px;
}

.input-wrapper.error {
  border-color: red;
}

button {
  background-color: #1976d2;
  border: none;
  height: 30px;
  padding: 0 12px;
  border-radius: 0 4px 4px 0;
  color: white;
}

.validator-message {
  font-size: 12px;
  color: red;
}

@media screen and (max-width: 375px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .left-menu {
    align-items: center;
  }

  .subscribe-menu {
    align-items: center;
  }

  .subscribe-menu p {
    text-align: center;
  }

  .form-wrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    justify-content: center;
  }
}
</style>
