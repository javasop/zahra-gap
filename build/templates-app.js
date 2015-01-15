angular.module('templates-app', ['about/about.tpl.html', 'contact/contact.tpl.html', 'event/booking/booking.tpl.html', 'event/event.tpl.html', 'event/eventDetail/eventsDetail.tpl.html', 'event/tickets/tickets.tpl.html', 'home/home.tpl.html', 'sectionIntro/sectionIntro.tpl.html', 'store/buy/buy.tpl.html', 'store/checkout/checkout.tpl.html', 'store/productDetail/productDetail.tpl.html', 'store/store.tpl.html']);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
    "<div class=\"row\">\n" +
    "  <h1 class=\"page-header\">\n" +
    "    The Elevator Pitch\n" +
    "    <small>For the lazy and impatient.</small>\n" +
    "  </h1>\n" +
    "  <p>\n" +
    "    <code>ng-boilerplate</code> is an opinionated kickstarter for web\n" +
    "    development projects. It's an attempt to create a simple starter for new\n" +
    "    web sites and apps: just download it and start coding. The goal is to\n" +
    "    have everything you need to get started out of the box; of course it has\n" +
    "    slick styles and icons, but it also has a best practice directory structure\n" +
    "    to ensure maximum code reuse. And it's all tied together with a robust\n" +
    "    build system chock-full of some time-saving goodness.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Why?</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Because my team and I make web apps, and \n" +
    "    last year AngularJS became our client-side framework of choice. We start\n" +
    "    websites the same way every time: create a directory structure, copy and\n" +
    "    ever-so-slightly tweak some config files from an older project, and yada\n" +
    "    yada, etc., and so on and so forth. Why are we repeating ourselves? We wanted a starting point; a set of\n" +
    "    best practices that we could identify our projects as embodying and a set of\n" +
    "    time-saving wonderfulness, because time is money.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    There are other similar projects out there, but none of them suited our\n" +
    "    needs. Some are awesome but were just too much, existing more as reference\n" +
    "    implementations, when we really just wanted a kickstarter. Others were just\n" +
    "    too little, with puny build systems and unscalable architectures.  So we\n" +
    "    designed <code>ng-boilerplate</code> to be just right.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>What ng-boilerplate Is Not</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    This is not an example of an AngularJS app. This is a kickstarter. If\n" +
    "    you're looking for an example of what a complete, non-trivial AngularJS app\n" +
    "    that does something real looks like, complete with a REST backend and\n" +
    "    authentication and authorization, then take a look at <code><a\n" +
    "        href=\"https://github.com/angular-app/angular-app/\">angular-app</a></code>, \n" +
    "    which does just that, and does it well.\n" +
    "  </p>\n" +
    "\n" +
    "  <h1 class=\"page-header\">\n" +
    "    So What's Included?\n" +
    "    <small>I'll try to be more specific than \"awesomeness\".</small>\n" +
    "  </h1>\n" +
    "  <p>\n" +
    "    This section is just a quick introduction to all the junk that comes\n" +
    "    pre-packaged with <code>ng-boilerplate</code>. For information on how to\n" +
    "    use it, see the <a\n" +
    "      href=\"https://github.com/joshdmiller/ng-boilerplate#readme\">project page</a> at\n" +
    "    GitHub.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    The high-altitude view is that the base project includes \n" +
    "    <a href=\"http://getbootstrap.com\">Twitter Bootstrap</a>\n" +
    "    styles to quickly produce slick-looking responsive web sites and apps. It also\n" +
    "    includes <a href=\"http://angular-ui.github.com/bootstrap\">UI Bootstrap</a>,\n" +
    "    a collection of native AngularJS directives based on the aforementioned\n" +
    "    templates and styles. It also includes <a href=\"http://fortawesome.github.com/Font-Awesome/\">Font Awesome</a>,\n" +
    "    a wicked-cool collection of font-based icons that work swimmingly with all\n" +
    "    manner of web projects; in fact, all images on the site are actually font-\n" +
    "    based icons from Font Awesome. Neat! Lastly, this also includes\n" +
    "    <a href=\"http://joshdmiller.github.com/angular-placeholders\">Angular Placeholders</a>,\n" +
    "    a set of pure AngularJS directives to do client-side placeholder images and\n" +
    "    text to make mocking user interfaces super easy.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    And, of course, <code>ng-boilerplate</code> is built on <a href=\"http://angularjs.org\">AngularJS</a>,\n" +
    "    by the far the best JavaScript framework out there! But if you don't know\n" +
    "    that already, then how did you get here? Well, no matter - just drink the\n" +
    "    Kool Aid. Do it. You know you want to.\n" +
    "  </p>\n" +
    "  \n" +
    "  <h2>Twitter Bootstrap</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    You already know about this, right? If not, <a\n" +
    "      href=\"http://getbootstrap.com\">hop on over</a> and check it out; it's\n" +
    "    pretty sweet. Anyway, all that wonderful stylistic goodness comes built in.\n" +
    "    The LESS files are available for you to import in your main stylesheet as\n" +
    "    needed - no excess, no waste. There is also a dedicated place to override\n" +
    "    variables and mixins to suit your specific needs, so updating to the latest\n" +
    "    version of Bootstrap is as simple as: \n" +
    "  </p>\n" +
    "\n" +
    "  <pre>$ cd vendor/twitter-bootstrap<br />$ git pull origin master</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Boom! And victory is ours.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>UI Bootstrap</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    What's better than Bootstrap styles? Bootstrap directives!  The fantastic <a href=\"http://angular-ui.github.com/bootstrap\">UI Bootstrap</a>\n" +
    "    library contains a set of native AngularJS directives that are endlessly\n" +
    "    extensible. You get the tabs, the tooltips, the accordions. You get your\n" +
    "    carousel, your modals, your pagination. And <i>more</i>.\n" +
    "    How about a quick demo? \n" +
    "  </p>\n" +
    "\n" +
    "  <ul>\n" +
    "    <li class=\"dropdown\">\n" +
    "      <a class=\"btn dropdown-toggle\">\n" +
    "        Click me!\n" +
    "      </a>\n" +
    "      <ul class=\"dropdown-menu\">\n" +
    "        <li ng-repeat=\"choice in dropdownDemoItems\">\n" +
    "          <a>{{choice}}</a>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "\n" +
    "  <p>\n" +
    "    Oh, and don't include jQuery;  \n" +
    "    you don't need it.\n" +
    "    This is better.\n" +
    "    Don't be one of those people. <sup>*</sup>\n" +
    "  </p>\n" +
    "\n" +
    "  <p><small><sup>*</sup> Yes, there are exceptions.</small></p>\n" +
    "\n" +
    "  <h2>Font Awesome</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Font Awesome has earned its label. It's a set of open (!) icons that come\n" +
    "    distributed as a font (!) for super-easy, lightweight use. Font Awesome \n" +
    "    works really well with Twitter Bootstrap, and so fits right in here.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    There is not a single image on this site. All of the little images and icons \n" +
    "    are drawn through Font Awesome! All it takes is a little class:\n" +
    "  </p>\n" +
    "\n" +
    "  <pre>&lt;i class=\"fa fa-flag\"&gt;&lt/i&gt</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    And you get one of these: <i class=\"fa fa-flag\"> </i>. Neat!\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Placeholders</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Angular Placeholders is a simple library for mocking up text and images. You\n" +
    "    can automatically throw around some \"lorem ipsum\" text:\n" +
    "  </p>\n" +
    "\n" +
    "  <pre>&lt;p ph-txt=\"3s\"&gt;&lt;/p&gt;</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Which gives you this:\n" +
    "  </p>\n" +
    "\n" +
    "  <div class=\"pre\">\n" +
    "    &lt;p&gt;\n" +
    "    <p ph-txt=\"3s\"></p>\n" +
    "    &lt;/p&gt;\n" +
    "  </div>\n" +
    "\n" +
    "  <p>\n" +
    "    Even more exciting, you can also create placeholder images, entirely \n" +
    "    client-side! For example, this:\n" +
    "  </p>\n" +
    "  \n" +
    "  <pre>\n" +
    "&lt;img ph-img=\"50x50\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-polaroid\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-rounded\" /&gt;\n" +
    "&lt;img ph-img=\"50x50\" class=\"img-circle\" /&gt;</pre>\n" +
    "\n" +
    "  <p>\n" +
    "    Gives you this:\n" +
    "  </p>\n" +
    "\n" +
    "  <div>\n" +
    "    <img ph-img=\"50x50\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-polaroid\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-rounded\" />\n" +
    "    <img ph-img=\"50x50\" class=\"img-circle\" />\n" +
    "  </div>\n" +
    "\n" +
    "  <p>\n" +
    "    Which is awesome.\n" +
    "  </p>\n" +
    "\n" +
    "  <h1 class=\"page-header\">\n" +
    "    The Roadmap\n" +
    "    <small>Really? What more could you want?</small>\n" +
    "  </h1>\n" +
    "\n" +
    "  <p>\n" +
    "    This is a project that is <i>not</i> broad in scope, so there's not really\n" +
    "    much of a wish list here. But I would like to see a couple of things:\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    I'd like it to be a little simpler. I want this to be a universal starting\n" +
    "    point. If someone is starting a new AngularJS project, she should be able to\n" +
    "    clone, merge, or download its source and immediately start doing what she\n" +
    "    needs without renaming a bunch of files and methods or deleting spare parts\n" +
    "    ... like this page. This works for a first release, but I just think there\n" +
    "    is a little too much here right now.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    I'd also like to see a simple generator. Nothing like <a href=\"yeoman.io\">\n" +
    "    Yeoman</a>, as there already is one of those, but just something that\n" +
    "    says \"I want Bootstrap but not Font Awesome and my app is called 'coolApp'.\n" +
    "    Gimme.\" Perhaps a custom download builder like UI Bootstrap\n" +
    "    has. Like that. Then again, perhaps some Yeoman generators wouldn't be out\n" +
    "    of line. I don't know. What do you think?\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    Naturally, I am open to all manner of ideas and suggestions. See the \"Can I\n" +
    "    Help?\" section below.\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>The Tactical To Do List</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    There isn't much of a demonstration of UI Bootstrap. I don't want to pollute\n" +
    "    the code with a demo for demo's sake, but I feel we should showcase it in\n" +
    "    <i>some</i> way.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    <code>ng-boilerplate</code> should include end-to-end tests. This should\n" +
    "    happen soon. I just haven't had the time.\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    Lastly, this site should be prettier, but I'm no web designer. Throw me a\n" +
    "    bone here, people!\n" +
    "  </p>\n" +
    "\n" +
    "  <h2>Can I Help?</h2>\n" +
    "\n" +
    "  <p>\n" +
    "    Yes, please!\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    This is an opinionated kickstarter, but the opinions are fluid and\n" +
    "    evidence-based. Don't like the way I did something? Think you know of a\n" +
    "    better way? Have an idea to make this more useful? Let me know! You can\n" +
    "    contact me through all the usual channels or you can open an issue on the\n" +
    "    GitHub page. If you're feeling ambitious, you can even submit a pull\n" +
    "    request - how thoughtful of you!\n" +
    "  </p>\n" +
    "\n" +
    "  <p>\n" +
    "    So join the team! We're good people.\n" +
    "  </p>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("contact/contact.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("contact/contact.tpl.html",
    "<ion-view style='background-color:transparent;overflow:visible'>\n" +
    "    <ion-content>\n" +
    "        <img class=\"col col-75 col-offset-33\" src='img/sections/contact/contact_logo.png'>\n" +
    "        <img width=\"100%\"  src=\"img/sections/contact/contact_text.png\">\n" +
    "        <div>\n" +
    "            <a href='' ng-click=\"show('ahsa')\" style=\"position: absolute;top: 45%;left: 65%;height: 10%;width: 10%;\">Ahsa</a>\n" +
    "            <a href='' ng-click=\"show('riyadh')\" style=\"position: absolute;top: 40%;left: 50%;height: 10%;width: 10%;\">Riyadh</a>\n" +
    "            <a href='' ng-click=\"show('madinah')\" style=\"position: absolute;top: 40%;left: 20%;height: 10%;width: 10%;\">Madinah</a>\n" +
    "            <a href='' ng-click=\"show('jeddah')\" style=\"position: absolute;top: 50%;left: 20%;height: 10%;width: 10%;\">Jeddah</a>\n" +
    "            <a href='' ng-click=\"show('abha')\" style=\"position: absolute;top: 61%;left: 33%;height: 10%;width: 10%;\">Abha</a>\n" +
    "\n" +
    "\n" +
    "            <img  width=\"100%\" src=\"img/sections/contact/contact_map.png\" >\n" +
    "            \n" +
    "            \n" +
    "        </div>\n" +
    "       \n" +
    "        <div style=\"margin-left:2%;margin-top:20%\" class='col' >\n" +
    "            <img ng-click=\"openExternal()\"  style=\"margin-right:1%\"  ng-repeat=\"s in social\" src='{{folder}}{{s}}.png' >\n" +
    "        </div>\n" +
    "    </ion-content>\n" +
    "</ion-view>\n" +
    "\n" +
    "");
}]);

