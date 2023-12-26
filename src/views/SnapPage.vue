<template>
  <ion-page>
    <!-- top bar component -->
    <top-bar title="Snaps"></top-bar>
    <ion-content :fullscreen="true">
      <snap-list :snaps="snaps"></snap-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonContent,
} from "@ionic/vue";

import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import { Snap } from "../models/snap";

import SnapList from "../components/snaps/SnapList.vue";

export default defineComponent({
  setup() {
    const store = useStore();

    const snaps = computed<Snap[]>(() => {
      return store.getters.snaps;
    });

    return {
      snaps
    };
  },
  components: {
    IonPage,
    IonContent,
    SnapList
  },
});
</script>