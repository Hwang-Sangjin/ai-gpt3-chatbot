import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; //css는 이렇게 가져온다.
const groupCard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const Group = () => {
  return (
    <div>
      <h1>투자성향분석</h1>
      <div className="paragraph">투자 성향 분석을 위하여 간단한 설문이 진행됩니다.</div>
    </div>
  );
};

export default Group;
