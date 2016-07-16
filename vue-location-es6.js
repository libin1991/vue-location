/**
 * Created by wujian on 16/7/16.
 */

export default {
	install(Vue, options){
		Vue.locationHref = function (url){
			window.location.href = url;
		}
	}
}
