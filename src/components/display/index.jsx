import mainImg from "../../assets/mainImg.jpg";

export const Display = () => {

  document.addEventListener('keydown', function(event){
    console.log(`Key: ${event.key} with keycode ${event.keyCode} has been pressed`);
    window.location.assign('/savingChoice');
  })

  return (
    <>
    {/* add loading */}
      <img src={mainImg} alt={"mainImg"} style={{ width: "100%" }} />
      <div width="230px" hiegth="200px">
          Press Any Key
      </div>
    </> 
  );
};