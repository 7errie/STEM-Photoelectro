import React, { useState } from "react";
import ReactSlider from "react-slider";
import {
  TabContentContainer, ItemContainer, FormItem, ContentDiv, ImageFirst, ButtonNext, ButtonPrev, ButtonDiv
} from "../styles/TabFirstStyled";
import { ContentTag } from "../styles/TabsStyled";
import Diagram from "../components/DiagramFirst";
import { tabObjOne } from "../Data";
import "../styles/SliderStyles.css";

const stepContent = tabObjOne.content;

const TabContent = () => {

  const [active, setActive] = useState({
    value: 0
  });

  const onNext = () => {
    if (active.value <= stepContent.length)
      setActive({ ...active, value: active.value + 1 });
  };

  const onPrevious = () => {
    if (active.value > 0)
      setActive({ ...active, value: active.value - 1 });
  };

  const onChange = (index) => {
    setActive({ ...active, value: index });
  };

  const handleScrolling = (scroll) => {
    console.log(active);
    if (active.value >= 0 && active.value < 7) {
      if (scroll.nativeEvent.wheelDelta > 0)
        setActive({ ...active, value: active.value - 1 });
      else
      setActive({ ...active, value: active.value + 1 });
    }
  };

  return (
    <TabContentContainer>
      <>
        <ItemContainer onWheel={handleScrolling}>
          <>
            {stepContent.map((step, index) => {
              return (
                <FormItem active={active.value === index} key={index}>
                  <ContentDiv>
                    <ContentTag dangerouslySetInnerHTML={{__html:stepContent[index]}} />
                    {index == 7 ?
                      <Diagram />
                    : index == 1 ?
                      <ImageFirst src={tabObjOne.img} />
                    : null}
                  </ContentDiv>
                  <ButtonDiv>
                    <ButtonNext index={index - 1} onClick={onNext}>
                      Next
                    </ButtonNext>
                    <ButtonPrev index={index - 1} onClick={onPrevious}>
                      Previous
                    </ButtonPrev>
                  </ButtonDiv>
                </FormItem>
              );
            })}
          </>
        </ItemContainer>
          <ReactSlider
            className="horizontal-slider"
            marks
            onChange={onChange}
            min={0}
            max={stepContent.length - 1}
            value={active.value}
            markClassName="mark"
            trackClassName="slider-track"
            renderMark={(props) => {
              if (props.key < active.value) {
                props.className = "mark mark-completed";
              } else if (props.key === active.value) {
                props.className = "mark mark-active";
              }
              return <span {...props} />;
            }}
            orientation="horizontal"
          />
        </>
    </TabContentContainer>
  );
};

export default TabContent;