<template>
    <ion-item :router-link="`/snaps/${snap?.id}`">
        <ion-thumbnail slot="end">
            <ion-img img :src="snap?.imgUrl" :alt="snap?.title"></ion-img>
        </ion-thumbnail>
        {{ snap?.title }}
    </ion-item>
</template>

<script lang="ts">
import { IonItem, IonImg, IonThumbnail } from "@ionic/vue";
import { defineComponent } from "vue";
import { Snap } from "../../models/snap";

export default defineComponent({
    props: {
        snap: Object as () => Snap
    },
    components: {
        IonItem,
        IonImg,
        IonThumbnail,
    },
});
</script>
