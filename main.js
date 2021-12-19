import './index.css';
import "@glidejs/glide/src/assets/sass/glide.core.scss";
import Glide from '@glidejs/glide'

['.glide', '.glide-mobile','.glide-ads','.glide-services','.glide-ads-2','.glide-ads-3','.glide-ads-block','.stories','.stories-2'].forEach(className => {
	new Glide(className, {
		autoplay: true,
		animationDuration: 2000,
	}).mount();
}).Glide











































