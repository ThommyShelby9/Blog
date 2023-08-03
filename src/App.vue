<script setup lang="ts">
import { ref } from 'vue'
import Navbar from '@/components/icons/navBar.vue'
import Article from '@/components/icons/posts.vue'

</script>


<template>
    <div class="wrapper">
        <header class="header">
            <div class="container">
                <div class="header_content">
                   <Navbar />
                </div>
            </div>
        </header>
        <section class="banner">
            <div class="container">
                <div class="banner_content">
                    <div class="banner_content_top">
                        <h4>WELCOME TO BULETIN</h4>
                        <p>Craft narratives that ignite <span> inspiration, <br> knowledge </span>and <span>
                                entertainment</span></p>
                    </div>
                    <div class="banner_content_bottom">
                        <div class="banner_content_bottom_img">
                            <img src="@/assets/Images/JOHN-WICK-CHAPTER-4-Second-Trailer.jpg" alt="">
                        </div>
                        <div class="banner_content_bottom_text">
                            <div class="banner_content_bottom_text_icons">
                                <span class="mdi mdi-netflix"></span>
                                <p>Netflix</p>
                            </div>
                            <div class="banner_content_bottom_text_title">
                                <h4>
                                    Where to watch John <br> WICK : chapter 4'
                                </h4>
                            </div>
                            <div class="banner_content_bottom_text_description">
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br> Repellendus error animi
                                    distinctio enim <br> assumenda molesti
                                </p>
                            </div>
                            <div class="banner_content_bottom_text_type">
                                <h5>
                                    Movies
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <main class="main">
            <div class="container">
                <div class="main_content">
                    <div class="main_content_title">
                        <h4>Latest News</h4>
                        <span>
                            <a href="#">See all &blacktriangleright;</a>
                        </span>
                    </div>
                    <div class="main_content_articles">
                        <Article />
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<style>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 16px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    position: relative;
}

.wrapper{
    display: flex;
    flex-direction: column;
}

.container{
    padding: 0 85px;
    margin: 0 auto;
    max-width: 100%;
}

ul li {
    list-style-type: none;
}

a {
    text-decoration: none;
    color: black;
}

img {
    width: 100%;
    height: auto;
}

body {
    overflow-x: hidden;
}

.header {
    padding: 10px 0;
    z-index: 5;
    width: 100%;
    top: 0;
    left: 0;
    position: fixed; 
    background-color: #FFFFFF;
    box-shadow: 0 0 0 1px;
}

.banner_content{
    padding-top: 120px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}

.banner_content_top{
    border-radius: 1rem;
    padding: 20px 0;
    line-height: 30px;
    background-color: #e4e1e1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.banner_content_top p{
    font-weight: 900;
    font-size: 20px;
}

.banner_content_top h4{
    color: rgba(0, 0, 0, 0.425);
}

.banner_content_top span{
    color: red;
    font-size: 20px;
}

.banner_content_bottom{
    display: flex;
    justify-content: space-between;
    gap: 10px;
    padding-top: 40px;
}

.banner_content_bottom_img{
    width: 40%;
    padding-left: 50px;
}

.banner_content_bottom_img img{
    height: 250px;
    object-fit: cover;
    border-radius: 1rem;
}

.banner_content_bottom_text{
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 2px;
    margin-right:250px;
}

.banner_content_bottom_text_icons{
    display: flex;
    align-items: center;
    gap: 10px;
}

.banner_content_bottom_text_icons span{
    padding-top: 5px;
    border-radius: 20rem;
    width: 25px;
    height: 25px;
    background-color: red;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.banner_content_bottom_text_title h4{
    font-size: 40px;
}

.banner_content_bottom_text_description{
    font-size: 15px;
    color: rgba(0, 0, 0, 0.705);
}

.banner_content_bottom_text_type{
    color: red;
}

.main_content{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 30px;
}

.main_content_title{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.main_content_title h4{
    font-size: 40px;
    color: rgba(0, 0, 0, 0.829);
}

.main_content_title span a{
    color: red;
    font-weight: 900;
}

</style>
