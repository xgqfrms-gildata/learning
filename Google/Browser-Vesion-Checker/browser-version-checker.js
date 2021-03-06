// Browser-Vesion-Checker


browser = (function() {
    var ua = navigator.userAgent;
    var M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    var tem;
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return "IE " + (tem[1] || "");
    }
    if (M[1] === "Chrome") {
        tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
        if (tem) {
            return tem.slice(1).join(" ").replace("OPR", "Opera");
        }
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, "-?"];
    tem = ua.match(/version\/(\d+)/i);
    if (tem) {
        M.splice(1, 1, tem[1]);
    }
    return M.join(" ");
})();


// ES6

const browser = (() => {
    let ua = navigator.userAgent;
    // navigator.userAgent
    // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3009.0 Safari/537.36"
    // navigator.appVersion
    // "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3009.0 Safari/537.36"
    // navigator.vendor
    // "Google Inc."
    let M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    let tem;
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return "IE " + (tem[1] || "");
    }
    if (M[1] === "Chrome") {
        tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
        if (tem) {
            return tem.slice(1).join(" ").replace("OPR", "Opera");
        }
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, "-?"];
    tem = ua.match(/version\/(\d+)/i);
    if (tem) {
        M.splice(1, 1, tem[1]);
    }
    return M.join(" ");
})();

/*
// IE 11 rv:11.0

Mozilla/5.0 (Windows NT 10.0; Win64; x64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko

function isIE() {
    return /Trident\/7\.0/i.test(navigator.userAgent);
}

*/

/*


## navigator.userAgent

console.log(navigator.userAgent);

// Chrome

Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36




(function isChrome() {
    let fullVerion = null;
    if(/Chrome\/56/i.test(navigator.userAgent)){
        fullVerion = navigator.userAgent.substring(81, 100);
        //alert(fullVerion);
        //console.log(fullVerion);
    }else{
        //console.log(fullVerion);
        fullVerion = "Sorry, Unknow Version!";
    }
    return fullVerion;
})();



*/
