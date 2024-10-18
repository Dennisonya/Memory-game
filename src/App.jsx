import { useState, useEffect } from 'react';
import annie from './images/annie.jpg'
import armin from './images/armin.jpg'
import beastTitan from './images/beastTitan.jpg'
import eren2 from './images/eren2.jpg'
import erwin from './images/erwin.jpg'
import hange from './images/hange.jpg'
import jean from './images/jean.jpg'
import mikasa from './images/mikasa.jpg'
import reiner from './images/reiner.jpg'
import zeke from './images/zeke.jpg'
import onyakapon from './images/onyakapon.jpg'
import sasha from './images/sasha.jpg'
import hannes from './images/hannes.jpg'
import yelena from './images/yelena.jpg'
import ymir from './images/ymir.jpg'
import levi from './images/levi.jpg'
import porco from './images/porco.jpg'
import Character from './Character';
import ScoreBoard from './Scoreboard';

export default function App () {
    const characters = [
      { id: 1, name: 'Annie', image: annie },
      { id: 2, name: 'Armin', image: armin },
      { id: 3, name: 'Beast Titan', image: beastTitan },
      { id: 4, name: 'Eren Yeager', image: eren2},
      { id: 5, name: 'Erwin', image: erwin},
      { id: 6, name: 'hange', image: hange},
      { id: 7, name: 'Jean', image: jean },
      { id: 8, name: 'Mikasa', image: mikasa },
      { id: 9, name: 'Reiner', image: reiner },
      { id: 10, name: 'Zeke', image: zeke },
      { id: 11, name: 'Onyakapon', image: onyakapon},
      { id: 12, name: 'Sasha', image: sasha },
      { id: 13, name: 'Hannes', image: hannes },
      { id: 14, name: 'Yelena', image: yelena },
      { id: 15, name: 'Porco', image: porco },
      { id: 16, name: 'Levi', image: levi},
      { id: 17, name: 'Ymir', image: ymir}
    ];
    
    const [ClickedCharacters, setClickedCharacters] = useState([]);
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(
      localStorage.getItem('BestScore') || 0
    )
    const [positions, setPositions] = useState(
       characters.map((value,index) => index))

        // Fisher-Yates Shuffle
    function shuffleArray (array){
        let shuffledArray = array.slice();
          for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    }
    function randomizeCards () {
        setPositions(shuffleArray(positions));
    };
  
    function handleImageClick (character){
          if(!ClickedCharacters.some((char) => char.id === character.id)){
            setClickedCharacters([...ClickedCharacters, character]);
            //updating the users current score
            setScore(prevScore => prevScore + 1);
          }else{
            //resetting the users score after he clicked the same image twice
            setClickedCharacters([]);
            setScore(0);
          }
          randomizeCards();
    }
//updating the user Best score using local Storage
    useEffect(()=>{
      if(score> bestScore){
       setBestScore(score);
        localStorage.setItem('BestScore',score);
      }
    },[score, bestScore]);


    return (
      <div>
      <div className='header'>
        <div className="info">
          <img src="https://see.fontimg.com/api/rf5/Rp72W/NDFmMjQ3N2JmM2JiNGEzY2E4ZmQ3MzM4YzIwYmRhMjgudHRm/QXR0YWNrIE9uIFRpdGFuIE1lbW9yeSBHYW1l/ditty.png?r=fs&h=77&w=1500&fg=000000&bg=FFFFFF&tb=1&s=51" className='title'/>
          <img src="https://see.fontimg.com/api/rf5/Rp72W/NDFmMjQ3N2JmM2JiNGEzY2E4ZmQ3MzM4YzIwYmRhMjgudHRm/R2V0IFBvaW50cyBieSBjbGlja2luZyBvbiB0aGUgaW1hZ2VzLCBidXQgZG9udCBjbGljayBvbiB0aGUgc2FtZSBpbWFnZSB0d2ljZSE/ditty.png?r=fs&h=27&w=1500&fg=000000&bg=FFFDFD&tb=1&s=18"  className='description' alt="" />
        </div>
        <ScoreBoard
        CurrentScore = {score}
        BestScore = {bestScore}
        />
      </div>

        <div className="characters-grid">
          {positions.map((position)=>(
          <Character 
          key={characters[position].id}
          image= {characters[position].image}
          name={characters[position].name}
          onClick={() => handleImageClick(characters[position])}
        />
      ))}
          </div>
      </div>
    );
  };
  

  