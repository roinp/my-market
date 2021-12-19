import './index.css';
import "@glidejs/glide/src/assets/sass/glide.core.scss";
import Glide from '@glidejs/glide'

['.glide', '.glide-mobile','.glide-ads'].forEach(className => {
	new Glide(className, {
		autoplay: true,
		animationDuration: 2000,
	}).mount();
}).Glide











































