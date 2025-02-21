//@ui5-bundle cdsbasicapp/Component-preload.js
sap.ui.require.preload({
	"cdsbasicapp/Component.js":function(){
sap.ui.define(["sap/ui/core/UIComponent","cdsbasicapp/model/models"],(e,t)=>{"use strict";return e.extend("cdsbasicapp.Component",{metadata:{manifest:"json",interfaces:["sap.ui.core.IAsyncContentCreation"]},init(){e.prototype.init.apply(this,arguments);this.setModel(t.createDeviceModel(),"device");this.getRouter().initialize()}})});
},
	"cdsbasicapp/controller/App.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],e=>{"use strict";return e.extend("cdsbasicapp.controller.App",{onInit(){}})});
},
	"cdsbasicapp/controller/View1.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],e=>{"use strict";return e.extend("cdsbasicapp.controller.View1",{onInit(){}})});
},
	"cdsbasicapp/i18n/i18n.properties":'# This is the resource bundle for cdsbasicapp\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=CDS Basic App\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n#XTIT: Main view title\ntitle=CDS Basic App',
	"cdsbasicapp/manifest.json":'{"_version":"1.65.0","sap.app":{"id":"cdsbasicapp","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:basic","version":"1.16.4","toolsId":"f01c3f5e-e829-4bdd-abca-073bad99313a"},"dataSources":{"mainService":{"uri":"odata/v4/bpa-info/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.133.0","libs":{"sap.m":{},"sap.ui.core":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"cdsbasicapp.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","controlAggregation":"pages","controlId":"app","transition":"slide","type":"View","viewType":"XML","path":"cdsbasicapp.view"},"routes":[{"name":"RouteView1","pattern":":?query:","target":["TargetView1"]}],"targets":{"TargetView1":{"id":"View1","name":"View1"}}},"rootView":{"viewName":"cdsbasicapp.view.App","type":"XML","id":"App"}},"sap.cloud":{"public":true,"service":"cdsBasicapp"}}',
	"cdsbasicapp/model/models.js":function(){
sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"cdsbasicapp/view/App.view.xml":'<mvc:View controllerName="cdsbasicapp.controller.App"\n    displayBlock="true"\n    xmlns:mvc="sap.ui.core.mvc"\n    xmlns="sap.m"><App id="app"></App></mvc:View>',
	"cdsbasicapp/view/View1.view.xml":'<mvc:View controllerName="cdsbasicapp.controller.View1"\n    xmlns:mvc="sap.ui.core.mvc"\n    xmlns="sap.m"><Page id="page" title="{i18n>title}"></Page></mvc:View>'
});
//# sourceMappingURL=Component-preload.js.map
