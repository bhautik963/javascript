
// // url Async requesting function
// function httpGetAsync(theUrl, callback)
// {
//     // create the request object
//     var xmlHttp = new XMLHttpRequest();

//     // set the state change callback to capture when the response comes in
//     xmlHttp.onreadystatechange = function()
//     {
//         if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
//         {
//             callback(xmlHttp.responseText);
//         }
//     }

//     // open as a GET call, pass in the url and set async = True
//     xmlHttp.open("GET", theUrl, true);

//     // call send with no params as they were passed in on the url string
//     xmlHttp.send(null);

//     return;
// }

// // callback for the top 8 GIFs of search
// function tenorCallback_search(responsetext)
// {
//     // parse the json response
//     var response_objects = JSON.parse(responsetext);

//     top_10_gifs = response_objects["results"];

//     // load the GIFs -- for our example we will load the first GIFs preview size (nanogif) and share size (tinygif)

//     document.getElementById("preview_gif").src = top_10_gifs[0]["media"][0]["nanogif"]["url"];

//     document.getElementById("share_gif").src = top_10_gifs[0]["media"][0]["tinygif"]["url"];

//     return;

// }


// // function to call the trending and category endpoints
// function grab_data()
// {
//     // set the apikey and limit
//     var apikey = "LIVDSRZULELA";
//     var lmt = 1;

//     // test search term
//     var search_term = "hello";

//     // using default locale of en_US
//     var search_url = "https://g.tenor.com/v1/search?q=" + search_term + "&key=" +
//             apikey + "&limit=" + lmt;

//     httpGetAsync(search_url,tenorCallback_search);

//     // data will be loaded by each call's callback
//     return;
// }


// // SUPPORT FUNCTIONS ABOVE
// // MAIN BELOW

// // start the flow
// grab_data();


const gitapi = "bxqK6wfJwFjYKxBqoRISkErrvtlfAZlK"
function getGif() {
    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${gitapi}&limit=20`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let i = 0
            setInterval(() => {
                document.getElementById("myImg").src = data.data[i].embed_url;
                console.log(i);
                i++;
            }, 5000);
        })
}
getGif()
