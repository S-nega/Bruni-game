import { DrawerList } from "../drawer-list";


export const SavingChoice = () => {
  return (
    <div className="savingChoice">
      <h1>BRUNI</h1>
      <div className="choiceBlock">
        <h2>Choose a file:</h2>
        <DrawerList width="auto"
            list={[
            { title: "Play", to: "/intro" }, //добавить ссылку на конкретный момент игры, сохранить ее в данные игры 
            ]}
        />
      </div>
    </div>
  );
};