<template>
        <ion-header>
      <ion-toolbar>
        <ion-title>{{ title }}</ion-title>
      </ion-toolbar>
    </ion-header>
</template>

<script lang="ts">
import { IonHeader, IonToolbar, IonTitle } from '@ionic/vue';
import { defineComponent } from 'vue'

export default defineComponent({
  // type inference enabled
  props: {
    title: String,
  },
  components: {
    IonHeader,
    IonToolbar,
    IonTitle
  }
})
</script>