define(['jquery'],function($){

    /** @param {Array} errsArr - an array of error strings **/
    /** @param {String} type - red, green, i.e the css colour for display **/

    return function(errsArr, type){
           
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
        
        return displayUl(createUl(errsArr), type);         
    }   
})


