document.addEventListener('DOMContentLoaded', function(){
	function menuClick() {
		// クリックした際に実行する処理を記述
		window.scrollTo({
			top: 0,
		});
	}
	// 引数に指定したclassの値をもつ要素をすべて取得
	const menus = document.getElementsByClassName('news-item');
	// 上記で取得したすべての要素に対してクリックイベントを適用
	for(let i = 0; i < menus.length; i++) {
  menus[i].addEventListener('click', menuClick, false);
	}
}, false);

document.addEventListener('DOMContentLoaded', function(){
	function menuClick() {
		window.scrollTo({
			top: 0,
		});
	}
	const blogs = document.getElementsByClassName('blog-card-img');
	for(let i = 0; i < blogs.length; i++) {
  blogs[i].addEventListener('click', menuClick, false);
	}
}, false);

document.addEventListener('DOMContentLoaded', function(){
	function menuClick() {
		window.scrollTo({
			top: 0,
		});
	}
	const blogTexts = document.getElementsByClassName('blog-text');
	for(let i = 0; i < blogTexts.length; i++) {
  blogTexts[i].addEventListener('click', menuClick, false);
	}
}, false);

/*ニュース*/
document.addEventListener('DOMContentLoaded', function(){
	function menuClick() {
		window.scrollTo({
			top: 0,
		});
	}
	const newsContents = document.getElementsByClassName('news-content-item');
	for(let i = 0; i < newsContents.length; i++) {
  newsContents[i].addEventListener('click', menuClick, false);
	}
}, false);

/*社員ブログ*/
document.addEventListener('DOMContentLoaded', function(){
	function menuClick() {
		window.scrollTo({
			top: 0,
		});
	}
	const blogImgs = document.getElementsByClassName('blog-content-img');
	for(let i = 0; i < blogImgs.length; i++) {
	blogImgs[i].addEventListener('click', menuClick, false);
	}
}, false);

document.addEventListener('DOMContentLoaded', function(){
	function menuClick() {
		window.scrollTo({
			top: 0,
		});
	}
	const blogTexts = document.getElementsByClassName('blog-content-text');
	for(let i = 0; i < blogTexts.length; i++) {
	blogTexts[i].addEventListener('click', menuClick, false);
	}
}, false);

/*ドロワーメニュー*/
const target = document.getElementById("menu");
target.addEventListener('click', () => {
  target.classList.toggle('open');
  const nav = document.getElementById("header-nav");
	nav.classList.toggle('in');
});