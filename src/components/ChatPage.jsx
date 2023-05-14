import React from "react";
import { FullPage, Slide } from "react-full-page/lib";
import ChatMain from "./ChatMain";

const ChatAI = () => {
  return (
    <FullPage>
      <Slide>
        <ChatMain></ChatMain>
      </Slide>
    </FullPage>
  );
};

export default ChatAI;