angular.module("event/booking/booking.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("event/booking/booking.tpl.html",
    "<ion-view style='background-color:transparent;overflow: visible;margin-top:50px'>\n" +
    "<ion-content>\n" +
    "<form>\n" +
    "\n" +
    "	<div style=\"margin-bottom:40px;color:white\" class=\"col col-90 col-offset-20\" ng-repeat='f in forms'>\n" +
    "		<label style=\"float:right\" class=\"col col-50\" >{{f.ar}}</label>\n" +
    "		<input style=\"float:right;border-radius:10px\" class=\"col col-50\" type={{f.type}} required placeholder={{f.placeholder}} ng-model=\"f.value\" ></input>\n" +
    "	</div>\n" +
    "\n" +
    "	<button ng-click=\"submit()\"></button>\n" +
    "</form>\n" +
    "</ion-content>\n" +
    "</ion-view>\n" +
    "");
}]);

angular.module("event/event.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("event/event.tpl.html",
    "<ion-view style='background-color:transparent;overflow: visible;margin-top:50px'>\n" +
    "    <ion-content scroll='true' scrollbar-y=\"false\">\n" +
    "        <div class=\"card\">\n" +
    "            <div date-picker=\"start\" marked='marked' marks='marks' clicked='clicked' max-view=\"date\" min-view='date'></div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"list list-inset\">\n" +
    "            <div ng-repeat=\"s in sel track by $index\" class=\"item item-icon-right item-icon-left\">\n" +
    "                <a href='#/events/{{s.id}}'>\n" +
    "                    <span style='float:right'>{{s.name}}</span>\n" +
    "                    <i class='icon ion-calendar'></i>\n" +
    "                    <span style='text-align:left'>{{s.date| date:'yyyy-MM-dd'}}</span>\n" +
    "                    <i class='icon ion-ios7-arrow-right'></i>\n" +
    "                </a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </ion-content>\n" +
    "</ion-view>\n" +
    "");
}]);

