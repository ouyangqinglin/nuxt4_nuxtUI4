<template>
  <div class="pages-contact relative flex flex-col pl-20">
    <img class="absolute pages-contact-bg" src="~/assets/images/contact/bg.png" alt="">
    <h1 class="mt-40">Growth,<br />
      Driven by Technology.</h1>
    <h3 class="mt-8">Henrijayer is a world-leading expert in mobile <br />
      marketing technology.</h3>
    <h3 class="mt-8">
      We believe that in the complex ios ecosystem, the key to<br />
      unlocking sustainable growth for advertisers is the perfect<br />
 synergy of intelligent technology and human expertise.
    </h3>
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
          <UInput style="width: 680px" v-model.trim="state.email" placeholder="Work Email" />
      </UFormField>
        <UFormField class="mt-6" label="" name="message" size="xl">
          <UTextarea style="width: 680px" v-model.trim="state.message"
                     placeholder="Business Needs: Product ID / Industry / Target Countries / How can we help (Market insights, Keyword expansion, Campaign strategy)"
          />
        </UFormField>
        <div class="flex justify-center">
          <UButton type="submit" class="mt-8 px-14 py-3 cursor-pointer" style="background: linear-gradient(to right, #1A8DFA, #4B36FF)" loading-auto>
            Submit
          </UButton>
        </div>
      </UForm>
      <h3 class="mt-12"><strong>Contact Email:globalbusiness@hljyer.com</strong></h3>
    </div>
 </div>
</template>

<script setup lang="ts">
import { md5 } from "js-md5";
import type {FormError, FormErrorEvent, FormSubmitEvent } from '@nuxt/ui'
const config = useRuntimeConfig()
console.log('config', config)
const state = reactive({
  name: undefined,
  company: undefined,
  email: undefined,
  message: undefined
})

type Schema = typeof state

function validate(state: Partial<Schema>): FormError[] {
  const errors= []
  if (!state.name) errors.push({ name: 'name', message: 'Please input name' })
  if (!state.company) errors.push({ name: 'company', message: 'Please input company' })
  if (!state.email) errors.push({ name:'email', message: 'Please input email' })
  if (!state.message) errors.push({ name: 'message', message: 'Please input business Needs' })
  return errors
}

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
  const url = '/api/v1/common/contact-form'
  const data = await $fetch(url, {
    method: 'POST',
    body: {
      data: event.data,
      timestamp: +(new Date().getTime() / 1000).toFixed(0),
      nonce: "5bf61e5d142cb77a79c37634e0494306",
      sign: md5(JSON.stringify(event.data) + (new Date().getTime() / 1000).toFixed(0) + '5bf61e5d142cb77a79c37634e0494306' + 'v0Wxg11Jl6hH2qxLf8') // 这个sign是用md5加密的，加密规则 md5(JSON.stringify(data) + timestamp + nonce + 'v0Wxg11Jl6hH2qxLf8')
    }
  })
  console.log('data', data)
  if(+data.code === 200) {
    toast.add({ title: 'Success',description:'The form has been submitted.', color: 'success'})
    Object.entries(state).keys().forEach(key => {
      state[key] = undefined
    })

  }
  else toast.add({ title: 'Error',description: data.message, color: 'error'})
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
    width: 100%;
    z-index: -1;
  }
  h1 {
    font-size: 56px;
    font-weight: 700;
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