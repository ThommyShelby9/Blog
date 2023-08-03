<script lang="ts" setup>
import Input from '@/components/icons/inputNavbar.vue'
</script>

<template>
    <nav class="header_content_navbar">
        <div class="header_content_navbar_menu">
            <ul>
                <a href="#">
                    <li><span>Buletin |</span></li>
                </a>
                <a href="#">
                    <li>Stories</li>
                </a>
                <a href="#">
                    <li>Creator</li>
                </a>
                <a href="#">
                    <li>Community</li>
                </a>
                <a href="#">
                    <li>Suscribe</li>
                </a>
            </ul>
        </div>
        <Input />
    </nav>
</template>

<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 16px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    position: relative;
}


.header_content_navbar{
    padding-top: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.header_content_navbar_menu ul{
    display: flex;
    gap: 20px;
    padding-right: 20px;
    align-items: center;
    justify-content: center;
}

.header_content_navbar_menu ul li:hover{
    color: red;
    text-decoration:overline;
}

.header_content_navbar_menu span{
    color: red;
    font-size: 20px;
    font-weight: 800;
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

</style>