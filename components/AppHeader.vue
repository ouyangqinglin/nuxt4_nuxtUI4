<template>
  <header class="bg-white sticky top-0 z-50">
    <div class="flex justify-between items-center p-3">
      <NuxtLink to="/" aria-label="ASAP Home">
        <img src="~/assets/images/header/logo.png" alt="ASAP Logo" class="h-20 w-auto" />
      </NuxtLink>

        <!-- Center: Navigation -->
        <nav class="flex flex-1">
          <NuxtLink
                v-for="link in navLinks"
                :key="link.path"
                :to="link.path"
                class="relative px-2 py-1 text-lg text-gray-800 ml-40"
                :class="isActive(link.path) ? 'font-semibold' : 'font-normal'"
                :aria-current="isActive(link.path) ? 'page' : undefined"
              >
                {{ link.label }}
                <span
                  v-if="isActive(link.path)"
                  class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-red-600 rounded"
                ></span>
              </NuxtLink>
        </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const route = useRoute()

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Product', path: '/product' },
  { label: 'Contact Us', path: '/contact' }
]

const isActive = (path: string) => {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}
</script>

