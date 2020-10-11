<template>
<div class="container mt-5">
    <div class="row">
        <div class="col-lg-3" v-for="(item, index) in categories" :key="index">
            <router-link :to="item.link">
                <div class="card-deck">
                    <div class="card">
                        <img class="card-img-top" src="holder.js/100x180/" alt="">
                        <div class="card-body">
                            <h4 class="card-title"> {{ item.title }} </h4>
                        </div>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            categories: [{
                    title: 'Building and Construction',
                    link: '/building_construction'
                },
                {
                    title: 'Technology and IT',
                    link: '/tech'
                },
                {
                    title: 'Business',
                    link: '/business'
                },
                {
                    title: 'Others',
                    link: '/others'
                }
            ]
        }
    }
}
</script>
