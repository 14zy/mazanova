
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
