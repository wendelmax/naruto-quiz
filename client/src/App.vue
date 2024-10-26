<template>
  <div id="app">
    <nav>
      <router-link to="/">Início</router-link> |
      <router-link to="/add-character">Cadastrar Personagem</router-link> |
      <router-link to="/add-question">Cadastrar Pergunta</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
nav {
  background-color: #e94e1b;
  padding: 10px;
}
nav a {
  color: #fff;
  margin-right: 15px;
  text-decoration: none;
}
</style>
