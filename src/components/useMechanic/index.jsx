import { useEffect, useState } from "react"

export const useMechanic = (event) => {
    const [x, setX] = useState(100);
    const [z, setZ] = useState(100);

    useEffect((event) => {
      console.log('mechanic')
        if(event === 'd'){
            setX(x+50)
            console.log('go front');
          }
          else if(event === 'a'){
            setX(x-50)
            console.log('go back');
          }
          else if(event === 'w'){
            setZ(z+50)
            console.log('go up');
          }
    }, [])

    // return({x, z});
};