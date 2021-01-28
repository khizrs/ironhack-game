let map;

const data = [
  {id: 1, name: 'Cairo', image :'./assets/1.jpg' , lat: 30.033333, lng: 31.233334 },
  {id: 2, name: 'Rio', image :'./assets/2.jpg', lat: -22.908333, lng: -43.196388},
  {id: 3, name: 'Paris', image :'./assets/3.jpg', lat: 48.864716  , lng: 2.349014},
  {id: 4, name: 'New York', image :'./assets/4.jpg', lat: 40.730610  , lng: -73.935242},
  {id: 5, name: 'Cape Town', image :'./assets/5.jpg', lat: -33.918861  , lng: 18.423300},
  {id: 6, name: 'Isfahan', image :'./assets/6.jpg', lat: 32.661343  , lng: 51.680374},
  {id: 7, name: 'Dubai', image :'./assets/7.jpg', lat: 25.276987  , lng: 55.296249},
  {id: 8, name: 'Mecca', image :'./assets/8.jpg', lat: 21.422510  , lng: 39.826168},
  {id: 9, name: 'Istanbul', image :'./assets/9.jpg', lat: 41.015137  , lng: 28.979530},
  {id: 10, name: 'London', image :'./assets/10.jpg', lat: 51.509865  , lng: -0.118092},
  {id: 11, name: 'Rome', image :'./assets/11.jpg', lat: 41.902782  , lng: 12.496366},
  {id: 12, name: 'Athens', image :'./assets/12.jpg', lat: 37.983810  , lng: 23.727539},
  {id: 13, name: 'Shanghai', image :'./assets/13.jpg', lat: 31.224361  , lng: 121.469170},
  {id: 14, name: 'Tokyo', image :'./assets/14.jpg', lat: 35.652832  , lng: 139.839478},
  {id: 15, name: 'Kuala Lumpur', image :'./assets/15.jpg', lat: 3.140853  , lng: 101.693207},
  {id: 16, name: 'Sydney', image :'./assets/16.jpg', lat: -33.865143  , lng: 151.209900},
  {id: 17, name: 'San Francisco', image :'./assets/17.jpg', lat: 37.773972  , lng: -122.431297},
  {id: 18, name: 'Agra', image :'./assets/18.jpg', lat: 27.176670  , lng: 78.008072},
  {id: 19, name: 'Pyongyang', image :'./assets/19.jpg', lat: 39.019444  , lng: 125.738052},
  {id: 20, name: 'Taipei', image :'./assets/20.jpg', lat: 25.105497  , lng: 121.597366},
  {id: 21, name: 'Moscow', image :'./assets/21.jpg', lat: 55.751244  , lng: 37.618423},
  {id: 22, name: 'Amsterdam', image :'./assets/22.jpg', lat: 52.377956  , lng: 4.897070}

]

var sec = 100
var time = 0
var score = 0
var currentIndex =-1

 
function start(){
  document.getElementById('container').className = "started"
  time =  setInterval(myTimer, 1000)
}

function myTimer() {
    document.getElementById('timer').innerHTML = sec + "sec left";
    sec--;
    if (sec == -1) {
        clearInterval(time);
        document.getElementById('game-over').className  = "active"
    // document.getElementById('gameovermsg').innerHTML = 'Sorry the game is over!';
        // location.reload();

    }
}


function selectNext(){
  if(currentIndex >= data.length - 1) {
    endGame()
    return
  }

  updateImage(data[++currentIndex].image)
}


function endGame(){
  document.getElementById('gomsg').innerHTML = 'Thanks for playing! Your score is ' + score;
  document.getElementById('game-won').className  = "active";
}


function cityClicked(choosenCity) {
  
  const currentCity = data[currentIndex]
  if(currentCity !== choosenCity) {
    document.getElementById('rightwrong').innerHTML = 'That is wrong, Sorry!';
  }else { 
    
    updateScore(1)
    document.getElementById('rightwrong').innerHTML = 'That is right, well done!!'
  }
 
  selectNext()
  
}


function updateScore(newScore){
  score += newScore
  document.getElementById('scoreTxt').innerText  = score
}

function updateImage(newImage) {
  const img = document.getElementById('currentImg')
  img.src = newImage
}


function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 0, lng: 0 },
    zoom: 3,
    // styles: [{"featureType":"all","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]}],
    // backgroundColor:"#eeeeee",
    mapId: '2793e25c75451b76'


  });



  data.forEach(city => {
    const pos = { lat:city.lat , lng: city.lng }
    const marker = new google.maps.Marker({
      position: pos,
      map: map,
      
    });
    marker.addListener('click', ()=> cityClicked(city))
    
  })

  
}


selectNext()
// const uluru = { lat: -25.344, lng: 131.036 };
// const marker = new google.maps.Marker({
//     position: uluru,
//     map: map,
//   });

// console.log('google')