define(function(){
    
    var $ = require('jquery');
                   
    return function(){
        var  alertTypes = ['red', 'green'];
        for(var x = 0, l = alertTypes.length; x < l; x++){
            if($('#'+alertTypes[x]+'Alert')){
                $('#'+alertTypes[x]+'Alert').hide().html();
            }          
        }           
    }        
})