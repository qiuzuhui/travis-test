define([
    'dojo/_base/declare',
    'dijit/_WidgetBase'
],function(declare,WidgetBase){
    return declare([WidgetBase],{
        postCreate:function(){
            this.inherited(arguments);
            this.domNode.innerHTML="DEMO"
        }
    })
})