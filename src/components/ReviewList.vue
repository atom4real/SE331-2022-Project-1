<template>
  <div class="review-container">
    <h3>Reviews:</h3>
    <ul>
      <li v-for="(review, index) in reviews" :key="index">
        Name: Dr.{{ review.name }} gave this the comment.
        <br />
        Comment: "{{ review.review }}"
        <br />
        <br />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['reviews']
}
</script>
<style scoped>
.review-container {
  margin: auto;
  width: 50%;
  background-color: white;
  border: 2px solid #42b883;
  -webkit-box-shadow: 0px 2px 20px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 20px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 2px 20px -12px rgba(0, 0, 0, 0.57);
}
</style>
