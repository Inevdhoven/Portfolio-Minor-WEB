<script setup lang="ts">
    import api from '../modules/api';
    import { onMounted, ref, computed } from 'vue'

    const myWork = ref([])

    onMounted(async () => {
        myWork.value = await api.displayMyWork();
    });

    const myWorkComputed = computed(() => {
        return myWork.value.map(work => {
            return {
                id: work.id,
                name: work.name,
                url: work.url,
                description: work.description,
                language: work.language,
                clone_url: work.clone_url
            }
        })
    });

</script>

<template>
    <h2>My work</h2>
    <ul>
        <li v-for="work in myWorkComputed" :key="work.id">
            <a :href="work.url">
                <h3>{{ work.name }}</h3>
                <p>{{ work.description }}</p>
                <span>{{ work.language }}</span>
            </a>
            <a :href="work.clone_url">
                <span>Clone this repo</span>
            </a>
        </li>
    </ul>
</template>

<style scoped>
    h2 {
       margin: 0; 
       font-size: 2rem;
    }
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }
</style>