define(['jquery'],function($){
        
    /** @param {Array} errsArr - an array of error strings **/
    
    var createUl = function(errsArr) 
    {                  
        var ul = $(document.createElement('ul'));
        for(var x = 0, l = errsArr.length; x < l; x++){
            ul.prepend('<li>'+errsArr[x]+'</li>');                
        }
        return ul;
    };
        
    var displayUl = function(ul, type){
        var _type = type || 'red';     
        $('#'+_type+'Alert').html(ul).show();
    };
        
    var emptyAlerts = function(){
        var  alertTypes = ['red', 'green'];
        for(var x = 0, l = alertTypes.length; x < l; x++){
            if($('#'+alertTypes[x]+'Alert')){
                $('#'+alertTypes[x]+'Alert').hide().html();
            }          
        }           
    }
    
    return {
        createUl: createUl,
        displayUl:displayUl,
        emptyAlerts:emptyAlerts
    };
})


