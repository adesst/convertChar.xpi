Components.utils.import('resource://gre/modules/devtools/Console.jsm');

var Scrap = {

  init : function(){

    console.log( gBrowser );
    if(gBrowser) gBrowser.addEventListener("change", this.run, false);
  },

  run : function(event){

    var str = event.originalTarget.value; 

    str = str.replace(/'/g, "`");
    console.log( str );

    str = str.replace(/"/g,"``");
    console.log( str );

    str = str.replace(/\\/g,"/");
    console.log( str );

    event.originalTarget.value = str;
  }
}
Scrap.init();

