
//TODO find a way to use this or 
//
//Better is to precompile all templates in build process

define(['jquery', 'text!templates/todoList.html'],function($, template)
    {
        // use a promise here?
        var compileTemplates  = function(path){
            var temps = {};
            $.ajax({
                url:template,
                success:function(result){
                    $('script.template', $(result)).each(function(){
                        temps[this.id] = _.template( $(this).html());             
                    }); 
                },
                async:   false
            });
            return temps;
        }
    
        return {
            compileTemplates: compileTemplates
        };
    })






