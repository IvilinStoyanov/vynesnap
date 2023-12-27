<template>
  <ion-page>
    <!-- top bar component -->
    <top-bar title="VyneSnap">
      <template v-slot:actions-end>
        <ion-button slot="end" fill="outline" router-link="/snaps/create">
          <ion-icon :icon="add"></ion-icon>
        </ion-button>
      </template>
    </top-bar>
    <ion-content :fullscreen="true">
      <snap-list :snaps="snaps"></snap-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent, IonButton, IonIcon } from "@ionic/vue";
import { useStore } from "vuex";
import { computed, defineComponent } from "vue";
import { add } from "ionicons/icons";

import SnapList from "../components/snaps/SnapList.vue";
import { Snap } from "../models/snap";

export default defineComponent({
  setup() {
    const store = useStore();

    const snaps = computed<Snap[]>(() => {
      return store.getters.snaps;
    });

    return {
      snaps,
      add
    };
  },
  components: {
    IonPage,
    IonContent,
    IonButton,
    IonIcon,
    SnapList,
  },
});
</script>
