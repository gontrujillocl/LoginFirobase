<template>
  <div id="app">
    <div class="container-fluid bg-dark text-light py-3" id="nav">
      <router-link to="/Login">Mi Login</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style>
a {
  color: #fff;
  text-decoration: none;
  background-color: transparent;
  text-decoration: none;
}
a:hover {
  color: #fff;
  text-decoration: none;
  background-color: transparent;
  text-decoration: none;
}
</style>
