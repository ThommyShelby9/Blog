<template>
    <div class="header_content_navbar_right">
        <input type="text" id="ville" placeholder="Entrez une ville ou un pays">
        <input type="submit" id="submit" value="Soumettre">
    </div>
</template>

<style scoped>

#ville{
    padding: 7px;
    border-radius: 20px 0 0 20px;
    border: none;
}

#ville:focus{
    outline: none;
}

#submit{
    padding: 7px;
    border-radius: 0 20px 20px 0;
    cursor: pointer;
}

#submit:hover{
    background-color: red;
}

</style>