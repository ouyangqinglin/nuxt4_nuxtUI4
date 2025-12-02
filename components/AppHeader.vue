<template>
  <UHeader style="height: 100px;"
           :ui="{
    container: 'max-w-10xl'
           }"
  >
    <template #left>
      <NuxtLink to="/" aria-label="ASAP Home">
        <img src="~/assets/images/header/logo.png" alt="ASAP Logo" />
      </NuxtLink>
    </template>

    <UNavigationMenu :items="navLinks"
                     class="customer-nav"
                     color="neutral"
                     highlight
                     highlightColor="error"
                     :ui="{
                      item: 'px-20',
                      link: 'text-lg'
                     }"
    />
    <template #right>
      <ULocaleSelect v-model="locale" :locales="[en]" />
    </template>
  </UHeader>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { en } from '@nuxt/ui/locale'

const locale = ref('en')

const navLinks = computed<NavigationMenuItem[]>(() =>  [
  { label: 'Home', to: '/' },
  { label: 'Product', to: '/product' },
  { label: 'Contact Us', to: '/contact' }
])

</script>

<style lang="scss">
.customer-nav {
  a::after {
    height: 2px; /* Set your desired height */
  }
}

</style>

