<template>
<!--  <header class="bg-white sticky top-0 z-50">-->
<!--    <div class="flex justify-between items-center p-3">-->
<!--      <NuxtLink to="/" aria-label="ASAP Home">-->
<!--        <img src="~/assets/images/header/logo.png" alt="ASAP Logo" class="w-auto" />-->
<!--      </NuxtLink>-->

<!--        &lt;!&ndash; Center: Navigation &ndash;&gt;-->
<!--        <nav class="flex flex-1">-->
<!--          <NuxtLink-->
<!--                v-for="link in navLinks"-->
<!--                :key="link.path"-->
<!--                :to="link.path"-->
<!--                class="relative px-2 py-1 text-lg text-gray-800 ml-40"-->
<!--                :class="isActive(link.path) ? 'font-semibold' : 'font-normal'"-->
<!--                :aria-current="isActive(link.path) ? 'page' : undefined"-->
<!--              >-->
<!--                {{ link.label }}-->
<!--                <span-->
<!--                  v-if="isActive(link.path)"-->
<!--                  class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-red-600 rounded"-->
<!--                ></span>-->
<!--              </NuxtLink>-->
<!--        </nav>-->
<!--    </div>-->
<!--  </header>-->

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

  </UHeader>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
const route = useRoute()

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

