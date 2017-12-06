Vue.component('paintings-list', {
  template: `
  <div class="row p-4">
    <painting v-for="image in total_paintings" :id="image" :name="paintings[image].name" :price="paintings[image].price" :sold="paintings[image].sold" :saleprice="paintings[image].saleprice" :url="'images/la-vie-en-rose/'+image+'.jpg'"></painting>
  </div>
  `,
  data: function () {
    return {
              paintings: {
                1: {name: "Rose", price: "59", sold: false, saleprice: "39"},
                2: {name: "Letter", price: "59", sold: true},
                3: {name: "Bath", price: "59", sold: false, saleprice: "39"},
                4: {name: "Water", price: "59", sold: false, saleprice: "39"},
                5: {name: "Coctail", price: "59", sold: true},
                6: {name: "First Steps", price: "59", sold: false, saleprice: "39"},
                7: {name: "Show", price: "59", sold: false, saleprice: "39"},
                8: {name: "Morning", price: "59", sold: false, saleprice: "39"}
              }
            }
  },
  computed: {
    total_paintings: function() {
      return Object.keys(this.paintings).length
    }
  }
});

Vue.component('painting', {
  props: ['url', 'name', 'price', 'sold', 'id', 'saleprice', 'size'],
  template: `
  <div class="col-sm-6 col-md-4 p-2 pb-4">
    <div class="col">
      #{{id}}: {{name}}, <span class="text-muted small">canvas 25x30, acrylic eco paint</span>
    </div>
    <a target="_blank" class="lightbox" :href="url">
      <img class="img-fluid img-thumbnail" :src="url" alt="">
    </a>

    <div class="col text-right p-2 ">
      <span v-if="saleprice">
        <strike class="text-danger">{{price}}$</strike> {{saleprice}}$
      </span>
      <span v-else>
        {{price}}$
      </span>

      <span v-if="sold">
        SOLD!
      </span>
      <span v-else>
        <a target="_blank" :href="'https://www.paypal.me/artchallenge/'+saleprice+'usd'" class="btn btn-success btn-xs">Buy</a>
        <span class="text-muted small">
        <br>
        <i class="">PayPal checkout</i>
        <span>
      </span>
    </div>
  </div>
  `
});


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

Vue.component('work-section', {
  props: ['name', 'title', 'works', 'link', 'linkTitle', 'instagram', 'btnTitle', 'description'],
  template: `
  <section :id="name">
    <div class="container">
      <div class="row justify-center">
        <div class="col-md-12 text-center">
          <h3 class="mb-4">{{title}}</h3>

          <img style="cursor: pointer" data-toggle="modal" :data-target="'#modal-'+name" class="mb-4 img-fluid" :src="'images/'+name+'/logo.jpg'">
          <p>{{description}}</p>
          <p><a class="btn btn-outline-secondary" href="" data-toggle="modal" :data-target="'#modal-'+name">{{btnTitle}}</a></p>
          <h5>
          <a v-if="link" class="btn text-primary" target="_blank"  :href="link">
            <i class="fa fa-globe"></i>&nbsp;{{linkTitle}}
          </a>
          <br>
          <a v-if="instagram" class="btn text-primary" target="_blank" :href="'http://instagram.com/'+instagram">
            <i class="fa fa-instagram "></i>&nbsp;{{instagram}}
          </a>
          </h5>
        </div>
      </div>

      <div class="tz-gallery">
        <div :id="'modal-'+name" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">{{title}}</h5>
                <button style="cursor:pointer;" type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <work-list :name="name" :works="works"></work-list>
              </div>
              <div class="modal-footer">
                <a v-if="link" target="_blank" :href="link" class="btn btn-primary">Visit store</a>
                <button style="cursor:pointer;" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  <div class="divider"></div>
  </section>
  `,
  data() {
    return {}
  }
});

Vue.component('work-list', {
  props: ['name', 'works'],
  template: `
  <div class="row">
    <work v-for="image in parseInt(works)" :url="'images/'+name+'/'+image+'.jpg'"></work>
  </div>
  `
});


var app = new Vue({
  el: "#app"
})
