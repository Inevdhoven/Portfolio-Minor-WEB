<script setup lang="ts">
    import api from '../modules/api';
    import { onMounted, ref } from 'vue'

    //Source: https://upmostly.com/vue-js/get-data-from-an-api-in-a-vue-component-with-the-fetch-api
    const myData = ref([])

    api.displayData().then((result) => {
        myData.value = result
    });

</script>

<template>
    <section>
        <h2>My GitHub</h2>
        <article>
            <div>
                <p>Username: {{ myData.login }}</p>
                <p>Name: {{ myData.name }}</p>
                <p>Location: {{ myData.location }}</p>
                <p>Bio: {{ myData.bio }}</p>
                <p>My website: <a :href="myData.blog">{{ myData.blog }}</a></p>
                <p>Total repos: {{ myData.public_repos }}</p>
                <p>Followers: {{ myData.followers }}</p>
                <p>Following: {{ myData.following }}</p>
            </div>
            <!-- Source for image: https://forum.freecodecamp.org/t/unable-to-insert-data-from-api-as-img-src-in-vue-js/570492/4 -->
            <img :src="myData.avatar_url" alt="Image of {{ myData.login }}">
        </article>
    </section>
</template>

<style scoped>
    article:first-of-type {
        padding: 2rem;
    }

    article:first-of-type div {
        max-width: 60cqi;
    }

    article:first-of-type div p a {
        color: var(--code-green);
        transition: color 250ms ease;
    }

    article:first-of-type div p a:hover {
        color: var(--code-blue);
    }

    article:first-of-type img {
        max-width: 40cqi;
        border-radius: 1rem;
        order: -1;
    }

    @container (max-width: 40em) {
        article:first-of-type {
            flex-direction: column;
        }

        article:first-of-type div {
            max-width: 100cqi;
        }

        article:first-of-type img {
            max-width: 100%;
        } 
    }
</style>