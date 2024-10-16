import React from "react";
// import "./styles/index.scss";
import Button, { ButtonSize, ButtonType } from "./components/Button/button";
function App() {
  return (
    <div className="App">
      <Button onClick={(e) => console.log(e)}>hello</Button>
      <Button disabled>disabled button</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
        Large Primary
      </Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
        small danger
      </Button>
      <Button btnType={ButtonType.Link} href="https://www.baidu.com">
        baidu link
      </Button>
      <Button disabled btnType={ButtonType.Link}>
        disabled link
      </Button>
    </div>
  );
}

export default App;
