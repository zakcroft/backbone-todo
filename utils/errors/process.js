define(function(){
    
    return function(errs){
        var errsArr = [];   
        if(typeof errs === 'object'){ 
                
            for(var key in errs){
                for(var subKey in errs[key]){                        
                    errsArr.push(errs[key][subKey]);                        
                } 
            }  
                
        } else if(typeof errs === 'string'){
                
            errsArr.push(errs); 
            
        }else if(!errs){
                
            errsArr.push('No Response Found');                        
        } 
            
        return errsArr; // returns array
    };         
})

