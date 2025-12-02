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
    <div class="form-container px-20 py-12 flex flex-col items-center justify-center">
      <h2>Contact Form</h2>
      <UForm class="mt-6" :state="state" :validate="validate" @submit="onSubmit" @error="onError" style="width: 680px">
        <UFormField label="" name="name" size="xl" style="width: 680px">
          <UInput style="width: 680px" v-model.trim="state.name" placeholder="Name" />
        </UFormField>
        <UFormField class="mt-6" label="" name="company" size="xl">
          <UInput style="width: 680px" v-model.trim="state.company" placeholder="Company" />
        </UFormField>
        <UFormField class="mt-6" label="" name="email" size="xl">
          <UInput style="width: 680px" v-model.trim="state.email" placeholder="Email" />
      </UFormField>
        <UFormField class="mt-6" label="" name="businessNeeds" size="xl">
          <UTextarea style="width: 680px" v-model.trim="state.businessNeeds"
                     placeholder="Business Needs: Product ID / Industry / Target Countries / How can we help (Market insights, Keyword expansion, Campaign strategy)"
          />
        </UFormField>
        <div class="flex justify-center">
          <UButton type="submit" class="mt-6 px-10 py-2" style="background: linear-gradient(to right, #1A8DFA, #4B36FF)">
            Submit
          </UButton>
        </div>
      </UForm>
      <h3 class="mt-6">Contact Email:globalbusiness@hljyer.com</h3>
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
  toast.add({ title: 'Success',description:'The form has been submitted.', color: 'success'})
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
  .form-container {
    margin: 60px auto;
    background-color: rgba(237,244,248, .9);
    border-radius: 16px;
    box-shadow: 4px 4px 6px rgba(206,217,226, 0.7), -4px -4px 6px rgba(206,217,226, 0.7);
  }

}
</style>