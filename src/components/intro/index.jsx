import mainImg from "../../assets/mainImg.png";
import intro from "../../assets/intro.jpg";
import i1 from "../../assets/i1.jpeg";
import i2 from "../../assets/i2.jpeg";
import i3 from "../../assets/i3.jpeg";
import i4 from "../../assets/i4.jpeg";
import i5 from "../../assets/i5.jpeg";
import {saveBlock} from "../file1/index.jsx";
import { useEffect, useState } from "react";
// import { progress1, setProgress1 } from "../file1/File1";

export const Intro = (props) => {

  const fileName = window.location.href.split(',').pop();
  // const [progress, setProgress] = useState(props.progress);
  const interval = 5000;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // const [currentText, setCurrentText] = useState("s1");
  const story=[
    "Бруни был самым обыкновенным дровосеком. Они с женой жили в небольшой избе на окраине деревни",
    "А из окошка на чердаке сквозь леса и холмы они могли видеть гору, вершина которой всегда оставалась покрыта туманом и облаками",
    "Вечерами они сидели возле этого окошка и мечтали однажды отправиться в дальнее путешествие, посетить вершину этого мира",
    "Следующим летом мечта должна была воплатиться, однако осенью избранница Бруни заболела",
    "Местная знахарка  поведала, что лишь один цветок может сейчас помочь им, но растет он на той самой горе",
    "Времени оставалось не много, поэтому тем же днем Бруни отправился в дальний путь",
  ]
  const images=[
    i1,
    i2,
    i2,
    i3,
    i4,
    i5,
  ]
  
  document.addEventListener('keydown', function(event){
    // console.log(`Key: ${event.key} with keycode ${event.keyCode} has been pressed`);
    // setProgress = '/forest';
    // saveBlock('/forest');
    console.log(fileName);
    window.location.assign('/forest');
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      // Переход к следующей картинке
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % 6
      );
      // setCurrentText("s"+currentImageIndex);
    }, interval);

    // Очистка таймера при размонтировании компонента
    return () => clearTimeout(timer);
  }, [currentImageIndex,interval])

  return (
    <div className="intro">
      <img src={images[currentImageIndex]} alt={"i"+(currentImageIndex)} style={{width: "1024px" , height: "715px", position: "absolute", left:"235px", marginBottom: "0"}}/>
      <br/>
      <p style={{position: "absolute", top: "20px", left: "235px", margin: "auto", marginTop: "50px", textAlign: "center", paddingBottom: "5px", width: "1012px", height: "auto", padding: "5px", backgroundColor: "black",  opacity: "0.4", zIndex: "999", borderRadius: "10px"}}>{story[currentImageIndex]}</p>

      <p style={{position: "absolute", right: "50px", bottom: "30px", paddingBottom: "0px", height: "10px" }}>Press Any Key to skip</p>
    </div> 
  );
};