angular.module("event/eventDetail/eventsDetail.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("event/eventDetail/eventsDetail.tpl.html",
    "<ion-view title=\"{{event.event_name}}\" style='background-color:transparent;overflow: visible'>\n" +
    "    <ion-nav-buttons side=\"right\">\n" +
    "        <a class=\"button button-positive\" href='#/tickets'>\n" +
    "          حجز\n" +
    "        </a>\n" +
    "    </ion-nav-buttons>\n" +
    "    <ion-content class=\"col col-90\" style=\"margin-left:5%\"  scroll='true' scrollbar-y=\"false\">\n" +
    "\n" +
    "        <!-- caresoul -->\n" +
    "<!--        <ul rn-carousel rn-carousel-control class=\"image\">\n" +
    "            <li ng-repeat=\"img in event.media track by $index\"> \n" +
    "                <div class=\"item item-image\">\n" +
    "                    <img height='300px' src=\"{{img}}\">\n" +
    "                </div>\n" +
    "            </li>\n" +
    "        </ul>-->\n" +
    "        \n" +
    "            <coverflow coverflow=\"coverflow\" images=\"event.media\" ></coverflow>\n" +
    "\n" +
    "\n" +
    "        <div  style=\"background-color: transparent;margin-bottom: 20px\">\n" +
    "            <div>\n" +
    "                <img class=\"col col-25\" width=\"90\" height=\"70\"   style=\"float:right\"  src=\"{{place}}\">\n" +
    "                <p style='color:white;float:right;text-align:right' class=\"col\">{{event.location[0].location_name}}</p>\n" +
    "\n" +
    "            </div>\n" +
    "            <div style=\"clear:both\"></div>\n" +
    "            <div  >\n" +
    "                <img class=\"col col-25\" width=\"90\" height=\"70\" style=\"float:right\"  src={{time}}>\n" +
    "\n" +
    "                <p style='color:white;float:right;text-align:right' class=\"col\">{{event.custom_meta._event_start_time}}</p>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "        <div style=\"clear:both\"></div>\n" +
    "      \n" +
    "        <div style=\"margin-top: 20px\" >\n" +
    "\n" +
    "            <img ng-click=\"openModal()\"  style=\"float:left\" class=\"col col-33\"  width=\"90\" height=\"70\"  src=\"{{zoom_text}}\">\n" +
    "\n" +
    "            <a><img style=\"float:right\" class=\"col col-33\"  width=\"90\" height=\"70\"  src=\"{{desc}}\"></a>\n" +
    "                <p style='color:white;float:right;text-align:right' class=\"col\">{{event.title}}</p>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "    </ion-content>\n" +
    "</ion-view>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<!-- Modal -->   \n" +
    "<script id=\"map.html\" type=\"text/ng-template\">\n" +
    "        <div class=\"modal\">\n" +
    "            <ion-header-bar  class=\"bar-positive\">\n" +
    "        <div class=\"buttons\">\n" +
    "        \n" +
    "                  <button class=\"button button-icon icon ion-close-round\" \n" +
    "        ng-click=\"closeModal()\"></button>\n" +
    "\n" +
    "\n" +
    "          <h1  class=\"title header-text\"> مكان الفعالية</h1>\n" +
    "\n" +
    "\n" +
    "        </div>\n" +
    "    </ion-header-bar>\n" +
    "        <ion-content>\n" +
    "        <google-map events=\"map.events\" control=\"map.control\"  refresh=\"true\" draggable=\"true\" center=\"map.center\" zoom=\"map.zoom\">\n" +
    "                <marker coords=\"searchLocationMarker.coords\"  >\n" +
    "        </marker>\n" +
    "            \n" +
    "            </google-map>\n" +
    "</ion-content>\n" +
    "        </div>\n" +
    "</script>\n" +
    "");
}]);

