import { DrawerList } from "../drawer-list";

export const MainPage = () => {
  return (
    <div className="mainPage">
        <h1 style={{
          fontWeight: "normal"
          }}>BRUNI</h1>
        <p>Some description</p>
        <DrawerList width="auto" style={{}}
          list={[
            { title: "Buy full game", to: "/buy" },
            { title: "Play Demo", to: "/savingChoice" },
          ]}
        />
    </div>
  );
};