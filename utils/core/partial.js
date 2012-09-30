Function.prototype.partial = function(){
    var fn = this, args = Array.prototype.slice.call(arguments);
    return function(){
        var arg = 0;
        for ( var i = 0; i < args.length && arg < arguments.length; i++ )
            if ( args[i] === undefined )
                args[i] = arguments[arg++];
        return fn.apply(this, args);
    };
};

/*
 * usage 
  
   var delay = setTimeout.partial(undefined, 10);
  
  delay(function(){
    alert( "A call to this function will be temporarily delayed." );
  });
OR


var bindClick = document.body.addEventListener
    .partial("click", undefined, false);
  
  bindClick(function(){
    alert( "Click event bound via curried function." );
  });
 
 */
