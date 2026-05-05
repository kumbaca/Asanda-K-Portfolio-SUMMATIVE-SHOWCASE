<script setup>
import { reactive } from 'vue'

const form = reactive({
  project: '',
  oneLine: '',
  fullBrief: '',
  email: ''
})

const errors = reactive({
  project: '',
  oneLine: '',
  fullBrief: '',
  email: ''
})

const validate = () => {
  let valid = true

  // Reset errors
  errors.project = ''
  errors.oneLine = ''
  errors.fullBrief = ''
  errors.email = ''

  if (!form.project.trim()) {
    errors.project = 'Project name is required'
    valid = false
  }

  if (!form.oneLine.trim()) {
    errors.oneLine = 'One line brief is required'
    valid = false
  }

  if (!form.fullBrief.trim()) {
    errors.fullBrief = 'Full brief is required'
    valid = false
  }

  if (!form.email.trim()) {
    errors.email = 'Email is required'
    valid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Enter a valid email'
    valid = false
  }

  return valid
}

const handleSubmit = () => {
  if (validate()) {
    alert('Form submitted successfully 🚀')
    // 👉 later you can send to backend / email service
  }
}
</script>

<template>
  <section class="brief">

    <h2 class="section-title">BRIEF</h2>

    <form @submit.prevent="handleSubmit" class="brief-form">

      <input v-model="form.project" placeholder="Project Name" />
      <span class="error">{{ errors.project }}</span>

      <input v-model="form.oneLine" placeholder="One Line Brief" />
      <span class="error">{{ errors.oneLine }}</span>

      <textarea v-model="form.fullBrief" placeholder="Full Brief"></textarea>
      <span class="error">{{ errors.fullBrief }}</span>

      <input v-model="form.email" placeholder="Email" />
      <span class="error">{{ errors.email }}</span>

      <button type="submit" class="btn-brief">Submit</button>

    </form>
  </section>
</template>