angular.module("event/tickets/tickets.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("event/tickets/tickets.tpl.html",
    "<ion-view title=\"{{event.title}}\" style='background-color:transparent;overflow: visible'>\n" +
    "    <ion-nav-buttons side=\"right\">\n" +
    "        <div ng-if=\"nav_text\">\n" +
    "            <a class=\"button button-positive\" href='#/form/events'>\n" +
    "                {{nav_text}}\n" +
    "            </a>\n" +
    "        </div>\n" +
    "    </ion-nav-buttons>\n" +
    "    <ion-content class=\"col col-90\" style=\"margin-left:5%\"  scroll='true' scrollbar-y=\"false\">\n" +
    "\n" +
    "        <!-- caresoul -->\n" +
    "        <ul rn-carousel rn-carousel-control class=\"image\">\n" +
    "            <li > \n" +
    "                <div class=\"item item-image\">\n" +
    "                    <img height='300px' src=\"{{event.featured}}\">\n" +
    "                </div>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "\n" +
    "        <ul style=\"text-align:center\">\n" +
    "            <li style=\"background-color: transparent;border:none;font-size:24px\" ng-repeat='t in event.tickets' class=\"item item-checkbox\">\n" +
    "\n" +
    "                <span  style=\"color:white\">{{t.ticket_name}}</span>\n" +
    "                <input ng-model=\"checked[$index]\" ng-click=\"change($index)\" ng-change=\"current = $index\" type=\"checkbox\" >\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "\n" +
    "\n" +
    "\n" +
    "    </ion-content>\n" +
    "</ion-view>\n" +
    "");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<ion-view title=\"\" style='background-color:transparent;overflow: visible' >\n" +
    "\n" +
    "    <ion-content>\n" +
    "        <img class=\"col col-80 col-offset-20\"  src=\"assets/sections/zahra_logo.png\">\n" +
    "        <!-- display when it's iphone and everything else just for testing -->\n" +
    "            <ion-slide-box   on-slide-changed=\"slideHasChanged($index)\">\n" +
    "                <ion-slide >\n" +
    "                    <a href='#/intro/education'><img  class=\"col col-offset-20 col-66\" src=\"assets/main_screen/s1/education.png\"></a>\n" +
    "                    <div style=\"clear: both\"></div>\n" +
    "                    <img style=\"float:left\"  class=\"col col-offset-20 col-33\" src=\"assets/main_screen/s1/gap1.png\">\n" +
    "                    <a href='#/store/main'><img style=\"float:left\" class=\"col  col-33\" src=\"assets/main_screen/s1/store1.png\"></a>\n" +
    "\n" +
    "                    <div style=\"clear: both\"></div>\n" +
    "                    <a href='#/intro/donations'><img style=\"float:left\"  class=\"col col-offset-20  col-33\" src=\"assets/main_screen/s1/donations.png\"></a>\n" +
    "                    <a href='#/intro/hospitals'><img style=\"float:left\" class=\"col col-33\" src=\"assets/main_screen/s1/hospitals.png\"></a>\n" +
    "\n" +
    "                    <div style=\"clear: both\"></div>\n" +
    "                    <a href='#/members'><img style=\"float:left\"  class=\"col col-offset-20  col-33\" src=\"assets/main_screen/s1/members.png\"></a>\n" +
    "                    <a href='#/intro/about'><img style=\"float:left\" class=\"col col-33\" src=\"assets/main_screen/s1/about.png\"></a>\n" +
    "                </ion-slide>\n" +
    "                <ion-slide>\n" +
    "                    <img style=\"float:left\"  class=\"col col-offset-20 col-33\" src=\"assets/main_screen/s2/gap2.png\">\n" +
    "                    <a href='#/intro/lamsa'><img style=\"float:left\" class=\"col col-33\" src=\"assets/main_screen/s2/lamsa.png\"></a>\n" +
    "                    <a href='#/events'><img  class=\"col col-66 col-offset-20\" src=\"assets/main_screen/s2/events.png\"></a>\n" +
    "                    <div style=\"clear: both\"></div>\n" +
    "                    <a href='#/intro/amal'><img  class=\"col col-66 col-offset-20\" src=\"assets/main_screen/s2/amal.png\"></a>\n" +
    "                    <div style=\"clear: both\"></div>\n" +
    "                    <img style=\"float:left\"  class=\"col col-offset-20 col-33\" src=\"assets/main_screen/s2/app.png\">    \n" +
    "                    <a href='#/contact'><img style=\"float:left\" class=\"col col-33\" src=\"assets/main_screen/s2/contact.png\"></a>\n" +
    "                </ion-slide>\n" +
    "            </ion-slide-box>\n" +
    "  </ion-content>\n" +
    "</ion-view>\n" +
    "\n" +
    "");
}]);

