app.component('review-list', {
    props: {
        reviews: {
            type: Array,
            required: true,
        }
    },
    template:
    /*html*/
    `
    <div class="review-container">
    <h3>Reviews:</h3>
      <ul>
        <li v-for="(review, index) in reviews" :key="index">
          <p>{{ review.name }} gave this {{ review.rating }} stars.</p>
          <p>"{{ review.review }}"</p>
          <p>Would you recommend this product?"</p>
          <p v-if="review.recommend">Yes</p>
          <p v-else>No</p>
        </li>
      </ul>
    </div>`
})