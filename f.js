(function(d) {
	var w = d.getElementById("__F_WIDGET"),
	    l = d.getElementsByTagName("link"),
	    o, c, f = {
	        main: null,
	        comments: null,
	        category: null,
	        tag: null,
	        author: null,
	        post: null
	    }, a = "http://www.feedly.com/home#subscription/feed/",
	    u = [],
	    s = '<style type="text/css">\
				#__F_OVERLAY {\
					-webkit-box-shadow:0 0 20px rgba(0,0,0,.4);\
					-moz-box-shadow:0 0 20px rgba(0,0,0,.4);\
					-ms-box-shadow:0 0 20px rgba(0,0,0,.4);\
					-o-box-shadow:0 0 20px rgba(0,0,0,.4);\
					box-shadow:0 0 20px rgba(0,0,0,.4);\
					-webkit-transition:all .5s ease-out;\
					-moz-transition:all .5s ease-out;\
					-ms-transition:all .5s ease-out;\
					-o-transition:all .5s ease-out;\
					transition:all .5s ease-out;\
					background-color: rgba(255, 255, 255, 0.8);\
					border-bottom:1px solid #fff;\
					color:#4b4b4b!important;\
					font-family:HelveticaNeue,Helvetica,Arial!important;\
					height:85px;\
					left:0;\
					position:fixed;\
					text-align:left;\
					top:-100px;\
					width:100%;\
					z-index:999;\
				}\
				#__F_OVERLAY.open {\
					top:0;\
				}\
				#__F_GREEN {\
					background-color:#41B520;\
					height:5px;\
					width:100%;\
				}\
				#__F_CONTENT {\
					height:80px;\
					line-height:80px!important;\
				}\
				#__F_CONTENT a {\
					-webkit-appearance:none;\
					border:1px solid rgba(0,0,0,.2);\
					border-radius:3px;\
					box-shadow:0 1px 2px rgba(0,0,0,.2),inset 0 0 1px rgba(255,255,255,1);\
					cursor:pointer;\
					display:block;\
					font-size:14px;\
					line-height:17px!important;\
					margin:24px 5px;\
					padding:7px 20px;\
					text-decoration:none;\
				}\
				#__F_FEEDS {\
					float:left;\
				}\
				#__F_FEEDS a { \
					background-color:#41B520;\
					color:#fff;\
					float:left;\
				}\
				#__F_CLOSE_WRAP a {\
					background-color:#ccc;\
					color:#111;\
				}\
				#__F_LOGO {\
					float:left;\
					vertical-align: middle;\
				}\
				#__F_LOGO {\
					background: transparent left center no-repeat url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAoCAYAAABq13MpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA+ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjVEMjA4OTI0OTNCRkRCMTE5MTRBODU5MEQzMTUwOEM4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkEzQTZFMTcwMkIzOTExRTM5MDdDREMyRTk5Nzk1RTlEIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkEzQTZFMTZGMkIzOTExRTM5MDdDREMyRTk5Nzk1RTlEIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIElsbHVzdHJhdG9yIENTNSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ1dWlkOjRkNWI0Njk4LTJiYzQtY2I0NS05NzYxLTFlMzVkMDkyZWM4MiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGNzdGMTE3NDA3MjA2ODExOEE2RDhENzRBQTQ5RTBDRCIvPiA8ZGM6dGl0bGU+IDxyZGY6QWx0PiA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPmZlZWRseS1sb2dvPC9yZGY6bGk+IDwvcmRmOkFsdD4gPC9kYzp0aXRsZT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4hGWzcAAAD5UlEQVR42syZ6UtUURjGHR2XdtsXv0REX4KoDxVYfQhaPkSrYWq7WVlJRGULrbRqKWULtlBkERbRpmLaaGMY7dFf0ELpmGOllgZRVs+hZ2C4zJ1z7p1j+cKPYe6cufeZc97zLmccGaVTwjTbaJAMhoC3oBA80fkAp2bBGSAXRPldWw0yQZ6uh4RrFLwLHDcIFhYJjoK9HU20ELxbMmY72NNRRG9TEOyzHRbGtpvoTWCfjVXZ+r9EbwDZNr97gD/4n4peD3JCXKVsu8LtiN6oKLhNUfjm9hYtBB8EDsm4m0wuVxTuud+q8HCLLpGlkJDcIA28AyuBSzI+gj6eqVv0Oma6CMm4aqbwz3z/Bcyj8F8SHYe4klpEC8FHFMY9BImg3nC9ERSBnwr3OMyoFJLotYqCH4M54EOAz+IZJaIUVzWHrmirYEpXLHKegZnAayK4FPSwuOFzuTLHrMy02Ej5Cjd/DmYEEVxkQ7DP8jhxSqJTwVlFwbNMXGIcw17vEBOQmLgVMtFihs8o3OwFBdeaCL4O+mmqIPMZOgOKXg5OKIS1p2C6ieDxnOH+Guv0cNbp6UbRS/hBtMKmSwB1AT6bwBnuC16B0+C9JuGR9PE0n+hhjI8ywS8Zh2tMNl0hXeIrS0/Reu0E3zUJj6LO4UJ0CugTZPBvznAiG1WjjQFXQRxopf9dY8i6ANaABk3CY0GSiNOjJANFKp5IQUYbSR8eBL5x+YxF0jnQmcvr0CB8hJjpHwobYVqgLzNx+ASnmlR1XXmsoMvahKD7kkHduPwL/K6NBXfAQPpsKscYrRNdZKGmWRb2wEn/EzXGUMngS2AS3WQuN52o3JaZCI6m4ASNs/xGrKaTGS2Fvhkn+dJiQ2ciBF8OMC6GghM1ChY65wNPuF/8TTZJGIFMRIZVoCDAZ13AedbRuqyOE/vImBGr6bcqCUFkTY+J/5/iBOgyD3W5zWqPKrCIrVIwc9DHk/zuEcsywLdhmzQIrqFL3pNVeVWMBrIZ78liJosJpYA/2LdpB4OLIQiu5Z6pUG0CKsFSComTZChjQ1oc9vektIWvsay5rfqwEHzXartVyULKo/ggEf5KuGFaeK2V74slja2/eTlh5XZ7xAr6aL3i4UyFn+AwP+EuxcObBj6vPNRu3M1o4FUoH7eAqYbrk1n1RUq+/5FxWHZOonzu4eYNGyXjBoBbLJzi+Xqb6T6YNTPVu1TEWPn7ooL+KTJgryDjYthjehVbrma6RFl7neWVcUY+KYxVEdzEMFnSXmd5Piulj9doSM3JPGawZHb/3XKxJxQt1WzQndFBdl7nZDt2A5wEr+08/I8AAwDhZN2jq/eVeQAAAABJRU5ErkJggg==);\
					margin:0 0 0 20px;\
					padding: 0 0 0 55px;\
					vertical-align: middle;\
					font-size:16px !important;\
					color: #444;\
				}\
				#__F_FEEDS {\
					float:left;\
					margin-left:30px;\
				}\
				#__F_CLOSE_WRAP {\
					float:right;\
					margin-right:60px;\
				}\
			</style>\
	    ',
	    h = '\
			<div id="__F_OVERLAY">\
				<div id="__F_GREEN"></div>\
				<div id="__F_CONTENT">\
					<div id="__F_LOGO">Select feed to add</div>\
					<div id="__F_FEEDS">\
						<a target="_blank" style="display:none" href="#" id="__F_FEED_main">Main Feed</a>\
    					<a target="_blank" style="display:none" href="#" id="__F_FEED_comments">Comments Feed</a>\
    					<a target="_blank" style="display:none" href="#" id="__F_FEED_category">Category Feed</a>\
    					<a target="_blank" style="display:none" href="#" id="__F_FEED_tag">Tag Feed</a>\
    					<a target="_blank" style="display:none" href="#" id="__F_FEED_author">Author Feed</a>\
    					<a target="_blank" style="display:none" href="#" id="__F_FEED_post">Post Comments Feed</a>\
					</div>\
					<div id="__F_CLOSE_WRAP"><a id="__F_CLOSE" href="javascript:return false;">Cancel</a></div>\
				</div>\
			</div>\
	    ',
	    create = function() {
			w.insertAdjacentHTML("beforeend", s);
			w.insertAdjacentHTML("beforeend", h);
			o = d.getElementById("__F_OVERLAY");
			c = d.getElementById("__F_CLOSE");
			c.addEventListener("click", destroy, false);
	    },
	    destroy = function () {
	        o.className = "";
	        setTimeout(function () {
	            w.parentNode.removeChild(w);
	        }, 1000);
	    },
	    open = function () {
	    	setTimeout(function() {
	    		o.className = "open";
	    	}, 10);
	    },
	    init = function () {
	        for (i = 0; i < l.length; i++) {
	            el = l[i];
	            if (el.getAttribute("rel").indexOf("alternate") != -1) {
	                t = el.getAttribute("type");
	                if(t) {
		                if (t.indexOf("application/rss+xml") != -1 || t.indexOf("text/xml") != -1) {
		                    u.push(el.getAttribute("href"));
		                }
	                }
	            }
	        }
	        if (u.length > 0) {
	            if (u.length == 1) {
	                main = u[0];
	                window.open(a + u[0], "_blank");
	            } else {
					create();
	                for (i = 0; i < u.length; i++) {
	                    for (var b in f) {
	                        if (u[i].indexOf(b) > -1) {
	                            f[b] = u[i];
	                            u.splice(u.indexOf(u[i]), 1);
	                            break;
	                        }
	                    }
	                }
	                if (u.length > 1) {
	                    f.post = u.sort(function (g, e) {
	                        return e.length - g.length;
	                    })[0];
	                    u.splice(u.indexOf(f.post), 1);
	                }
	                f.main = u[0];
	                u.splice(u.indexOf(f.main), 1);
	                for (var b in f) {
	                    if (f[b] != null) {
	                        l = document.getElementById("__F_FEED_" + b);
	                        l.addEventListener("click", destroy, false);
	                        l.href = a + f[b];
	                        l.style.display = "block";
	                    }
	                }
	                open();
	            }
	        } else {
				create();
				d.getElementById("__F_FEEDS").style.display = "none";
				d.getElementById("__F_LOGO").innerText = "Sorry, no RSS feeds on this page :(";
                open();
				setTimeout(function() {
					destroy();
				}, 3000);
	        }
	    };
	init();
})(document);