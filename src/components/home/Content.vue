<template>
    <div class="content-body">
        <Aside></Aside>
        <div class="main-body">
            <Header></Header>
            <div class="container-box">
                <router-view/>
            </div>
            <Footer></Footer>
        </div>
    </div>
</template>


<script>
    import Footer from "./Footer";
    import Header from "./Header";
    import Aside from"./Aside";
        export default {
            components: {
                Footer,
                Header,
                Aside
            }
        };
</script>

<style lang="scss">
   .content-body{
       height: 100%;
       .main-body{
           width: calc(100% - 200px);
           height: 100%;
           float: left;
           .container-box{
               height: calc(100% - 120px);
               overflow:auto;
           }
       }
   }
</style>

