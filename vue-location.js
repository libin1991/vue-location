/**
 * Created by wujian on 16/7/16.
 */
module.exports = {
	install:function(Vue, options){
		Vue.locationHref = function (url){
			window.location.href = url;
		}
	}
}