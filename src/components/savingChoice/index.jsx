import { DrawerList } from "../drawer-list";


export const SavingChoice = () => {
  return (
    <>
    <h1>BRUNI</h1>
    <DrawerList width="auto"
        list={[
        { title: "Continue", to: "/continueGame" },
        { title: "Start new game", to: "/startNewGame" },
        ]}
    />
    </> 
  );
};