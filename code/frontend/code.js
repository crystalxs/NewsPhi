'use strict';
// import MdButton from '../node_modules/vue-material/dist/components'
// import 'node_modules/vue-material/dist/vue-material.min.css'

// some important global variables.
// the data source
const API_SERVER = 'https://webhose.io/filterWebContent?token=6caf20d8-8bad-49fb-996e-0726d3621783';
const QUERY = '&sort=crawled&q=site_type%3Anews%20thread.country%3AUS%20language%3Aenglish';
const FORMAT = '&format=json';
const COMMENT_VIEW = 'connectsf_comment';

// main function
let _featJson;
async function initialPrep() {

  console.log('1...');
  _featJson = await getNews();

  console.log('2... ');
  console.log("data", app_news.news);

  console.log('3... ');


  console.log('4... ');
  // await fetchAddLayers();

  console.log('5... ');
  // await checkCookie();

  console.log('6 !!!');
}

// get data from RESTapi
async function getNews() {
  let data_url = API_SERVER + FORMAT + QUERY;
  let resp = await fetch(data_url);

  app_news.news = jsonData['posts'];
}


// const colors = ["indigo","blue","cyan","light-blue","teal","light-green","blue-grey"];
let app_news = new Vue({
	el: '#feed',
	data:{
    news: sample.posts,
    time: new Date(),
    my_articles: [],
    clicked_urls: new Set()
		// clicked: sample.posts[0]
	},

	computed: {
	},

	methods:{

		renderArticle: function(idx){
			var clicked = sample.posts[idx]
      var click_id = this.my_articles.length
      clicked['click_id'] = click_id

      if( !this.clicked_urls.has(clicked.url) ){
        this.my_articles.push(clicked)
        this.clicked_urls.add(clicked.url)
      }     
		},
    
    removeArticle: function(index){
        if (this.my_articles.length == 1){
          this.my_articles = []
        }else{
          this.my_articles.splice(index, index+1)
        }    
      }
	 }
})



// initialPrep()
console.log('sample', sample.posts)
