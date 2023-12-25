<template>
    <ion-page>
        <!-- top bar component -->
        <top-bar :title="'Snap Details'"></top-bar>
        <ion-content :fullscreen="true">
            <h2>test 1</h2>
            <h2>test 2</h2>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';


export default defineComponent({
    components: {
        IonPage,
        IonContent
    }
})
</script>