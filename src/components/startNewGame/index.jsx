export const StartNewGame = () => {
    
    // const person = 

    document.addEventListener('keydown', function(event){
        console.log(`Key: ${event.key} with keycode ${event.keyCode} has been pressed`);
        if(event.key === 'd'){
            console.log('go front')
        }
    })

    return (
      <>
        <h1> BRUNI </h1>

      </>
    );
  };