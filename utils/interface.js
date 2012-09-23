define([
    '../utils/core/string/truncate',
    '../utils/domain/getUrlParamVal',
    '../utils/errors/process', 
    '../utils/errors/display', 
    '../utils/errors/remove',

    ],
    function(
        truncateStr,
        getUrlParamVal,
        processErrs, 
        displayErrs,
        removeErrs) {
        
        return {
            truncateStr:truncateStr,
            getUrlParamVal:getUrlParamVal,
            processErrs: processErrs,
            displayErrs: displayErrs,
            removeErrs: removeErrs
        };        
    });