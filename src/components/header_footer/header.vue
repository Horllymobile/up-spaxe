<template>
<div>
    <div class="container-fluid bg-dark text-center text-white">
        <a href="https://twitter.com/search?q=%23EndSARS&src=trend_click&vertical=trends">#ENDSARS</a>
        and
        <a href="https://twitter.com/hashtag/EndPoliceBrutality?src=hashtag_click">#ENDPOLICEBRUTALITY</a>
        in Nigeria we are in support to <a href="https://twitter.com/search?q=%23EndSARS&src=trend_click&vertical=trends">#EndSarNow</a>
    </div>
    <nav class="navbar navbar-expand-sm navbar-light">
        <div class="container">
            <router-link class="navbar-brand text-primary" to="/home" exact-active-class="text-scondary">up-spaxe</router-link>
            <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <router-link class="nav-link text-primary" to="/about" exact-active-class="text-scondary">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link text-primary" to="/signin" exact-active-class="text-scondary">Sign in</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link text-primary" to="/signin" exact-active-class="text-scondary">Sign up</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>
</template>
