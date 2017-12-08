// JavaScript Document

// ----------- Comienzo INIT
// Init Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-43402607-2', 'auto');

// Init Amplitud -- test
(function(e,t){var n=e.amplitude||{_q:[],_iq:{}};var r=t.createElement("script");r.type="text/javascript";
r.async=true;r.src="https://d24n15hnbwhuhn.cloudfront.net/libs/amplitude-3.4.0-min.gz.js";
r.onload=function(){e.amplitude.runQueuedFunctions()};var i=t.getElementsByTagName("script")[0];
i.parentNode.insertBefore(r,i);function s(e,t){e.prototype[t]=function(){this._q.push([t].concat(Array.prototype.slice.call(arguments,0)));
return this}}var o=function(){this._q=[];return this};var a=["add","append","clearAll","prepend","set","setOnce","unset"];
for(var u=0;u<a.length;u++){s(o,a[u])}n.Identify=o;var c=function(){this._q=[];return this;
};var p=["setProductId","setQuantity","setPrice","setRevenueType","setEventProperties"];
for(var l=0;l<p.length;l++){s(c,p[l])}n.Revenue=c;var d=["init","logEvent","logRevenue","setUserId","setUserProperties","setOptOut","setVersionName","setDomain","setDeviceId","setGlobalUserProperties","identify","clearUserProperties","setGroup","logRevenueV2","regenerateDeviceId","logEventWithTimestamp","logEventWithGroups"];
function v(e){function t(t){e[t]=function(){e._q.push([t].concat(Array.prototype.slice.call(arguments,0)));
}}for(var n=0;n<d.length;n++){t(d[n])}}v(n);n.getInstance=function(e){e=(!e||e.length===0?"$default_instance":e).toLowerCase();
if(!n._iq.hasOwnProperty(e)){n._iq[e]={_q:[]};v(n._iq[e])}return n._iq[e]};e.amplitude=n;
})(window,document);
//Nro test 46200453d54c4adfe9d9522c73e355c1
amplitude.getInstance().init('7e1fbf2d393e868f9ec97eea66bd3362', null, {includeReferrer: true, includeUtm: true, platform:'WEB'});// Nro de test


 // Establezca el ID de usuario mediante el user_id con el que haya iniciado sesión.
function jpAnalyticsEvent(eventCategory, eventAction, eventLabel){
	// eventCategory STR, eventAction STR, eventLabel STR
	if(isProductionMode()){
		amplitude.getInstance().logEvent(eventCategory, { 'content_name': eventAction, 'content_category': eventLabel});
		ga('send', 'event', eventCategory, eventAction, eventLabel);
	}
}
function jpAnalyticsPageView(name){
		amplitude.getInstance().logEvent('PAGE_VIEW_'+name);
		ga('set', 'page', name);
		ga('send', 'pageview');
}
// Cada vez que abre una pagina se lanza
	jpAnalyticsPageView('INVEST'); // Para Web, Mobile es V2, App lo marco
//jpAnalyticsPageView((window.location.href.toUpperCase()).split("TEST/WEB/")[1].split(".HTML")[0]); // Para Web, Mobile es V2, App lo marco