angular.module("sectionIntro/sectionIntro.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("sectionIntro/sectionIntro.tpl.html",
    "<ion-view style='background-color:transparent;overflow: visible'>\n" +
    "  \n" +
    "    <ion-content>\n" +
    "    <!--<img ng-src='{{intro.section-logo}}'>-->\n" +
    "    <img style='float:right'class=\"col col-50\"  src='assets/sections/{{type}}/{{intro.logo}}.png'>\n" +
    "\n" +
    "   <img class=\"col col-70\"  src=\"assets/sections/{{type}}/{{intro.text}}.png\" >\n" +
    "    \n" +
    "   <div ng-repeat=\"b in intro.buttons\">   \n" +
    "       <a ng-href=\"#/{{b.to}}\"><img style='margin-bottom:10px;padding:0' width=\"100%\" class='col col-33' src=\"assets/sections/{{type}}/{{b.image}}.png\"></a>\n" +
    "   </div> \n" +
    "    </ion-content>\n" +
    "</ion-view>\n" +
    "");
}]);

angular.module("store/buy/buy.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("store/buy/buy.tpl.html",
    "<ion-view style='background-color:transparent;overflow: visible;margin-top:50px'>\n" +
    "\n" +
    "    <ion-nav-buttons side=\"right\">\n" +
    "        <button style=\"color:white\" class=\"button button-icon\" \n" +
    "                ng-click=\"data.showDelete = !data.showDelete;\n" +
    "                    data.showReorder = false\">تعديل</button>\n" +
    "    </ion-nav-buttons>\n" +
    "    <div class=\"modal\">\n" +
    "        <ion-content>\n" +
    "            <ion-list show-delete=\"data.showDelete\" canSwipeItems=\"true\">\n" +
    "                <ion-item class=\"item-icon-left item-icon-right\"  ng-repeat=\"item in currentCart\" \n" +
    "                          item=\"item\">\n" +
    "                    <select  style=\"margin-left: 2px\"  ng-model=\"item.quantity\" ng-options=\"n for n in [] | range:1:{{item.stock}}\"></select>\n" +
    "\n" +
    "                    <img width=\"50\" height=\"50\" style=\"float:right\" src=\"{{item.featured}}\">\n" +
    "                    <p style=\"float:right\">\n" +
    "                        {{item.title}}\n" +
    "                    </p>\n" +
    "\n" +
    "                    <p style=\"float:left;margin-right:5px\">{{currency}}</p>\n" +
    "                    <p style=\"float:left\">\n" +
    "                        {{item.price}}\n" +
    "                    </p>\n" +
    "                    <ion-delete-button class=\"ion-minus-circled\" \n" +
    "                                       ng-click=\"onItemDelete(item)\">\n" +
    "                    </ion-delete-button>\n" +
    "                </ion-item>\n" +
    "\n" +
    "                <ion-item  class=\"\" item=\"item\">\n" +
    "                    <p style=\"float:right;font-size:18px\">الاجمالي</p>\n" +
    "                    <p style=\"float:left;margin-right:5px\">{{currency}}</p>\n" +
    "                    <p style=\"float:left\">\n" +
    "                        {{total.value}}\n" +
    "                    </p>\n" +
    "\n" +
    "                </ion-item>\n" +
    "\n" +
    "\n" +
    "                <ion-item  class=\"item-icon-left item-icon-right\" item=\"item\">\n" +
    "\n" +
    "                    <a href='#/form/store' class=\"button button-positive\" style=\"float:left\" >شراء</a>\n" +
    "\n" +
    "                </ion-item>\n" +
    "\n" +
    "                <ion-item  class=\"item-icon-left item-icon-right\" item=\"item\">\n" +
    "\n" +
    "                    <label class=\"item item-input\">\n" +
    "                        <input ng-blur=\"checkCoupon()\"  ng-model=\"co.cc\" type=\"text\" style=\"text-align: right\" placeholder=\"رقم الكوبون\">\n" +
    "                    </label>\n" +
    "\n" +
    "                </ion-item>\n" +
    "\n" +
    "\n" +
    "\n" +
    "            </ion-list>\n" +
    "        </ion-content>\n" +
    "    </div>\n" +
    "</ion-view>\n" +
    "");
}]);

