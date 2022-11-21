import NewEntry from "./components/NewEntry";

export default function App() {
  const handleNewEntry = (data: string) => {
    console.log("New Entry!", data);

    if (data === "hello") {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      <NewEntry onChange={handleNewEntry} />
    </div>
  );
}
