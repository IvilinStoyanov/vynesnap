<template>
 <ion-page>
    <ion-header>
        <ion-toolbar>
        <ion-title>Snap</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Snap</ion-title>
        </ion-toolbar>
      </ion-header>

      <ExploreContainer name="Snap Page" />
    </ion-content>
 </ion-page>
</template>

<script setup lang="ts">
 import { IonPage, IonHeader, IonTitle, IonContent } from '@ionic/vue';
 import ExploreContainer from '@/components/ExploreContainer.vue';
</script>