//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application

let root = ReactDOM.createRoot(document.getElementById('app'));
let seconds = 0;
let cmil=Math.floor(seconds/100000 )%10;
let dmil=Math.floor(seconds/10000 )%10;
let mil =Math.floor(seconds/1000 )%10;
let cen=Math.floor(seconds/100 )%10;
let dec=Math.floor(seconds/10 )%10;
let un=seconds % 10;
setInterval(()=> {
    console.log(seconds);
    root.render(<Home seconds={seconds} un={un} dec={dec} cen={cen} mil={mil} dmil={dmil} cmil={cmil} />);
    seconds=seconds+1
    cmil=Math.floor(seconds/100000 )%10;
    dmil=Math.floor(seconds/10000 )%10;
    mil=Math.floor(seconds/1000 )%10
    cen=Math.floor(seconds/100 )%10
    dec=Math.floor(seconds/10 )%10
    un=seconds % 10;
},1000)

// let mil =seconds/1000;
// let cen=(seconds-(mil*1000))/100;
// let dec=(seconds- (mil*1000 + cen*100))/10;
// let un=seconds-(mil*1000 + cen*100 + dec*10 );