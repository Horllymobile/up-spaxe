<template>
<div class="container">
    <app-search-input></app-search-input>
        <div class="container">
            
        </div>
    <app-category></app-category>
</div>
</template>

<script>
import appSearchInput from './../components/UI/search_input';
import appCategory from './../components/UI/category';
export default {

    components: {
        appSearchInput,
        appCategory
    }

}
</script>
