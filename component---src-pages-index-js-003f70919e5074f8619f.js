"use strict";(self.webpackChunkavg=self.webpackChunkavg||[]).push([[678],{2479:function(e,a,c){c.d(a,{Il:function(){return i},om:function(){return l},O_:function(){return r}});var t=c(7294),n=c(6125),s=c(5444);var i=function(e){var a=e.type,c=e.sub,i=e.title,l=e.size,b=e.howMany,d=e.price,r=e.image,f=e.slug,p=(0,n.d)(r);return t.createElement("div",{className:"product"},t.createElement("div",null,t.createElement(n.G,{image:p,alt:i,className:"product__image"}),t.createElement("h3",{className:"product__title"}," ",i),t.createElement("h4",{className:"product__sub"},c.name),t.createElement("div",{className:"product__info"},l&&t.createElement("p",{className:"product__info-params"},"Размер: ",l),b&&t.createElement("p",{className:"product__info-params"},"Кол-во в 1 п.м: ",b),d&&t.createElement("p",{className:"product__info-price"},d.pref?t.createElement("span",null,d.pref," "):"",d.cost,t.createElement("span",null,d.price_type))),t.createElement(s.Link,{className:"product__link button-link",to:"/"+a+"/"+f},"Подробнее")))};var l=function(){return t.createElement(t.Fragment,null,t.createElement("div",{className:"product__empty"},t.createElement("div",{className:"product__empty-box"},t.createElement(n.S,{src:"../../images/icons/empty-box.png",__imageData:c(5072)}),t.createElement("p",null,"Скоро тут появятся новые товары 🙂"))))},b=c(8631),d=c(3133);var r=function(){var e=(0,d.Z)(),a=(0,b.v9)((function(e){return e.products.data.allMdx.nodes})),c=(0,t.useState)(0),n=c[0],s=c[1],l=(0,t.useState)(310),r=l[0],f=l[1],p=(0,t.useState)(1),m=p[0],o=p[1],w=(0,t.useState)(null),u=w[0],g=w[1],h=(0,t.useRef)();return t.useEffect((function(){var e=h.current;g(e),setInterval((function(){s((function(e){return e+1}))}),15e3)}),[]),t.useMemo((function(){e>1240&&o(4),e<1240&&o(e/r),m-Math.round(m)<0&&f(310),m-Math.round(m)>0&&f(e/Math.round(m))}),[e,m,r]),t.useMemo((function(){null!==u&&n<=u.children.length/Math.round(m)?u.style.transform="translateX(-"+r*n*Math.round(m)+"px)":s(0)}),[n]),t.createElement("div",{className:"products-slider"},t.createElement("div",{className:"slider-box",ref:h},a&&a.map((function(e){return t.createElement(i,Object.assign({key:e.id},e.frontmatter,{slug:e.slug}))}))))}},6059:function(e,a,c){c.r(a),c.d(a,{default:function(){return w}});var t=c(7294),n=c(9313),s=c(3751),i=c(6125),l=c(4607);var b=function(){return t.createElement("section",{className:"welcome-section"},t.createElement("div",{className:"container"},t.createElement("div",{className:"welcome-box"},t.createElement("div",{className:"welcome-box__left"},t.createElement("h2",null,"Поможем Вам подобрать",t.createElement("span",null," качественные материалы")," для покрытия Вашего тротуара от производителей по самой",t.createElement("span",null," лучшей цене")),t.createElement("div",{className:"welcome-box__info"},"Матриалы разных видов: плитка, брусчатка, бордюры, песок, крошка, щебень и другие"),t.createElement("div",{className:"welcome-box__pins"},t.createElement("div",{className:"welcome-box__pin"},t.createElement(i.S,{src:"../../images/icons/like-ellipse.png",alt:"",__imageData:c(8190)}),t.createElement("p",null,"Расширенная гарантия от производителя")),t.createElement("div",{className:"welcome-box__pin"},t.createElement(i.S,{src:"../../images/icons/cost-ellipse.png",alt:"",__imageData:c(5218)}),t.createElement("p",null,"Нашли дешевле? Снизим стоимость")),t.createElement("div",{className:"welcome-box__pin"},t.createElement(i.S,{src:"../../images/icons/star-ellipse.png",alt:"",__imageData:c(3868)}),t.createElement("p",null,"Только качественная продукция и материалы"))),t.createElement(l.z,null,"Рассчитать стоимость материалов")),t.createElement("div",{className:"welcome-box__right"},t.createElement(i.S,{src:"../../images/home/home-plitka.png",alt:"",__imageData:c(9337)})))))};var d=function(){return t.createElement("section",{className:"hww-section"},t.createElement("div",{className:"container"},t.createElement("h3",null,"Как мы работаем"),t.createElement("div",{className:"hww__work-cards"},t.createElement("div",{className:"hww__work-card flex"},t.createElement("div",null,t.createElement(i.S,{src:"../../images/icons/waterpass.png",alt:"",__imageData:c(8266)})),t.createElement("h4",null,"Замеры"),t.createElement("p",null,"В течение одного рабочего дня наши специалисты осуществят замер Ваших территорий.")),t.createElement("div",{className:"hww__work-card flex"},t.createElement("div",null,t.createElement(i.S,{src:"../../images/icons/grunt.png",alt:"",__imageData:c(1560)})),t.createElement("h4",null,"Подготовка грунта"),t.createElement("p",null,"Для подготовки основания используются только экологически чистые и высококачественные материалы.")),t.createElement("div",{className:"hww__work-card flex"},t.createElement("div",null,t.createElement(i.S,{src:"../../images/icons/bricks.png",alt:"",__imageData:c(8935)})),t.createElement("h4",null,"Укладка"),t.createElement("p",null,"Укладка тротуарного покрытия любой сложности осуществляется качественно и в оговоренные сроки")),t.createElement("div",{className:"hww__work-card flex"},t.createElement("div",null,t.createElement(i.S,{src:"../../images/icons/ramming.png",alt:"",__imageData:c(7560)})),t.createElement("h4",null,"Трамбовка"),t.createElement("p",null,"Для выравнивания и утрамбовки грунта используется высококачественная виброплита.")),t.createElement("div",{className:"hww__work-card flex"},t.createElement("div",null,t.createElement(i.S,{src:"../../images/icons/fill-up-bucket.png",alt:"",__imageData:c(9483)})),t.createElement("h4",null,"Засыпка"),t.createElement("p",null,"На завершающем этапе на уложенной плитке засыпается слой высококачественного, просеянного песка.")),t.createElement("div",{className:"hww__work-card flex"},t.createElement("div",null,t.createElement(i.S,{src:"../../images/icons/card.png",alt:"",__imageData:c(1957)})),t.createElement("h4",null,"Оплата"),t.createElement("p",null,"Платежи принимаются как в наличном, так и безналичном виде.")))))};var r=function(){return t.createElement("section",{className:"home__services"},t.createElement("div",{className:"home__services-box flex"},t.createElement("div",{className:"container"},t.createElement("div",{className:"home__services__info"},t.createElement("h3",null,"Наши услуги"),t.createElement("span",null,"Для наших клиентов мы предоставляем широкий спектр услуг, таких как:",t.createElement("ul",null,t.createElement("li",null,"укладка тротуарной плитки;"),t.createElement("li",null,"укладка бордюра;"),t.createElement("li",null,"доставка сыпучих материалов"),t.createElement("li",null,"другие."))),t.createElement(l.z,{type:"link",to:"/services"},"Подробнее об услугах")))))},f=c(2479);var p=function(){return t.createElement("section",{className:"products-section"},t.createElement("div",{className:"container"},t.createElement(f.O_,null)))};var m=function(){return t.createElement("section",{className:"home__portpholio-section"},t.createElement("div",{className:"home__portfolio-box flex"},t.createElement("div",{className:"container"},t.createElement("div",{className:"home__portfolio__info"},t.createElement("h3",null,"Выполняем работы любой сложности"),t.createElement("span",null,"Выполненые работы с различными узорами и уровнем сложности вы можете посмотреть в нашем портфолио"),t.createElement(l.z,{type:"link",to:"/portfolio"},"Посмотреть работы")))),t.createElement("div",{className:"container"},t.createElement("div",{className:"home__portfolio-galery"},t.createElement(i.S,{src:"https://i.pinimg.com/originals/3e/4c/10/3e4c1058798b8199f159bc1725b603db.jpg",alt:"",width:380,height:380,objectFit:"contain",__imageData:c(2169)}),t.createElement(i.S,{src:"https://i.pinimg.com/originals/ac/0f/53/ac0f53da1db87cf4bf60b7a1e49e4c5c.jpg",alt:"",width:380,height:380,objectFit:"contain",__imageData:c(7748)}),t.createElement(i.S,{src:"https://i.pinimg.com/originals/e3/a6/9a/e3a69ac57820e59f61fa935bbbcaeb15.jpg",alt:"",width:380,height:380,objectFit:"contain",__imageData:c(444)}))))};var o=function(){return t.createElement("section",{className:"home__about-section"},t.createElement("div",{className:"home__about-box"},t.createElement("div",{className:"home__about__info flex"},t.createElement("div",{className:"home__about__info-box"},t.createElement("h3",null,"О нас"),t.createElement("p",null,"Наша компания 7 лет занимается производством изделий из высококачественного бетона, а именно:"),t.createElement("ul",null,t.createElement("li",null,"вибропрессованной тротуарной плитки;"),t.createElement("li",null,"вибролитьевой тротуарной плитки;"),t.createElement("li",null,"бордюрных камней;"),t.createElement("li",null,"и других видов бетонных изделий.")),t.createElement("p",null,"Качество изделий подтверждается лабораторными испытаниями и соответствует всем ГОСТам."),t.createElement("p",null,"Многолетний опыт дает нам возможность, не боясь работы любой сложности, гарантировать качественный результат."),t.createElement(l.z,{type:"link",to:"/about"},"Узнать подробнее о производстве"))),t.createElement(i.S,{src:"../../images/home/about-section-plitka.jpg",alt:"",__imageData:c(8924)})))},w=function(){return t.createElement(n.Z,null,t.createElement(s.Z,{title:"Главная"}),t.createElement(b,null),t.createElement(d,null),t.createElement(r,null),t.createElement(p,null),t.createElement(m,null),t.createElement(o,null))}},9337:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/8ab5ed4dfc0e580e11ee63a4b6531caf/abddc/home-plitka.png","srcSet":"/static/8ab5ed4dfc0e580e11ee63a4b6531caf/b0c6f/home-plitka.png 142w,\\n/static/8ab5ed4dfc0e580e11ee63a4b6531caf/0cee8/home-plitka.png 285w,\\n/static/8ab5ed4dfc0e580e11ee63a4b6531caf/abddc/home-plitka.png 569w","sizes":"(min-width: 569px) 569px, 100vw"},"sources":[{"srcSet":"/static/8ab5ed4dfc0e580e11ee63a4b6531caf/f9b32/home-plitka.webp 142w,\\n/static/8ab5ed4dfc0e580e11ee63a4b6531caf/efa4b/home-plitka.webp 285w,\\n/static/8ab5ed4dfc0e580e11ee63a4b6531caf/16aae/home-plitka.webp 569w","type":"image/webp","sizes":"(min-width: 569px) 569px, 100vw"}]},"width":569,"height":447.99999999999994}')},2169:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#c8c8c8","images":{"fallback":{"src":"/static/926643b303dca70971a80f5ee2d8d7d4/852aa/3e4c1058798b8199f159bc1725b603db.jpg","srcSet":"/static/926643b303dca70971a80f5ee2d8d7d4/2963c/3e4c1058798b8199f159bc1725b603db.jpg 95w,\\n/static/926643b303dca70971a80f5ee2d8d7d4/cc4c5/3e4c1058798b8199f159bc1725b603db.jpg 190w,\\n/static/926643b303dca70971a80f5ee2d8d7d4/852aa/3e4c1058798b8199f159bc1725b603db.jpg 380w","sizes":"(min-width: 380px) 380px, 100vw"},"sources":[{"srcSet":"/static/926643b303dca70971a80f5ee2d8d7d4/97e84/3e4c1058798b8199f159bc1725b603db.webp 95w,\\n/static/926643b303dca70971a80f5ee2d8d7d4/4366b/3e4c1058798b8199f159bc1725b603db.webp 190w,\\n/static/926643b303dca70971a80f5ee2d8d7d4/3f812/3e4c1058798b8199f159bc1725b603db.webp 380w","type":"image/webp","sizes":"(min-width: 380px) 380px, 100vw"}]},"width":380,"height":380}')},9483:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#4898d8","images":{"fallback":{"src":"/static/afe4a5a4e3a7226cd0367a98821ecf3e/de3a1/fill-up-bucket.png","srcSet":"/static/afe4a5a4e3a7226cd0367a98821ecf3e/f2a56/fill-up-bucket.png 38w,\\n/static/afe4a5a4e3a7226cd0367a98821ecf3e/7458e/fill-up-bucket.png 75w,\\n/static/afe4a5a4e3a7226cd0367a98821ecf3e/de3a1/fill-up-bucket.png 150w","sizes":"(min-width: 150px) 150px, 100vw"},"sources":[{"srcSet":"/static/afe4a5a4e3a7226cd0367a98821ecf3e/0852d/fill-up-bucket.webp 38w,\\n/static/afe4a5a4e3a7226cd0367a98821ecf3e/18188/fill-up-bucket.webp 75w,\\n/static/afe4a5a4e3a7226cd0367a98821ecf3e/c65bc/fill-up-bucket.webp 150w","type":"image/webp","sizes":"(min-width: 150px) 150px, 100vw"}]},"width":150,"height":150}')},7748:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/ddcd55667ee067f215a199d0a481f937/852aa/ac0f53da1db87cf4bf60b7a1e49e4c5c.jpg","srcSet":"/static/ddcd55667ee067f215a199d0a481f937/2963c/ac0f53da1db87cf4bf60b7a1e49e4c5c.jpg 95w,\\n/static/ddcd55667ee067f215a199d0a481f937/cc4c5/ac0f53da1db87cf4bf60b7a1e49e4c5c.jpg 190w,\\n/static/ddcd55667ee067f215a199d0a481f937/852aa/ac0f53da1db87cf4bf60b7a1e49e4c5c.jpg 380w,\\n/static/ddcd55667ee067f215a199d0a481f937/de2cb/ac0f53da1db87cf4bf60b7a1e49e4c5c.jpg 760w","sizes":"(min-width: 380px) 380px, 100vw"},"sources":[{"srcSet":"/static/ddcd55667ee067f215a199d0a481f937/97e84/ac0f53da1db87cf4bf60b7a1e49e4c5c.webp 95w,\\n/static/ddcd55667ee067f215a199d0a481f937/4366b/ac0f53da1db87cf4bf60b7a1e49e4c5c.webp 190w,\\n/static/ddcd55667ee067f215a199d0a481f937/3f812/ac0f53da1db87cf4bf60b7a1e49e4c5c.webp 380w,\\n/static/ddcd55667ee067f215a199d0a481f937/46b1c/ac0f53da1db87cf4bf60b7a1e49e4c5c.webp 760w","type":"image/webp","sizes":"(min-width: 380px) 380px, 100vw"}]},"width":380,"height":380}')},5218:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#4898d8","images":{"fallback":{"src":"/static/203acbd7fa01222fde434cf4f6fd0244/ad998/cost-ellipse.png","srcSet":"/static/203acbd7fa01222fde434cf4f6fd0244/7ceb7/cost-ellipse.png 18w,\\n/static/203acbd7fa01222fde434cf4f6fd0244/83fe9/cost-ellipse.png 35w,\\n/static/203acbd7fa01222fde434cf4f6fd0244/ad998/cost-ellipse.png 70w","sizes":"(min-width: 70px) 70px, 100vw"},"sources":[{"srcSet":"/static/203acbd7fa01222fde434cf4f6fd0244/4f7ad/cost-ellipse.webp 18w,\\n/static/203acbd7fa01222fde434cf4f6fd0244/dbb7e/cost-ellipse.webp 35w,\\n/static/203acbd7fa01222fde434cf4f6fd0244/299bc/cost-ellipse.webp 70w","type":"image/webp","sizes":"(min-width: 70px) 70px, 100vw"}]},"width":70,"height":70}')},8190:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#4898d8","images":{"fallback":{"src":"/static/fc9721b50bff7ccddc664f7e2b9410c9/ad998/like-ellipse.png","srcSet":"/static/fc9721b50bff7ccddc664f7e2b9410c9/7ceb7/like-ellipse.png 18w,\\n/static/fc9721b50bff7ccddc664f7e2b9410c9/83fe9/like-ellipse.png 35w,\\n/static/fc9721b50bff7ccddc664f7e2b9410c9/ad998/like-ellipse.png 70w","sizes":"(min-width: 70px) 70px, 100vw"},"sources":[{"srcSet":"/static/fc9721b50bff7ccddc664f7e2b9410c9/4f7ad/like-ellipse.webp 18w,\\n/static/fc9721b50bff7ccddc664f7e2b9410c9/dbb7e/like-ellipse.webp 35w,\\n/static/fc9721b50bff7ccddc664f7e2b9410c9/299bc/like-ellipse.webp 70w","type":"image/webp","sizes":"(min-width: 70px) 70px, 100vw"}]},"width":70,"height":70}')},8924:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#b8b8b8","images":{"fallback":{"src":"/static/58ce3ac62b21c5afd29c9941d7dd4cd1/d0b9c/about-section-plitka.jpg","srcSet":"/static/58ce3ac62b21c5afd29c9941d7dd4cd1/90ed1/about-section-plitka.jpg 200w,\\n/static/58ce3ac62b21c5afd29c9941d7dd4cd1/2070e/about-section-plitka.jpg 400w,\\n/static/58ce3ac62b21c5afd29c9941d7dd4cd1/d0b9c/about-section-plitka.jpg 800w","sizes":"(min-width: 800px) 800px, 100vw"},"sources":[{"srcSet":"/static/58ce3ac62b21c5afd29c9941d7dd4cd1/b5535/about-section-plitka.webp 200w,\\n/static/58ce3ac62b21c5afd29c9941d7dd4cd1/f5c71/about-section-plitka.webp 400w,\\n/static/58ce3ac62b21c5afd29c9941d7dd4cd1/0d27e/about-section-plitka.webp 800w","type":"image/webp","sizes":"(min-width: 800px) 800px, 100vw"}]},"width":800,"height":600}')},1560:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#4898d8","images":{"fallback":{"src":"/static/08cff568ae30f44e5fb43bf3bec3f53b/de3a1/grunt.png","srcSet":"/static/08cff568ae30f44e5fb43bf3bec3f53b/f2a56/grunt.png 38w,\\n/static/08cff568ae30f44e5fb43bf3bec3f53b/7458e/grunt.png 75w,\\n/static/08cff568ae30f44e5fb43bf3bec3f53b/de3a1/grunt.png 150w","sizes":"(min-width: 150px) 150px, 100vw"},"sources":[{"srcSet":"/static/08cff568ae30f44e5fb43bf3bec3f53b/0852d/grunt.webp 38w,\\n/static/08cff568ae30f44e5fb43bf3bec3f53b/18188/grunt.webp 75w,\\n/static/08cff568ae30f44e5fb43bf3bec3f53b/c65bc/grunt.webp 150w","type":"image/webp","sizes":"(min-width: 150px) 150px, 100vw"}]},"width":150,"height":150}')},444:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#383838","images":{"fallback":{"src":"/static/1af4abb57abfe372d8f21e0241bd9335/852aa/e3a69ac57820e59f61fa935bbbcaeb15.jpg","srcSet":"/static/1af4abb57abfe372d8f21e0241bd9335/2963c/e3a69ac57820e59f61fa935bbbcaeb15.jpg 95w,\\n/static/1af4abb57abfe372d8f21e0241bd9335/cc4c5/e3a69ac57820e59f61fa935bbbcaeb15.jpg 190w,\\n/static/1af4abb57abfe372d8f21e0241bd9335/852aa/e3a69ac57820e59f61fa935bbbcaeb15.jpg 380w,\\n/static/1af4abb57abfe372d8f21e0241bd9335/de2cb/e3a69ac57820e59f61fa935bbbcaeb15.jpg 760w","sizes":"(min-width: 380px) 380px, 100vw"},"sources":[{"srcSet":"/static/1af4abb57abfe372d8f21e0241bd9335/97e84/e3a69ac57820e59f61fa935bbbcaeb15.webp 95w,\\n/static/1af4abb57abfe372d8f21e0241bd9335/4366b/e3a69ac57820e59f61fa935bbbcaeb15.webp 190w,\\n/static/1af4abb57abfe372d8f21e0241bd9335/3f812/e3a69ac57820e59f61fa935bbbcaeb15.webp 380w,\\n/static/1af4abb57abfe372d8f21e0241bd9335/46b1c/e3a69ac57820e59f61fa935bbbcaeb15.webp 760w","type":"image/webp","sizes":"(min-width: 380px) 380px, 100vw"}]},"width":380,"height":380}')},3868:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#4898d8","images":{"fallback":{"src":"/static/edbfa3feb66cebb40b58aa88413c885f/ad998/star-ellipse.png","srcSet":"/static/edbfa3feb66cebb40b58aa88413c885f/7ceb7/star-ellipse.png 18w,\\n/static/edbfa3feb66cebb40b58aa88413c885f/83fe9/star-ellipse.png 35w,\\n/static/edbfa3feb66cebb40b58aa88413c885f/ad998/star-ellipse.png 70w","sizes":"(min-width: 70px) 70px, 100vw"},"sources":[{"srcSet":"/static/edbfa3feb66cebb40b58aa88413c885f/4f7ad/star-ellipse.webp 18w,\\n/static/edbfa3feb66cebb40b58aa88413c885f/dbb7e/star-ellipse.webp 35w,\\n/static/edbfa3feb66cebb40b58aa88413c885f/299bc/star-ellipse.webp 70w","type":"image/webp","sizes":"(min-width: 70px) 70px, 100vw"}]},"width":70,"height":70}')},8266:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#4898d8","images":{"fallback":{"src":"/static/8946bbb3724b299891669772377cb009/de3a1/waterpass.png","srcSet":"/static/8946bbb3724b299891669772377cb009/f2a56/waterpass.png 38w,\\n/static/8946bbb3724b299891669772377cb009/7458e/waterpass.png 75w,\\n/static/8946bbb3724b299891669772377cb009/de3a1/waterpass.png 150w","sizes":"(min-width: 150px) 150px, 100vw"},"sources":[{"srcSet":"/static/8946bbb3724b299891669772377cb009/0852d/waterpass.webp 38w,\\n/static/8946bbb3724b299891669772377cb009/18188/waterpass.webp 75w,\\n/static/8946bbb3724b299891669772377cb009/c65bc/waterpass.webp 150w","type":"image/webp","sizes":"(min-width: 150px) 150px, 100vw"}]},"width":150,"height":150}')},5072:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#0898d8","images":{"fallback":{"src":"/static/2de9e9663e56c144e9a54eee79e34407/98419/empty-box.png","srcSet":"/static/2de9e9663e56c144e9a54eee79e34407/7eabf/empty-box.png 200w,\\n/static/2de9e9663e56c144e9a54eee79e34407/5b8d0/empty-box.png 400w,\\n/static/2de9e9663e56c144e9a54eee79e34407/98419/empty-box.png 800w","sizes":"(min-width: 800px) 800px, 100vw"},"sources":[{"srcSet":"/static/2de9e9663e56c144e9a54eee79e34407/faf2a/empty-box.webp 200w,\\n/static/2de9e9663e56c144e9a54eee79e34407/92496/empty-box.webp 400w,\\n/static/2de9e9663e56c144e9a54eee79e34407/c6814/empty-box.webp 800w","type":"image/webp","sizes":"(min-width: 800px) 800px, 100vw"}]},"width":800,"height":742}')},7560:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/e94c979218fd5f3877f6bc318f5c1213/de3a1/ramming.png","srcSet":"/static/e94c979218fd5f3877f6bc318f5c1213/f2a56/ramming.png 38w,\\n/static/e94c979218fd5f3877f6bc318f5c1213/7458e/ramming.png 75w,\\n/static/e94c979218fd5f3877f6bc318f5c1213/de3a1/ramming.png 150w","sizes":"(min-width: 150px) 150px, 100vw"},"sources":[{"srcSet":"/static/e94c979218fd5f3877f6bc318f5c1213/0852d/ramming.webp 38w,\\n/static/e94c979218fd5f3877f6bc318f5c1213/18188/ramming.webp 75w,\\n/static/e94c979218fd5f3877f6bc318f5c1213/c65bc/ramming.webp 150w","type":"image/webp","sizes":"(min-width: 150px) 150px, 100vw"}]},"width":150,"height":150}')},8935:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#4898d8","images":{"fallback":{"src":"/static/aa3c1f2c46e34a5760a501c8c0650ee7/de3a1/bricks.png","srcSet":"/static/aa3c1f2c46e34a5760a501c8c0650ee7/f2a56/bricks.png 38w,\\n/static/aa3c1f2c46e34a5760a501c8c0650ee7/7458e/bricks.png 75w,\\n/static/aa3c1f2c46e34a5760a501c8c0650ee7/de3a1/bricks.png 150w","sizes":"(min-width: 150px) 150px, 100vw"},"sources":[{"srcSet":"/static/aa3c1f2c46e34a5760a501c8c0650ee7/0852d/bricks.webp 38w,\\n/static/aa3c1f2c46e34a5760a501c8c0650ee7/18188/bricks.webp 75w,\\n/static/aa3c1f2c46e34a5760a501c8c0650ee7/c65bc/bricks.webp 150w","type":"image/webp","sizes":"(min-width: 150px) 150px, 100vw"}]},"width":150,"height":150}')},1957:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/f07de9dc574ac8e148bd32d61d9c13c4/b6f74/card.png","srcSet":"/static/f07de9dc574ac8e148bd32d61d9c13c4/d92d6/card.png 36w,\\n/static/f07de9dc574ac8e148bd32d61d9c13c4/9f8e8/card.png 72w,\\n/static/f07de9dc574ac8e148bd32d61d9c13c4/b6f74/card.png 143w","sizes":"(min-width: 143px) 143px, 100vw"},"sources":[{"srcSet":"/static/f07de9dc574ac8e148bd32d61d9c13c4/6bf11/card.webp 36w,\\n/static/f07de9dc574ac8e148bd32d61d9c13c4/9bf90/card.webp 72w,\\n/static/f07de9dc574ac8e148bd32d61d9c13c4/b940f/card.webp 143w","type":"image/webp","sizes":"(min-width: 143px) 143px, 100vw"}]},"width":143,"height":150}')}}]);
//# sourceMappingURL=component---src-pages-index-js-003f70919e5074f8619f.js.map