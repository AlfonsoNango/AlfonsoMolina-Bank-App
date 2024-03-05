import Card from "./card.jsx";

export default function Home() {
  return (
    <Card
      txtcolor="black"
      header="BadBank Landing Module"
      title="Welcome to the bank"
      text="You can move around using the navigation bar."
      body={
        <img
          src="src/images/bank.png"
          className="img-fluid"
          alt="Responsive image"
        />
      }
    />
  );
}
