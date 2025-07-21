import { defineRule } from 'vee-validate'

defineRule('required', (value, [field]) => {
  if (!value || !value.length) {
    return `${field} tidak boleh kosong`
  }
  return true
})

defineRule('email', (value) => {
  if (!/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/.test(value)) {
    return 'Format email tidak valid'
  }

  return true
})
