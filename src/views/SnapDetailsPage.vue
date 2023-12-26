<template>
    <ion-page>
        <!-- top bar component -->
        <top-bar :title="snap ? snap.title : 'Loading...'" :page-default-back-link="'/snaps'"></top-bar>
        <ion-content :fullscreen="true">
            <h3 class="ion-text-center" v-if="!snap">Could not find snap</h3>
            <snap-preview v-else :snap="snap"></snap-preview>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent } from "@ionic/vue";
import { defineComponent, computed, ref } from "vue";
import { useStore } from "vuex";
import { Snap } from "../models/snap";
import { useRoute } from "vue-router";

import SnapPreview from "../components/snaps/SnapPreview.vue";

export default defineComponent({
    setup() {
        const store = useStore();
        const route = useRoute();

        const snapId = ref(route.params.id);
        const snap = computed<Snap>(() => store.getters.snap(snapId.value));

        return {
            snap,
            snapId,
        };
    },
    components: {
    IonPage,
    IonContent,
    SnapPreview
},
});
</script>