angular.module("store/checkout/checkout.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("store/checkout/checkout.tpl.html",
    "<ion-view style='background-color:transparent;overflow: visible;margin-top:50px'>\n" +
    "<ion-content>\n" +
    "<form>\n" +
    "\n" +
    "	<div style=\"margin-bottom:40px;color:white\" class=\"col col-90 col-offset-20\" ng-repeat='f in forms'>\n" +
    "		<label style=\"float:right\" class=\"col col-50\" >{{f.ar}}</label>\n" +
    "		<input style=\"float:right;border-radius:10px\" class=\"col col-50\" type={{f.type}} required placeholder={{f.placeholder}} ng-model=\"f.value\" ></input>\n" +
    "	</div>\n" +
    "\n" +
    "	<button ng-click=\"submit()\"></button>\n" +
    "</form>\n" +
    "</ion-content>\n" +
    "</ion-view>\n" +
    "");
}]);

angular.module("store/productDetail/productDetail.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("store/productDetail/productDetail.tpl.html",
    "<ion-view title=\"{{product.title}}\" style='background-color:transparent;overflow: visible'>\n" +
    "\n" +
    "    <ion-nav-buttons side=\"right\">\n" +
    "        <button class=\"button button-positive\" ng-click=\"openModal()\">\n" +
    "            سلة المشتريات\n" +
    "        </button>\n" +
    "    </ion-nav-buttons>\n" +
    "    <ion-content class=\"col col-90\" style=\"margin-left:5%\"  scroll='true' scrollbar-y=\"false\">\n" +
    "\n" +
    "        <!-- caresoul \n" +
    "        <ul rn-carousel rn-carousel-control class=\"image\">\n" +
    "            <li ng-repeat=\"img in product.media track by $index\"> \n" +
    "                <div class=\"item item-image\">\n" +
    "                    <img src=\"{{img}}\">\n" +
    "                </div>\n" +
    "            </li>\n" +
    "    </ul>\n" +
    "    -->\n" +
    "\n" +
    "    <coverflow coverflow=\"coverflow\" images=\"product.media\" ></coverflow>\n" +
    "\n" +
    "\n" +
    "        <div  style=\"background-color: transparent;margin-bottom: 20px\">\n" +
    "            <div>\n" +
    "                <img class=\"col col-25\" width=\"90\" height=\"70\"   style=\"float:right\"  src=\"{{pricelb}}\">\n" +
    "                <p style=\"float:right\" class=\"col col-75\"><p  style=\"font-size:16px;color:white;text-align:right\" class=\"icon col col-offset-50\"><span style=\"text-align:right\">{{currency}}</span><span style=\"float:right;margin-left:5px\">{{product.custom_meta._wpsc_price}}</span></p></p>\n" +
    "\n" +
    "            </div>\n" +
    "            <div style=\"clear:both\"></div>\n" +
    "            <div  >\n" +
    "                <img class=\"col col-25\" width=\"90\" height=\"70\" style=\"float:right\"  src={{desc}}>\n" +
    "\n" +
    "                <p style=\"float:right;text-align:right\" class=\"col col-75\"><i  style=\"font-size:16px;color:white;text-align:right\" class=\"icon\">{{product.description}}</i></p>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "        <div style=\"clear:both\"></div>\n" +
    "      \n" +
    "            <img style=\"float:left\" class=\"col col-33\"  width=\"90\" height=\"70\" alt=\"hello\" src=\"{{button_tweet}}\">\n" +
    "\n" +
    "            <img style=\"float:right\" class=\"col col-33\" ng-click=\"addCart()\"  width=\"90\" height=\"70\" alt=\"hello\" src=\"{{button_add}}\">\n" +
    "\n" +
    "    </ion-content>\n" +
    "</ion-view>\n" +
    "\n" +
    "\n" +
    "\n" +
    "<!-- Modal -->   \n" +
    "<script id=\"cart.html\" type=\"text/ng-template\">\n" +
    "        <div class=\"modal\">\n" +
    "    <ion-header-bar  class=\"bar-positive\">\n" +
    "        <div class=\"buttons\">\n" +
    "        \n" +
    "                  <button class=\"button button-icon icon ion-close-round\" \n" +
    "        ng-click=\"closeModal()\"></button>\n" +
    "\n" +
    "\n" +
    "           <!--go back one month --> <h1  class=\"title header-text\"> سلة المشتريات</h1>\n" +
    "            <button class=\"button button-icon\" \n" +
    "                    ng-click=\"data.showDelete = !data.showDelete;\n" +
    "                        data.showReorder = false\">تعديل</button>\n" +
    "\n" +
    "        </div>\n" +
    "    </ion-header-bar>\n" +
    "<ion-content>\n" +
    "        <ion-list show-delete=\"data.showDelete\" canSwipeItems=\"true\">\n" +
    "                    <ion-item  class=\"item-icon-left item-icon-right\" ng-repeat=\"item in currentCart\" \n" +
    "                               item=\"item\">\n" +
    "              \n" +
    "            <p style=\"float:right\">\n" +
    "            {{item.title}}\n" +
    "</p>\n" +
    "\n" +
    "<p style=\"float:left;margin-right:5px\">{{currency}}</p>\n" +
    "            <p style=\"float:left\">\n" +
    "            {{item.custom_meta._wpsc_price}}\n" +
    "</p>\n" +
    "\n" +
    "                        <ion-delete-button class=\"ion-minus-circled\" \n" +
    "                                           ng-click=\"deleteCart(item)\">\n" +
    "                        </ion-delete-button>\n" +
    "\n" +
    "                    </ion-item>\n" +
    "            \n" +
    "             <ion-item  class=\"item-icon-left item-icon-right\" item=\"item\">\n" +
    "             <p style=\"float:left;margin-right:5px\">{{currency}}</p> <p style=\"float:right;font-size:18px\">الاجمالي</p>\n" +
    "\n" +
    "                         <p style=\"float:left\">\n" +
    "                         {{total.value}}\n" +
    "                            </p>\n" +
    "                    \n" +
    "                                      <i class=\"icon ion-cash\"></i>\n" +
    "\n" +
    "             </ion-item>\n" +
    "     \n" +
    "     \n" +
    "                  <ion-item  class=\"item-icon-left item-icon-right\" item=\"item\">\n" +
    "             \n" +
    "             <button class=\"button button-positive\" ng-click=\"go()\" style=\"float:right\" >شراء</button>\n" +
    "     \n" +
    "             </ion-item>\n" +
    "     \n" +
    "     \n" +
    "\n" +
    "        </ion-list>\n" +
    "</ion-content>\n" +
    "        </div>\n" +
    "</script>\n" +
    "");
}]);

angular.module("store/store.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("store/store.tpl.html",
    "<ion-view title=\"\" style='background-color:transparent;overflow: visible'>\n" +
    "    <ion-content >\n" +
    "        <div ng-repeat=\"p in products\">\n" +
    "            <a ng-click=\"go(p.ID)\">\n" +
    "                <img class=\"photos item\"  height=\"250px\" width=\"100%\"  ng-src=\"{{p.featured}}\">\n" +
    "            </a>\n" +
    "            <p style=\"color:white;text-align:center\">{{p.title}}</p>\n" +
    "        </div>\n" +
    "    </ion-content>\n" +
    "</ion-view>\n" +
    "");
}]);
