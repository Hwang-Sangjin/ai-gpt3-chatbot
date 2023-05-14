import React from "react";
import { FullPage, Slide } from "react-full-page/lib";
import Main from "./Main";
import Group from "./Group";
import QNA from "./QnA";

const FullPageExample = () => {
  return (
    <FullPage>
      <Slide>
        <Main />
      </Slide>
      <Slide>
        <Group />
      </Slide>
      <Slide>
        <QNA/>
      </Slide>
    </FullPage>
  );
};

export default FullPageExample;
