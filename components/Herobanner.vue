<template>
  <UContainer class="h-[calc(100vh-68px)] flex items-center">
    <div class="md:flex justify-center items-center">
      <div class="md:w-1/2">
        <h1 class="text-5xl leading-snug text-greenhaze-200 font-bold">
          Je transforme vos idées en expériences digitales
        </h1>
        <div class="bg-greenhaze-300 inline-block -rotate-2 h-[60px]">
          <h1
            ref="headerSpan"
            class="text-5xl text-greenhaze-950 font-bold mt-2 rotate-2"
            @mouseover="randomLetter"
          >
            impactantes.
          </h1>
        </div>
        <h2 class="text-greenhaze-200 font-bold text-2xl my-4">
          Développeur Web spécialisé en SaaS & UI/UX Designer.
        </h2>
        <UButton label="Voir mes projet" class="transition ease-in" />
      </div>
      <div class="md:w-1/2">
        <Three />
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import Three from "./Three.vue";

const letters = "abcdefghijklmnopqrstuvwxyz";

const headerSpan = ref<HTMLElement | null>(null);

console.log(headerSpan);

onMounted(() => {
  if (headerSpan.value) {
    headerSpan.value.dataset.value = headerSpan.value.innerText;
  }
});

const randomLetter = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  if (!target.dataset.value) return;

  let iterations = 0;
  const originalText = target.dataset.value;

  const interval = setInterval(() => {
    target.innerText = originalText
      .split("")
      .map((letter, index) => {
        if (index < iterations) {
          return originalText[index];
        }
        return letters[Math.floor(Math.random() * letters.length)];
      })
      .join("");

    if (iterations >= originalText.length) {
      clearInterval(interval);
    }

    iterations += 1 / 3;
  }, 50);
};
</script>
