<template>
  <div id="nav" class="container">
    <router-link class="btn btnAbout" :to="{ name: 'HomePage' }"
      >Home</router-link
    >
    <router-link class="btn btnAbout" :to="{ name: 'PatientLists' }"
      >Lists</router-link
    >
    <router-link class="btn btnAbout" :to="{ name: 'About' }"
      >About</router-link
    >
  </div>
  <hr />
</template>
<style scoped>
.btn {
  background-color: #42b883; /* Green */
  border: none;
  padding: 0.8% 10%;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  margin: 4px 2px;
  cursor: pointer;
  transition: 0.5s;
}
.btnHome {
  background-color: white;
  color: black;
  border: 2px solid #42b883;
  border-radius: 12px;
}
.btnHome:hover {
  background-color: #42b883;
  color: white;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
.btnAbout {
  background-color: white;
  color: black;
  border: 2px solid #42b883;
  border-radius: 12px;
}
.btnAbout:hover {
  background-color: #42b883;
  color: white;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
hr {
  border: 0;
  height: 1.4px;
  width: 100%;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0)
  );
}
</style>
