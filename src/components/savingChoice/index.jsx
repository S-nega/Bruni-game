import { useState } from "react";
import { DrawerList } from "../drawer-list";
import { MovingObject } from "../movingObject";
import { File1 } from "../file1";
import { File2 } from "../file2";
import { File3 } from "../file3";


export const SavingChoice = () => {
  const file1 = File1();
  const file2 = File2();
  const file3 = File3();


  return (
    <div className="savingChoice">
      <h1>BRUNI</h1>
      <div className="choiceBlock">
        <h2>Choose a file:</h2>
        <DrawerList width="auto"
          list={[
          { title: "File 1", to: "/" + file1}, //добавить ссылку на конкретный момент игры, сохранить ее в данные игры 
          { title: "File 2", to: "/" + file2},
          { title: "File 3", to: "/" + file3},
          ]}
        />
          </div>
    </div>
  );
};