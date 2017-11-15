
Vue.component('work', {
  props: ['url'],
  template: `
  <div class="col-sm-6 col-md-4 p-2">
    <a class="lightbox" :href="url">
      <img class="img-fluid" :src="url" alt="">
    </a>
  </div>
  `
});

Vue.component('work-2', {
  props: ['url'],
  template: `
  <div class="col-3"><img class="img-fluid" :src="url"></div>
  `
});


Vue.component('vintage-list', {
  template: `
  <div class="row">
    <work v-for="image in images" :url="'images/vintagepalace/'+image+'.jpg'"></work>
  </div>
  `,
  data() {
    return {
      images: 21
    }
  }
});

var app = new Vue({
  el: "#app"
})
