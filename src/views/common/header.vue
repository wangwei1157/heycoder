<template>
  <div class="coderHeader">
    <div class="navBtn" v-show="showMolie" @click="showNav"> 
      <span></span>
      <span></span>
      <span></span> 
    </div>
  <el-menu
    v-show="!showMolie"
    :default-active="activeIndex" 
    class="el-menu-header" 
    mode="horizontal" 
    @select="handleSelect" 
    background-color="#1C2327"
    text-color="#fff"
    router
    active-text-color="#ffd04b">
    <el-menu-item index="/index">首页</el-menu-item>
    <el-submenu index="2">
      <template slot="title">前端技术</template>
      <el-menu-item index="2-1">JavaScript</el-menu-item>
      <el-menu-item index="2-2">VUE</el-menu-item>
    </el-submenu>
    <el-menu-item index="3">NODE</el-menu-item>
    <el-menu-item index="4">关于我</el-menu-item>
  </el-menu>
  <transition name="el-zoom-in-top">
    <div class="navList" v-show="showList">
      <el-menu
      default-active="1"
      mode="vertical" 
      class="el-menu-vertical-demo"
      background-color="#1C2327"
      text-color="#fff"
      active-text-color="#ffd04b"
      >
        <el-menu-item index="1">
          <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">前端技术</template>
          <el-menu-item-group>
            <el-menu-item index="1-1">JavaScript</el-menu-item>
            <el-menu-item index="1-2">VUE</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="3">
          <span slot="title">NODE</span>
        </el-menu-item>
        <el-menu-item index="4">
          <span slot="title">关于我</span>
        </el-menu-item>
      </el-menu>
    </div>
  </transition>

  </div>
</template>

<script>

export default {
  name: 'coderHeader',
  components: {
    
  },
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      width:'',
      showMolie:false,
      showList:false
    };
  },
  created(){
    window.addEventListener('resize', this.getWidth);
    this.getWidth();
  },
  computed:{
    // showMolie(){
    //   if(this.width<1024){
    //     console.log(true);
    //     return true;
    //   }else{
    //     console.log(false)
    //     return false;
    //   }
    // }
  },
  watch:{
    width(newVal,oldVal){
      // console.log(newVal);
      var span = document.querySelector('.navBtn').children;
      if(newVal<1024){
        this.showMolie = true;
        this.showList = false;
        span[0].style=""
        span[1].style=""
        span[2].style=""
      }else{
        this.showMolie = false;
        this.showList = false;
        span[0].style=""
        span[1].style=""
        span[2].style=""
      }
      
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    getWidth(){
      this.width = window.innerWidth;
      if(window.innerWidth<1024){
        this.showMolie = true;
      }else{
        this.showMolie = false;
      }     
    },
    showNav(){
      var span = document.querySelector('.navBtn').children;
      if(!this.showList){
        span[0].style="top:30px;transform: rotate(45deg);"
        span[1].style="display:none"
        span[2].style="top:30px;transform: rotate(-45deg);"
        this.showList = true;
      }else{
        span[0].style=""
        span[1].style=""
        span[2].style=""
        this.showList = false;
      }
    }
  },
}
</script>

<style lang="less" scoped>
.coderHeader{
  display: flex;
  height:60px;
  // justify-content: space-between;
  padding-right: 20px;
  background: #1C2327;
  border-bottom: solid 1px #e6e6e6;
  box-shadow: #ccc 0px 0px 15px;
  .el-menu-header{
    background: #1C2327;
    width:50%!important;
    border-bottom:none;
  }
  .navBtn{
    width: 30px;
    cursor: pointer;
    height: 60px;
    // margin-top: 15px;
    span{
      display: block;
      background: #fff;
      width: 30px;
      height: 3px;
      position: absolute;
      left: 10px;
      transition: all ease 0.35s;
      &:nth-of-type(1){
        top:20px;
      }
      &:nth-of-type(2){
        top:30px;
      }
      &:nth-of-type(3){
        top:40px;
      }
    }
  }
  .navList{
    width:40%;
    position: absolute;
    top:60px;
    left:0px;
    z-index: 9999;
    .el-menu-vertical-demo{
      text-align: center;
    }
  }
}
</style>
