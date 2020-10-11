<template>
<div id="app">
    <header>
        <app-header></app-header>
    </header>
    <main>
        <router-view></router-view>
    </main>
    <footer>
        <app-footer></app-footer>
    </footer>
</div>
</template>

<script>
import appHeader from './components/header_footer/header';
import appFooter from './components/header_footer/footer';

export default {
    name: 'App',
    components: {
        appHeader,
        appFooter
    }
}
</script>

<style>
@import url('./assets/style.css');
</style>
