(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[962],{2962:function(e,t,o){"use strict";o.d(t,{PB:function(){return NextSeo}});var a=o(7294),r=o(9008),n=o.n(r);function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e}).apply(this,arguments)}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}var p=["keyOverride"],i=["crossOrigin"],l={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},buildOpenGraphMediaTags=function(e,t,o){void 0===t&&(t=[]);var r=void 0===o?{}:o,n=r.defaultWidth,p=r.defaultHeight;return t.reduce(function(t,o,r){return t.push(a.createElement("meta",{key:"og:"+e+":0"+r,property:"og:"+e,content:o.url})),o.alt&&t.push(a.createElement("meta",{key:"og:"+e+":alt0"+r,property:"og:"+e+":alt",content:o.alt})),o.secureUrl&&t.push(a.createElement("meta",{key:"og:"+e+":secure_url0"+r,property:"og:"+e+":secure_url",content:o.secureUrl.toString()})),o.type&&t.push(a.createElement("meta",{key:"og:"+e+":type0"+r,property:"og:"+e+":type",content:o.type.toString()})),o.width?t.push(a.createElement("meta",{key:"og:"+e+":width0"+r,property:"og:"+e+":width",content:o.width.toString()})):n&&t.push(a.createElement("meta",{key:"og:"+e+":width0"+r,property:"og:"+e+":width",content:n.toString()})),o.height?t.push(a.createElement("meta",{key:"og:"+e+":height"+r,property:"og:"+e+":height",content:o.height.toString()})):p&&t.push(a.createElement("meta",{key:"og:"+e+":height"+r,property:"og:"+e+":height",content:p.toString()})),t},[])},buildTags=function(e){var t,o,r,n,h,c=[];e.titleTemplate&&(l.templateTitle=e.titleTemplate);var s="";e.title?(s=e.title,l.templateTitle&&(s=l.templateTitle.replace(/%s/g,function(){return s}))):e.defaultTitle&&(s=e.defaultTitle),s&&c.push(a.createElement("title",{key:"title"},s));var d=void 0===e.noindex?l.noindex||e.dangerouslySetAllPagesToNoIndex:e.noindex,u=void 0===e.nofollow?l.nofollow||e.dangerouslySetAllPagesToNoFollow:e.nofollow,m="";if(e.robotsProps){var g=e.robotsProps,f=g.nosnippet,y=g.maxSnippet,G=g.maxImagePreview,k=g.maxVideoPreview,v=g.noarchive,b=g.noimageindex,E=g.notranslate,w=g.unavailableAfter;m=(f?",nosnippet":"")+(y?",max-snippet:"+y:"")+(G?",max-image-preview:"+G:"")+(v?",noarchive":"")+(w?",unavailable_after:"+w:"")+(b?",noimageindex":"")+(k?",max-video-preview:"+k:"")+(E?",notranslate":"")}if(d||u?(e.dangerouslySetAllPagesToNoIndex&&(l.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(l.nofollow=!0),c.push(a.createElement("meta",{key:"robots",name:"robots",content:(d?"noindex":"index")+","+(u?"nofollow":"follow")+m}))):c.push(a.createElement("meta",{key:"robots",name:"robots",content:"index,follow"+m})),e.description&&c.push(a.createElement("meta",{key:"description",name:"description",content:e.description})),e.themeColor&&c.push(a.createElement("meta",{key:"theme-color",name:"theme-color",content:e.themeColor})),e.mobileAlternate&&c.push(a.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach(function(e){c.push(a.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))}),e.twitter&&(e.twitter.cardType&&c.push(a.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&c.push(a.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&c.push(a.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&c.push(a.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),(null!=(t=e.openGraph)&&t.title||s)&&c.push(a.createElement("meta",{key:"og:title",property:"og:title",content:(null==(n=e.openGraph)?void 0:n.title)||s})),(null!=(o=e.openGraph)&&o.description||e.description)&&c.push(a.createElement("meta",{key:"og:description",property:"og:description",content:(null==(h=e.openGraph)?void 0:h.description)||e.description})),e.openGraph){if((e.openGraph.url||e.canonical)&&c.push(a.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var T=e.openGraph.type.toLowerCase();c.push(a.createElement("meta",{key:"og:type",property:"og:type",content:T})),"profile"===T&&e.openGraph.profile?(e.openGraph.profile.firstName&&c.push(a.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&c.push(a.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&c.push(a.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&c.push(a.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===T&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach(function(e,t){c.push(a.createElement("meta",{key:"book:author:0"+t,property:"book:author",content:e}))}),e.openGraph.book.isbn&&c.push(a.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&c.push(a.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach(function(e,t){c.push(a.createElement("meta",{key:"book:tag:0"+t,property:"book:tag",content:e}))})):"article"===T&&e.openGraph.article?(e.openGraph.article.publishedTime&&c.push(a.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&c.push(a.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&c.push(a.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach(function(e,t){c.push(a.createElement("meta",{key:"article:author:0"+t,property:"article:author",content:e}))}),e.openGraph.article.section&&c.push(a.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach(function(e,t){c.push(a.createElement("meta",{key:"article:tag:0"+t,property:"article:tag",content:e}))})):("video.movie"===T||"video.episode"===T||"video.tv_show"===T||"video.other"===T)&&e.openGraph.video&&(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach(function(e,t){e.profile&&c.push(a.createElement("meta",{key:"video:actor:0"+t,property:"video:actor",content:e.profile})),e.role&&c.push(a.createElement("meta",{key:"video:actor:role:0"+t,property:"video:actor:role",content:e.role}))}),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach(function(e,t){c.push(a.createElement("meta",{key:"video:director:0"+t,property:"video:director",content:e}))}),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach(function(e,t){c.push(a.createElement("meta",{key:"video:writer:0"+t,property:"video:writer",content:e}))}),e.openGraph.video.duration&&c.push(a.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&c.push(a.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach(function(e,t){c.push(a.createElement("meta",{key:"video:tag:0"+t,property:"video:tag",content:e}))}),e.openGraph.video.series&&c.push(a.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}e.defaultOpenGraphImageWidth&&(l.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(l.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&c.push.apply(c,buildOpenGraphMediaTags("image",e.openGraph.images,{defaultWidth:l.defaultOpenGraphImageWidth,defaultHeight:l.defaultOpenGraphImageHeight})),e.defaultOpenGraphVideoWidth&&(l.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(l.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&c.push.apply(c,buildOpenGraphMediaTags("video",e.openGraph.videos,{defaultWidth:l.defaultOpenGraphVideoWidth,defaultHeight:l.defaultOpenGraphVideoHeight})),e.openGraph.audio&&c.push.apply(c,buildOpenGraphMediaTags("audio",e.openGraph.audio)),e.openGraph.locale&&c.push(a.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),(e.openGraph.siteName||e.openGraph.site_name)&&c.push(a.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.siteName||e.openGraph.site_name}))}return e.canonical&&c.push(a.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach(function(e){var t,o,r=e.keyOverride,n=_objectWithoutPropertiesLoose(e,p);c.push(a.createElement("meta",_extends({key:"meta:"+(null!=(t=null!=(o=null!=r?r:n.name)?o:n.property)?t:n.httpEquiv)},n)))}),null!=(r=e.additionalLinkTags)&&r.length&&e.additionalLinkTags.forEach(function(e){var t,o=e.crossOrigin,r=_objectWithoutPropertiesLoose(e,i);c.push(a.createElement("link",_extends({key:"link"+(null!=(t=r.keyOverride)?t:r.href)+r.rel},r,{crossOrigin:"anonymous"===o||"use-credentials"===o||""===o?o:void 0})))}),c},WithHead=function(e){return a.createElement(n(),null,buildTags(e))},NextSeo=function(e){var t=e.title,o=e.themeColor,r=e.noindex,n=e.nofollow,p=e.robotsProps,i=e.description,l=e.canonical,h=e.openGraph,c=e.facebook,s=e.twitter,d=e.additionalMetaTags,u=e.titleTemplate,m=e.defaultTitle,g=e.mobileAlternate,f=e.languageAlternates,y=e.additionalLinkTags;return a.createElement(a.Fragment,null,a.createElement(WithHead,{title:t,themeColor:o,noindex:r,nofollow:n,robotsProps:p,description:i,canonical:l,facebook:c,openGraph:h,additionalMetaTags:d,twitter:s,titleTemplate:u,defaultTitle:m,mobileAlternate:g,languageAlternates:f,additionalLinkTags:y}))};RegExp("["+Object.keys(Object.freeze({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"})).join("")+"]","g")},9008:function(e,t,o){e.exports=o(4605)}}]);