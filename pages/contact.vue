<template>
  <div class="pages-contact relative flex flex-col pl-20">
    <img class="absolute pages-contact-bg" src="~/assets/images/contact/bg.png" alt="">
    <h1 class="mt-40">Growth,<br />
      Driven by Technology.</h1>
    <h2 class="mt-8">Henrijayer is a world-leading expert in mobile <br />
      marketing technology.</h2>
    <h2 class="mt-8">
      We believe that in the complex ios ecosystem, the key to<br />
      unlocking sustainable growth for advertisers is the perfect<br />
  synergy of intelligent technology and human expertise.
    </h2>
    <div class="form-container flex justify-center">
      <UForm :state="state" :validate="validate" @submit="onSubmit" @error="onError">
        <UFormField label="Name" name="name">
          <UInput v-model.trim="state.name" />
        </UFormField>
        <UFormField label="Company" name="company">
          <UInput v-model.trim="state.company" />
        </UFormField>
        <UFormField label="Email" name="email">
          <UInput v-model.trim="state.email" />
      </UFormField>
        <UFormField label="Business Needs" name="businessNeeds">
          <UTextarea v-model.trim="state.businessNeeds" />
        </UFormField>
        <UButton type="submit">
          Submit
        </UButton>
      </UForm>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {FormError, FormErrorEvent, FormSubmitEvent } from '@nuxt/ui'
const state = reactive({
  name: undefined,
  company: undefined,
  email: undefined,
  businessNeeds: undefined
})

type Schema = typeof state

function validate(state: Partial<Schema>): FormError[] {
  const errors= []
  if (!state.name) errors.push({ name: 'name', message: 'Required' })
  if (!state.company) errors.push({ name: 'company', message: 'Required' })
  if (!state.email) errors.push({ name:'email', message: 'Required' })
  if (!state.businessNeeds) errors.push({ name: 'businessNeeds', message: 'Required' })
  return errors
}

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({ title: 'Success', description:'Theform has been submitted.', color: 'success'})
console.log(event.data)
}

async function onError(event: FormErrorEvent) {
  if (event?.errors?.[0]?.id) {
    const element = document.getElementById(event.errors[0].id)
    element?.focus()
    element?.scrollIntoView({ behavior: 'smooth', block: 'center'})
 }
}
</script>

<style lang="scss">
.pages-contact {
  &-bg {
    top: 0;
    left: 0;
    z-index: -1;
  }
  h1 {
    font-size: 56px;
  }
 h2 {
    font-size: 30px;
    line-height: 56px;
  }
  h3 {
    font-size: 24px;
  }

  // Form styling
  .contact-form {
    background-color: #f8f9fa;
    border-radius: 16px;
    padding: 32px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin: 0 auto;
    margin-top: 32px;
   border: 1px solid #e9ecef;
  }

  // Input fields
  .u-input {
    border: 1px solid #d1d5da !important;
    border-radius: 8px;
    padding: 12px 16px;
    font-size: 14px;
    transition: all 0.2s ease;
   &:focus {
      outline: none;
      border-color: #3b82f6 !important;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1) !important;
    }
  }

  // Textarea
  .u-textarea {
    border: 1px solid #d1d5da !important;
    border-radius: 8px;
    padding: 12px 16px;
    font-size: 14px;
    min-height: 100px;
    resize: vertical;
    transition: all 0.2s ease;
   &:focus {
      outline: none;
      border-color: #3b82f6 !important;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1) !important;
    }
  }

  // Submitbutton
  .u-button {
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    color: white;
    border: none;
    border-radius: 8px;
    padding: 12px 32px;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s ease;
    margin-top: 16px;
    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 6pxrgba(0, 0, 0, 0.1);
    }
    &:active {
      transform: translateY(0);
    }
  }

  // Contact email
  .contact-email {
    text-align: center;
    margin-top: 24px;
    font-size: 14px;
    color: #1f2937;
    font-weight: 600;
  }
}
</style>