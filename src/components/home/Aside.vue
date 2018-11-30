<template>
    <div class="menu-body">
       <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
                <template slot="title">
                    <span>总览</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-3">
                     <template slot="title">选项4</template>
                     <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
                <i class="icon iconfont icon-cunchu1"></i>
                <span slot="title">存储</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="icon iconfont icon-jiankong2"></i>
                <span slot="title">监控</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="icon iconfont icon-zonglan-copy"></i>
                <span slot="title">权限</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style lang="scss">
   .menu-body{
       width: 200px;
       height: 100%;
       overflow-y: auto;
       float: left;
   }
   .el-menu{
      border-right:none;
      height: 100%;
   }
   .route-path{
       color: #ffffff;
   }
</style>
