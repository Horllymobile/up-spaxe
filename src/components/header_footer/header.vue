<template>
<div>
    <nav class="navbar navbar-expand-sm navbar-light">
        <div class="container">
            <router-link class="navbar-brand" to="/home" exact-active-class="active">Up-Spaxe</router-link>
            <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <router-link class="nav-link" to="/about" exact-active-class="active">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/signin" exact-active-class="active">Signin</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>
</template>
