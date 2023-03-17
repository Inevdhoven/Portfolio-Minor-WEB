<script setup lang="ts">
    import api from '../modules/api';
    import { onMounted, ref, computed } from 'vue'

    const myWork = ref([])

    onMounted(async () => {
        myWork.value = await api.displayMyWork();
    });

    const myWorkComputed = computed(() => {
        return myWork.value.map(work => {
            console.log(work)
            return {
                id: work.id,
                name: work.name,
                url: work.html_url,
                description: work.description,
                language: work.language,
                clone_url: work.clone_url,
                demo: work.homepage
            }
        })
    });

</script>

<template>
    <section>
        <h2>My work</h2>
        <ul>
            <li v-for="work in myWorkComputed" :key="work.id">
                <a :href="work.demo" target="_blank">
                    <h3>{{ work.name }}</h3>
                    <p>{{ work.description }}</p>
                    <p><span v-if="work.language">{{ work.language }}</span></p>
                </a>
                <a :href="work.url">
                    <span>Go to this repo</span>
                </a>
            </li>
        </ul>
    </section>
</template>

<style scoped>
    h2 {
       margin: 1rem 0; 
       font-size: 2rem;
    }

    ul {
        margin: 0;
        padding: 0;

        display: grid;
        grid-template-columns: 1fr;
        gap: 1.5rem;

        list-style: none;
    }

    ul li {
        display: grid;
        align-items: stretch;
    }

    ul li a {
        display: grid;
    }

    ul li a:last-of-type {
        position: absolute;
        right: 1rem;
        bottom: 1rem;
    }

    ul li p {
        margin: 0.5rem 0 1rem;
    }

    ul li a p:last-of-type {
        margin: 0;
        position: relative;
        display: flex;
        align-items: flex-end;
    }

    ul li a:first-of-type span {
        width: fit-content;
        padding: 0.25rem 0.5rem;
        border-radius: 0.5rem;

        display: flex;
        align-items: flex-end;

        position: relative;

        background-color: var(--code-purple);
    }

    ul li a:last-of-type span {
        transition: color 250ms ease;
    }

    ul li a:last-of-type:hover span {
        color: var(--code-blue);
    }

    @container (min-width: 40rem) {
        ul {
            grid-template-columns: 1fr 1fr;
        }
    }

    @container (min-width: 55rem) {
        ul {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
</style>