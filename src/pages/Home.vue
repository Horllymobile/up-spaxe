<template>
<div class="container">
    <app-search-input></app-search-input>

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
