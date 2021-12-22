import './index.css';
import "@glidejs/glide/src/assets/sass/glide.core.scss";
import Glide from '@glidejs/glide'

['.glide', '.glide-mobile'].forEach(className => {
	new Glide(className, {
		autoplay: true,	
		animationDuration: 5000,
	}).mount();
});

['.glide-ads','.glide-services','.glide-ads-2','.glide-ads-3','.glide-ads-block','.glide-stories','.glide-stories-2'].forEach(className => {
	new Glide(className, {
		animationDuration: 5000,
	}).mount();
});











































