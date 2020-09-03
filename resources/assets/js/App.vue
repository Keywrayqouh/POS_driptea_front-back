<template>
    <div id="app">
        <nav class="navbar navbar-expand-sm navbar-light" style="background-color: #17D817"> 
            <img style="height: 50px; margin-left: 2%;" :src="image" v-on:click="redirect('/')">
            <a class="navbar-brand" href="#">Driptea</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-list-2" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbar-list-2">
                <ul class="navbar-nav ml-auto"> 
                    <li class="nav-item" v-on:click="redirect('/register')"><a class="nav-link">Register</a></li>
                    <li class="nav-item" v-on:click="redirect('/')"><a class="nav-link">Login</a></li>
                </ul>
            </div>
        </nav>
        <div class="container">
            <router-view></router-view>
        </div>
        <footer>
            <div style="background-color: #DEDEDE">
                <nav class="navbar navbar-expand-sm navbar-light"> 
                    <img style="height: 50px; margin-left: 2%;" :src="image" v-on:click="redirect('/')">
                    <a class="navbar-brand" href="#">Driptea</a>
                    <ul class="navbar-nav ml-auto"> 
                        <li class="nav-item" v-on:click="redirect('/')"><a class="nav-link">Facebook</a></li>
                        <li class="nav-item" v-on:click="redirect('/')"><a class="nav-link">Twitter</a></li>
                        <li class="nav-item" v-on:click="redirect('/')"><a class="nav-link">Blog</a></li>
                    </ul> 
                </nav>
                <center>
                    <span class="copyright">
                        <label>Copyright @Driptea. All rights reserved.</label>
                    </span>
                </center>
            </div>
        </footer>
    </div>
</template>
<style lang="scss" scoped>
.copyright {
    font-size: 13px;
}
ul {
    margin-right: 2%;
}
a {
    font-weight: bold
}
li {
    cursor: pointer;
}
</style>
<script>
import ROUTER from '../router'
import image from "../image/logo.png"
export default {
    name: "app",
    data(){
        return {
            image: image
        }
    },
    components: {
        // header,
    },
    methods: {
        redirect(route){
            ROUTER.push(route).catch(()=>{})
        }
    }
}
</script>