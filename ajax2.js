window.onload = function () {
    
    var http = new XMLHttpRequest();
    
    http.onreadystatechange = function(){
        if(http.readyState == 4 && http.status == 200){
            console.log(JSON.parse(http.response));
        }
        
    };
    
    
    http.open ("get", "data/tweets.json", true);
    http.send();
};

//jquerymethod
$.get("data/tweet.json"), function (data){
    console.log(data);
};
console.log("test");


/*
0- request not initialized
1- request has ben set up
2-request has been sent
3-request is in process
4- request is complete

*/