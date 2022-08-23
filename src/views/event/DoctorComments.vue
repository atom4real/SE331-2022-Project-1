<template>
  <div class="container">
    <h1>Doctor's Reviews</h1>
    <ReviewForm @review-submitted="addReview"></ReviewForm>
    <ReviewList
      v-if="GStore.comments"
      :reviews="GStore.patient.comments"
    ></ReviewList>
  </div>
  <button class="btn btnBack" @click="toPatientlists">
    Back to Patient Lists
  </button>
</template>
<script>
import GStore from '@/store'
import ReviewForm from '@/components/ReviewForm.vue'
import ReviewList from '@/components/ReviewList.vue'
export default {
  components: { ReviewForm, ReviewList },
  inject: ['GStore'],
  props: ['patient'],
  methods: {
    addReview(review) {
      this.GStore.comments.push(review)
      GStore.patient.comments = GStore.comments.filter(
        (comment) => GStore.patient.id == comment.IDpatient
      )
      // console.log(review)
    },
    toPatientlists() {
      this.GStore.flashMessage =
        'You are back to the Patient Vaccination Status.'
      setTimeout(() => {
        this.GStore.flashMessage = ''
      }, 3000)

      this.$router.push({
        name: 'PatientLists',
        params: { id: this.patient.id }
      })
    }
  }
}
</script>
<style scoped>
.btn {
  background-color: #42b883; /* Green */
  border: none;
  padding: 0.4% 5%;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  margin: 42px 2px;
  cursor: pointer;
  transition: 0.5s;
}
.btnBack {
  background-color: 42b883;
  color: black;
  border: 2px solid #42b883;
  border-radius: 12px;
}
.btnBack:hover {
  transform: scale(1.2);
  background-color: #35495e;
  color: white;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
</style>
