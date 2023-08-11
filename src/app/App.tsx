import { classNames } from "@shared";

function App() {
  return (
    <div>
      <h1 className="title">App</h1>
      <p
        className={classNames("desc", { active: true, hovered: false }, [
          "cls1",
          "cls2",
        ])}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea officia ab
        placeat explicabo nostrum. Vel doloribus suscipit earum eum accusantium.
      </p>
    </div>
  );
}

export default App;
