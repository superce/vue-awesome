<template>
  <div class="sidebar">
    <ul>
      <li>
        <router-link to="/">
          <i class="iconfont icon-shouyintai"></i>
          <div>收银</div>
        </router-link>
      </li>
      <li>
        <router-link to="/shop">
          <i class="iconfont icon-qunfengdianpumingcheng"></i>
          <div>店铺</div>
        </router-link>
      </li>
      <li>
        <router-link to="/commodity">
          <i class="iconfont icon-shangpin-"></i>
          <div>商品</div>
        </router-link>
      </li>
      <li>
        <router-link to="/vip">
          <i class="iconfont icon-huiyuan"></i>
          <div>会员</div>
        </router-link>
      </li>
      <li>
        <router-link to="/statistics">
          <i class="iconfont icon-tongji"></i>
          <div>统计</div>
        </router-link>
      </li>
      <li>
        <router-link to="/setting">
          <i class="iconfont icon-shezhi"></i>
          <div>设置</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import Router from 'vue-router'
  export default {
    name: 'sideBar'
  }
</script>

<style>
  .sidebar {
    width: 3%;
    height: 100%;
    background: #2196F3
  }

  .sidebar ul {
    list-style: none;
  }

  .sidebar ul li {
    text-align: center;
    padding: 10px 0;
  }
  .sidebar ul li a{
    text-decoration: none;
  }
  .sidebar ul li i,
  .sidebar ul li div {
    color: #fff;
    font-size: 16px
  }
</style>