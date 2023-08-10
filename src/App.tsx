import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@hooks/useSelectorDispatch";
import { handleTheme } from "@store/themeSlice/themeSlice";
import { useTheme } from "@hooks/useTheme";
import { classNames } from "./helpers";

import { Counter, Test } from "@components";

function App() {
  const [test, setTest] = useState(false);
  useTheme();
  const { theme } = useAppSelector((state) => state.themeSlice);
  const dispatch = useAppDispatch();

  return (
    <div>
      {theme}
      <button onClick={() => dispatch(handleTheme())}>handle theme</button>
      <h1 className="title-1">title-1</h1>
      <h1 className="title-2">title-2</h1>
      <hr />
      <Counter count={2} />
      <Test />
      <hr />
      <button onClick={() => setTest((prev) => !prev)}>handle test</button>
      <div className={classNames("test-block", {}, [])}>Test</div>
    </div>
  );
}

export default App;
