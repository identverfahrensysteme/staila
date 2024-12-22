var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var CRUMINA = {};
! function (e) {
	"use strict";
	
	var t = e(window),
		n = e(document);

	CRUMINA.spinnerAnimation = function () {
		var e = document.getElementById("can"),
			t = e.getContext("2d"),
			n = [],
			i = 0,
			a = 0,
			o = 0;
		
		function s(e, t, n) {
			this.x = e, this.y = t, this.z = n, this.color = "#0D0"
		}
		
		e.width = window.innerWidth, e.height = window.innerHeight, s.prototype.rotateX = function (e) {
			var t = this.z * Math.cos(e) - this.x * Math.sin(e);
			return new s(this.z * Math.sin(e) + this.x * Math.cos(e), this.y, t)
		}, s.prototype.rotateY = function (e) {
			var t = this.y * Math.cos(e) - this.z * Math.sin(e),
				n = this.y * Math.sin(e) + this.z * Math.cos(e);
			return new s(this.x, t, n)
		}, s.prototype.rotateZ = function (e) {
			return new s(this.x * Math.cos(e) - this.y * Math.sin(e), this.x * Math.sin(e) + this.y * Math.cos(e), this.z)
		}, s.prototype.perspectiveProjection = function (t, n) {
			var i = t / (n + this.z);
			return new s(this.x * i + e.width / 2, this.y * i + e.height / 2, this.z)
		}, s.prototype.draw = function () {
			this.y;
			var e = this.rotateX(i).rotateY(a).rotateZ(0).perspectiveProjection(100, 100);
			this.color = "rgb(99, 99, 99", t.fillStyle = this.color, t.fillRect(e.x, e.y, 1.5, 1.5)
		};
		for (var r = 0; r < 50; r++)
			for (var l = 0; l < 50; l++) {
				n.push(new s(200 * l - 5e3, 0, 200 * r - 5e3))
			}! function s() {
				t.fillStyle = "rgba(22, 24, 29, 1)", t.fillRect(0, 0, e.width, e.height);
				for (var r = 0, l = n.length; r < l; r++) {
					var c = r % 50,
						d = Math.floor(r / 50),
						u = Math.sin(c / 50 * 4 * Math.PI + o),
						m = Math.cos(d / 50 * 4 * Math.PI + o);
					n[50 * d + c].y = 1500 + u * m * 1050, n[r].draw()
				}
				o += .02, i += .00009, a += .00009, window.requestAnimationFrame(s)
			}()
	}, n.ready((function () {
		e("#can").length && CRUMINA.spinnerAnimation()
	}))
}(jQuery);

}
/*
     FILE ARCHIVED ON 07:21:12 Feb 10, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:35:29 Jul 25, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 98.926
  exclusion.robots: 0.087
  exclusion.robots.policy: 0.077
  cdx.remote: 0.073
  esindex: 0.011
  LoadShardBlock: 43.252 (3)
  PetaboxLoader3.datanode: 65.487 (4)
  load_resource: 246.74
  PetaboxLoader3.resolve: 195.012
*/