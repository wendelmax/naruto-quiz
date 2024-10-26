<template>
  <div class="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-orange mb-4">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Naruto Quiz | </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/add-character">Cadastrar Personagem</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/add-question">Cadastrar Pergunta</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/results">Resultados</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
@import './assets/styles/naruto-theme.css';

.app {
  text-align: center;
}

.container {
  padding-top: 20px;
}
</style>
