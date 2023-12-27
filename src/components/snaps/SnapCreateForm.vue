<template>
    <form class="ion-padding" @submit.prevent="submitForm">
        <ion-list>
            <ion-item>
                <ion-input label="Title" label-placement="floating" type="text" v-model="title" required></ion-input>
            </ion-item>
            <ion-item>
                <ion-input label="Image Url" label-placement="floating" type="url" v-model="imageUrl" required></ion-input>
            </ion-item>
            <ion-item>
                <ion-textarea label="Description" label-placement="floating" :rows="5" type="text" v-model="description"
                    required></ion-textarea>
            </ion-item>
        </ion-list>
        <ion-button fill="outline" expand="block" type="submit">Save</ion-button>
    </form>
</template>

<script lang="ts">
import { Snap } from "@/models/snap";
import { IonList, IonItem, IonInput, IonTextarea, IonButton } from "@ionic/vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
    emits: ['save-snap'],
    setup(_, { emit }) {
        const title = ref('');
        const imageUrl = ref('');
        const description = ref('');

        const submitForm = () => {
            debugger
            const snapsData: Snap = {
                title: title.value,
                imgUrl: imageUrl.value,
                description: description.value
            }

            emit('save-snap', snapsData);

        }

        return {
            title,
            imageUrl,
            description,
            submitForm
        }
    },

    components: {
        IonList,
        IonItem,
        IonInput,
        IonTextarea,
        IonButton
    },
});
</script>