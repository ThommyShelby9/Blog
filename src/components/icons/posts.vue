<script lang="ts" setup>
import { ref } from 'vue'
import imagePosts from '@/assets/Images/JOHN-WICK-CHAPTER-4-Second-Trailer.jpg'

const posts = ref([
    {
        img: imagePosts,
        title: 'He deserves a lot more Verstappen backs Alonzo',
        description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo assumenda error architecto exercitationem nulla fuga autem expedita vitae a consequuntur.',
        type: 'Movies'
    },
    {
        img: imagePosts,
        title: 'He deserves a lot more Verstappen backs Alonzo',
        image: 'Images/JOHN-WICK-CHAPTER-4-Second-Trailer.jpg',
        description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo assumenda error architecto exercitationem nulla fuga autem expedita vitae a consequuntur.',
        type: 'Movies'
    },
    {
        img: imagePosts,
        title: 'He deserves a lot more Verstappen backs Alonzo',
        image: 'Images/JOHN-WICK-CHAPTER-4-Second-Trailer.jpg',
        description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo assumenda error architecto exercitationem nulla fuga autem expedita vitae a consequuntur.',
        type: 'Movies'
    },
    {
        img: imagePosts,
        title: 'He deserves a lot more Verstappen backs Alonzo',
        image: 'Images/JOHN-WICK-CHAPTER-4-Second-Trailer.jpg',
        description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo assumenda error architecto exercitationem nulla fuga autem expedita vitae a consequuntur.',
        type: 'Movies'
    },
    {
        img: imagePosts,
        title: 'He deserves a lot more Verstappen backs Alonzo',
        image: 'Images/JOHN-WICK-CHAPTER-4-Second-Trailer.jpg',
        description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo assumenda error architecto exercitationem nulla fuga autem expedita vitae a consequuntur.',
        type: 'Movies'
    },
    {
        img: imagePosts,
        title: 'He deserves a lot more Verstappen backs Alonzo',
        image: 'Images/JOHN-WICK-CHAPTER-4-Second-Trailer.jpg',
        description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo assumenda error architecto exercitationem nulla fuga autem expedita vitae a consequuntur.',
        type: 'Movies'
    },
    {
        img: imagePosts,
        title: 'He deserves a lot more Verstappen backs Alonzo',
        image: 'Images/JOHN-WICK-CHAPTER-4-Second-Trailer.jpg',
        description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo assumenda error architecto exercitationem nulla fuga autem expedita vitae a consequuntur.',
        type: 'Movies'
    },
    {
        img: imagePosts,
        title: 'He deserves a lot more Verstappen backs Alonzo',
        image: 'Images/JOHN-WICK-CHAPTER-4-Second-Trailer.jpg',
        description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo assumenda error architecto exercitationem nulla fuga autem expedita vitae a consequuntur.',
        type: 'Movies'
    },
    {
        img: imagePosts,
        title: 'He deserves a lot more Verstappen backs Alonzo',
        image: 'Images/JOHN-WICK-CHAPTER-4-Second-Trailer.jpg',
        description: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo assumenda error architecto exercitationem nulla fuga autem expedita vitae a consequuntur.',
        type: 'Movies'
    },
])
</script>

<template>
    <div class="main_content_articles_item" v-for="element in posts">
        <div class="main_content_articles_item_img">
            <img :src="element.img" alt="">
        </div>
        <div class="main_content_articles_item_title">
            <h4>
                {{ element.title }}
            </h4>
        </div>
        <div class="main_content_articles_item_description">
            <p>{{ element.description }}</p>
        </div>
        <div class="main_content_articles_item_type">
            <h5>
                {{ element.type }}
            </h5>
        </div>
        <div class="main_content_articles_item_link">
            <a href="/detail">
            Voir plus...
        </a>
        </div>
    </div>
</template>

<style>

.main_content_articles {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
    padding-left: 180px;
}

.main_content_articles_item {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 25%;
    height: 100%;
    gap: 10px;
}


.main_content_articles_item_img img {
    object-fit: cover;
    border-radius: 1rem;
    height: 250px;
}

.main_content_articles_item_title h4 {
    font-size: 30px;
    color: rgba(0, 0, 0, 0.842);
}

.main_content_articles_item_description p {
    font-size: 15px;
    color: rgba(0, 0, 0, 0.705);
    text-align: justify;
}

.main_content_articles_item_type h5 {
    font-size: 15px;
    color: rgba(255, 0, 0, 0.842);
}

.main_content_articles_item_link{
    border: 1px solid black;
    padding: 10px;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    cursor: pointer;
}

.main_content_articles_item_link:hover{
    background-color: red;
    color: white;
}

.main_content_articles_item_link a{
    font-size: 20px;
}

</style>