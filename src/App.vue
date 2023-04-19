<script setup>
import BaseLayout from '@/components/layout/BaseLayout.vue'
import SectionIntro from '@/components/business/SectionIntro.vue'
import SectionAbout from '@/components/business/SectionAbout.vue'
import SectionIngredients from '@/components/business/SectionIngredients.vue'
import SectionClients from '@/components/business/SectionClients.vue'
import SectionAwards from '@/components/business/SectionAwards.vue'
import SectionFounder from '@/components/business/SectionFounder.vue'
import SectionShowcase from '@/components/business/SectionShowcase.vue'
</script>
<template>
  <BaseLayout>
    <SectionIntro />
    <SectionAbout />
    <SectionAwards />
    <SectionIngredients />
    <SectionFounder />
    <SectionClients />
    <SectionShowcase />
  </BaseLayout>
</template>
