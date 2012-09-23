define(function(){ 
       
    return function(str, end){
        var s = str || '';
        return s.substring(0,end)+ (s.length > end ?'...':'');
    }
})


