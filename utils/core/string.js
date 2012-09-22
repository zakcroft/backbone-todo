define(function(){ 
       
    var truncate = function(str, end){
        var s = str || '';
        return s.substring(0,end)+ (s.length > end ?'...':'');
    }
        
    var formatTime = function(time) {
        if (isNaN(time)) {
            return '0:00';
        }
        var m = Math.floor(time / 60);
        var s = Math.ceil(time - (m * 60));
        if (s < 10) s = '0' + s;
        return m + ':' + s;
    };
    
    return {
        truncate:truncate,
        formatTime: formatTime
    };
})


