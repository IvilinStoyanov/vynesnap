<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button :disabled="checkTabDisabled($route.path, '/snaps/')" tab="snaps" href="/snaps">
          <ion-icon aria-hidden="true" :icon="square" />
          <ion-label>Snaps</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab1" href="/tab1">
          <ion-icon aria-hidden="true" :icon="triangle" />
          <ion-label>Tab 1</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tab2">
          <ion-icon aria-hidden="true" :icon="ellipse" />
          <ion-label>Tab 2</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from "@ionic/vue";
import { defineComponent } from 'vue';
import { ellipse, square, triangle } from "ionicons/icons";

export default defineComponent({
  components: {
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonLabel,
    IonIcon,
    IonPage,
    IonRouterOutlet,
  },
  setup() {
    const checkTabDisabled = (currentRoute: string, tabName: string): boolean => {
      return currentRoute.includes(tabName);
    };

    return {
      checkTabDisabled,
      ellipse,
      square,
      triangle,
    }
  }
});
</script>
