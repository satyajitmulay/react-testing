// let age = 18;

// // let canWatch = "Watch Now";
// // if(age < 18) canWatch = "Not Available";


// //You can make this function dynamic by passing parameter

// const canWatch = () =>{
//   if(age>=18) return "Watch Now";
//   return "Not Availble";
// }


// const returnGenre = () =>{
//   const genre =  "RomCom";
//   return genre;

// }

import seriesData from "../api/seriesData.json"
import SeriesCard from "./SeriesCard";

const NetflixSeries = () => {
  // const name = "Queen of Tears";
  // // const rating =  "8.2";
  // const summary = `Baek Hyun-woo and Hong Hae-in navigate a tense relationship,
  //       both at home and at work. But upon deciding his future, Hyun-woo pays a
  //       visit to his family.`
//         if(age <18){
//   return (
//     <div>
//       <div>
//       <img src="qot.jpg" alt="qot.jpg" width="40%" height="40%" />
//       </div>
//       <h2>Name: {name}</h2>
//       <h3>Rating: {5 + 3.2}</h3>
//       <p>
//         Summary: {summary}
//       </p>
//       <p>Genre: {returnGenre()}</p>
//       <button>Not Available</button>
//     </div>
//   );
// }

return (
  <ul className="grid grid-three--cols">
    {
      seriesData.map((curElem)=>(
       <SeriesCard key={curElem.id} data={curElem} />
      ))
    }
  </ul>
);
}

export default NetflixSeries;
