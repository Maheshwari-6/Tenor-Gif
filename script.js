const mainContent = $('#main-content');
const searchInput = $('#search-by-name');
const searchBtn = $('#search');


function fetchAPI(apiURL){
    return new Promise((resolve, reject) => {
        let http = new XMLHttpRequest();
        http.open('GET', apiURL);
        http.responseType = 'json';
        http.onreadystatechange = function(){
            if(http.readyState === 4 && http.status === 200){
                resolve(http.response)
            }else if (http.readyState === 400 || http.status === 500){
                reject(http.response)
            }
            }
            http.send();
    })
}

function getExcitedGif(){
    fetchAPI("https://tenor.googleapis.com/v2/search?q=excited&key=AIzaSyCEdtT4UBFyERc8aTp3j4d358j2RcnDZJ8&client_key=my_test_app&limit=8")
        .then(result => {
            result.results.forEach(tgif => {
                let imageUrl = tgif.media_formats.gif.url;
                let newE1 = $(`
                                <img src = ${imageUrl} height="150px" width="150px">  
                `)
            newE1.appendTo(mainContent);
            });
       // console.log(result);  
        })
        .catch( err => {
            console.error(err);
        })
}

searchBtn.click( () => {
    let searchVal = searchInput.val();
    if(searchVal === "Excited Gif" || searchVal === "excited gif"){
        getExcitedGif();
    }
})
