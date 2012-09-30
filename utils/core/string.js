define(function(){ 
       
    var truncate = function(str, end){
        var s = str || '';
        return s.substring(0,end)+ (s.length > end ?'...':'');
    }
    
    
    return {
        truncate:truncate
    }
    
})


