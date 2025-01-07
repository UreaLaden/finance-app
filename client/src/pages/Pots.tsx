import { Header, Pot } from "@/components";

export function Pots() {
  const onAddPot = () => {
    console.log("Add Pot - Not yet implemented");
  };

  return (
    <>
      <Header showAdd={true} onClick={onAddPot} />
      <div className={"pots-content-container"}>
        <Pot
          title={"Savings"}
          currentAmount={159}
          targetAmount={2000}
          theme={"var(--green-primary)"}
        />
        <Pot
          title={"Concert Ticket"}
          currentAmount={110}
          targetAmount={150}
          theme={"var(--purple-primary)"}
        />
        <Pot
          title={"Gift"}
          currentAmount={40}
          targetAmount={60}
          theme={"var(--cyan-primary)"}
        />
        <Pot
          title={"New Laptop"}
          currentAmount={10}
          targetAmount={1000}
          theme={"var(--gold-secondary)"}
        />
        <Pot
          title={"Holiday"}
          currentAmount={531}
          targetAmount={1440}
          theme={"var(--purple-secondary)"}
        />
      </div>
    </>
  );
}
