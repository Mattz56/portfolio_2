<template>
  <nav class="p-4 flex justify-between">
    <div class="">
      <img src="../public/images/logo-full-darkm.svg" alt="logo full name" />
    </div>
    <div class="flex items-center justify-center">
      <UButton
        icon="i-fa6-solid-lightbulb"
        variant="link"
        class="text-yellow-200 mr-3 hover:text-yellow-100"
      />
      <div class="mr-4 flex gap-4">
        <a class="text-greenhaze-50 text-lg font-medium">{{
          t("navbar.about")
        }}</a>
        <a class="text-greenhaze-50 text-lg font-medium">{{
          t("navbar.skills")
        }}</a>
        <a class="text-greenhaze-50 text-lg font-medium">{{
          t("navbar.project")
        }}</a>
        <a class="text-greenhaze-50 text-lg font-medium">{{
          t("navbar.contact")
        }}</a>
      </div>
      <div class="flex items-center">
        <div class="">
          <img
            src="../public/images/uk.png"
            class="w-5 h-5 rounded-full"
            alt=""
          />
        </div>
        <p class="text-greenhaze-50 font-semibold ml-1 text-lg">En</p>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>
