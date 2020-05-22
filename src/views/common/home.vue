<template>
  <div class="coderHome">
    <coder-header></coder-header>
    <coder-body></coder-body>
  </div>
</template>

<script>
import coderHeader from './header';
import coderBody from './body';
export default {
  name: 'coderHome',
  components: {
    coderHeader,
    coderBody
  },
  data(){
    return {

    }
  },
  methods:{
    
  }
}
</script>
<style lang="less" scoped>
.coderHome{
  width: 100%;
  height: 100%;
  background: #e4e4e4;
}
</style>
