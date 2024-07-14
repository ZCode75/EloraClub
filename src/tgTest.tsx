import { Telegram, WebAppInitData } from "@twa-dev/types";
import axios from "axios";
declare global {
  interface Window {
    WebAppInitData: WebAppInitData;
    Telegram: Telegram;
  }
}

const Test = () => {
  return (
    <div>
      <button
        onClick={() => {
          axios
            .post(
              `https://api.test/api/club/profile`,
              JSON.stringify({
                initData: window.Telegram.WebApp.initData,
              }),
              {
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
              }
            )
            .then((res) => console.log(res));
          console.log(window.Telegram.WebApp.initDataUnsafe.user?.id);
        }}
      >
        {window.Telegram.WebApp.initDataUnsafe.user?.first_name}
      </button>
    </div>
  );
};

export default Test;
