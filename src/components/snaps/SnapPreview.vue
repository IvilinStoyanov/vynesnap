<template>
    <ion-img img :src="snap?.imgUrl" :alt="snap?.title"></ion-img>
    <h2 class="ion-text-center">{{ snap?.title }}</h2>
    <p class="ion-text-center">{{ snap?.description }}</p>
</template>

<script lang="ts">
import { IonImg } from "@ionic/vue";
import { defineComponent } from "vue";
import { Snap } from "../../models/snap";

export default defineComponent({
    props: {
        snap: Object as () => Snap
    },
    components: {
        IonImg,
    },
});
</script>
