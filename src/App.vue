<template>
    <div id="app">
		<router-view></router-view>
    </div>
</template>

<script>
</script>

<style>
  * {
      margin:0;
      padding:0;
      border:none;
      outline:none;
  }

  html, body {
      min-height:100vh;
      background:#F4F4F4;
  }

  #app {
      width:100%;
      height:100vh;
  }

  button {
      cursor:pointer;
      background:transparent;
  }

  a {
      text-decoration: none;
      display:flex;
      justify-content: center;
      align-items:center;
      color:black;
  }
</style>
