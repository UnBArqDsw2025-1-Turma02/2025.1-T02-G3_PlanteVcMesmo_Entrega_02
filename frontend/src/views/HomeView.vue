<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
  <main class="flex flex-col gap-5 h-screen">
    <div class="w-screen h-[75vh] bg-center bg-[url(home.jpg)]"></div>
    <div class="flex flex-col items-center justify-between gap-2.5">
      <Button class="bg-primary-green w-72 h-12 text-base rounded-2xl">
        Começar Agora
      </Button>
      <div class="flex items-center justify-between gap-5">
        <span class="block border-t-2 border-primary-green w-28"></span>
        <span class="text-xs">
          Ou
        </span>
        <span class="block border-t-2 border-primary-green w-28"></span>
      </div>
      <Button class="bg-primary-beige w-72 h-12 text-base rounded-2xl">
        Login com Google
      </Button>
    </div>
  </main>
</template>
