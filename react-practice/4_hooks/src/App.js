import Title from "./hooks/useTitle";
import Input from "./hooks/useInput";
import Tabs from "./hooks/useTabs";
import Click from "./hooks/useClick";
import Confirm from "./hooks/useConfirm";
import PreventLeave from "./hooks/usePreventLeave";
import BeforeLeave from "./hooks/useBeforeLeave";
import FadeIn from "./hooks/useFadeIn";
import Network from "./hooks/useNetwork";
import Scroll from "./hooks/useScroll";
import Fullscreen from "./hooks/useFullscreen";
import Notification from "./hooks/useNotification";
import Axios from "./hooks/useAxios";

const App = () => {

  return (
    <div>
      <Title />
      <Scroll />
      <FadeIn />
      <hr />

      <h2>useInput</h2>
      <Input />
      <hr />

      <h2>useTabs</h2>
      <Tabs />
      <hr />

      <h2>useClick</h2>
      <Click />
      <hr />

      <h2>useConfirm</h2>
      <Confirm />
      <hr />

      <h2>usePreventLeave</h2>
      <PreventLeave />
      <hr />

      <h2>useBeforeLeave</h2>
      <BeforeLeave />
      <hr />
      
      <h2>useNetwork</h2>
      <Network />
      <hr />

      <h2>useFullscreen</h2>
      <Fullscreen />
      <hr />

      <h2>useNotification</h2>
      <Notification />
      <hr />

      <h2>useAxios</h2>
      <Axios />
    </div>
  );
};

export default App;
