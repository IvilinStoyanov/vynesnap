<template>
    <ion-page>
        <!-- top bar component -->
        <top-bar :title="'Create Snap'" :page-default-back-link="'/snaps'"></top-bar>
        <ion-content :fullscreen="true">
            <snap-create-form @save-snap="createSnap"></snap-create-form>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent } from "@ionic/vue";
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { Snap } from "../models/snap";
import { useRouter } from "vue-router";

import SnapCreateForm from "../components/snaps/SnapCreateForm.vue";

export default defineComponent({
    setup() {
        const store = useStore();
        const router = useRouter();


        const createSnap = (snapsData: Snap) => {
            store.dispatch('createSnap', snapsData);
            router.push('/snaps');
        };

        return {
            createSnap
        };
    },
    components: {
        IonPage,
        IonContent,
        SnapCreateForm
    },
});
</script>
