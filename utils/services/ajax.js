
//////////////// GENERIC AJAX USED IF NOT USING BACKBONE SYNC  /////////////////

// TODO rewrite errors calls before use  

/**
 * Creates an ajax request object that can be used to make requests to a backend/API
 * 
 * @param {Object} params - The data that can be passed to the webservice
 * @param {String} service - The URL to make the request to (could also be a form's action attribute)
 * @param {String} callback - Callback function to call on success
 * @param {Object} options - Extra options needed for the ajax request
 */
define(['jquery', 'utils/errors/process'],function($, processErrs){
   
    var request =  function(params, service, callback, options) {
        // merge default options with those set by caller
        var _opt = $.extend({}, options);

    
        var _self = this;

        $.ajax({
            type: _opt.type || 'GET',
            url: service,
            data: params || '',
            success: function ( res ) {
                if(res['success'] === true){
                    if (typeof callback === "function"){
                        callback.call(_self, res);
                    }
                }else if ( res['success'] === false){
                    
                    var ul = processErrs.process.createUl(res); 
                    processErrs.process.displayUl(ul, 'red'); 
                    
                }else{ 
                    
                    processErrs.process.displayUl(
                        processErrs.process.createUl(["Sorry, there was an unknown error"]) 
                        , 'red'); 
                }

            },
            
            error:function(xhr, status, error){
                
                var res = JSON.parse(xhr.responseText);
                _self.log('ERROR:',res);

                processErrs.process.displayUl(
                    processErrs.process.createUl(["Sorry, there was an unknown error"]) 
                    , 'red');              
            },
            
            statusCode: {
                404: function() {
                    processErrs.process.displayUl(
                        processErrs.process.createUl(["Page not found"]) 
                        , 'red'); 
                },
                403: function(rsp, textStatus, xhr) {
                    var res = JSON.parse(xhr.responseText);
                    if (res['logout'] === true){
                        window.location= '/login';  
                    }
                }
            },
            
            beforeSend: function(xhr, settings) {               
                processErrs.process.emptyAlerts();
                if(_opt.showLoader !== false){
                    $('body').mask('Loading...');
                }

            },
            complete: function(xhr, status) {
            //                $('body').unmask();
            },
            
            log: function() {
                if (window.console) console.log.apply(console, arguments);
            }
        });        
    }  
    return {
        request: request
    };
})();


