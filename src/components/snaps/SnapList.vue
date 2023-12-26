<template>
    <ion-list>
        <snap-list-item v-for="snap of snaps" :key="snap.id" :snap="snap"></snap-list-item>
    </ion-list>
</template>

<script lang="ts">
import { IonList } from "@ionic/vue";
import { defineComponent } from "vue";
import { Snap } from "../../models/snap";

import SnapListItem from './SnapListItem.vue';

export default defineComponent({
    props: {
        snaps: Array<Snap>,
        pageDefaultBackLink: String
    },
    components: {
        IonList,
        SnapListItem
    },
});
</script>
