<script setup lang="ts">
    import api from '../modules/api';
    import { onMounted, ref } from 'vue'

    //Source: https://upmostly.com/vue-js/get-data-from-an-api-in-a-vue-component-with-the-fetch-api
    const myData = ref([])

    api.displayData().then((result) => {
        myData.value = result
        console.log(myData.value)
    });

</script>

<template>
    <article>
        <h2>My GitHub</h2>
        <p>Username: {{ myData.login }}</p>
        <p>Name: {{ myData.name }}</p>
        <p>Location: {{ myData.location }}</p>
        <p>Bio: {{ myData.bio }}</p>
        <p>My website: <a :href="myData.blog">{{ myData.blog }}</a></p>
        <p>Total repos: {{ myData.public_repos }}</p>
        <p>Followers: {{ myData.followers }}</p>
        <p>Following: {{ myData.following }}</p>
        <!-- Source for image: https://forum.freecodecamp.org/t/unable-to-insert-data-from-api-as-img-src-in-vue-js/570492/4 -->
        <img :src="myData.avatar_url" alt="Image of {{ myData.login }}">
    </article>
    <article>
        <h2>More about  me</h2>
        <p>Hi, my name is Ine and I am currently studying Communication and Multimedia Design at the Amsterdam University of Applied Sciences. Before I started this course, I did the Interactive Design course at Grafisch Lyceum Utrecht.</p>
        <p>I really enjoy designing websites with Adobe XD and Figma and building with HTML, CSS (SCSS) and JavaScript. I can also work with Wordpress. What I love about the process of designing and building websites is that you go from a blank canvas to a working site.</p>
        <p>In my spare time I like to be busy with my hobbies, I like to read, I like to be creative and I like to travel.</p>
        <p>Where have I worked and done an internship in this field:</p>
        <ul>
            <li>
                OOSEOO Internet Marketing
                <ul>
                    <li>Internship: February 2019 to July 2019</li>
                    <li>Working: Part-time July to August 2019</li>
                </ul>
            </li>
            <li>
                Draad
                <ul>
                    <li>Internship: September 2019 to February 2020 and April 2022 to July 2022</li>
                    <li>Working: Part-time February 2020 to present</li>
                </ul>
            </li>
        </ul>
        <p>Other places I've worked:</p>
        <ul>
            <li>Albert Heijn Hoevelaken from March 2016 to April 2017.</li>
            <li>De Barbecue Boer from April 2017 to February 2019.</li>
        </ul>
    </article>
</template>

<style scoped>

</style>