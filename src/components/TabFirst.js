import React, { useState } from "react";
import ReactSlider from "react-slider";
import {
  TabContentContainer, ItemContainer, FormItem, ButtonNext, ButtonPrev
} from "../styles/TabFirstStyled";
import {
  ContentTag
} from "../styles/TabsStyled";
import { tabObjOne } from "../Data";
import "../styles/SliderStyles.css";

const Steps = tabObjOne.title;

const StepContent = tabObjOne.content;

const TabContent = () => {

  const [active, setActive] = useState({
    value: 0
  });

  const onNext = () => {
    if (active.value <= Steps.length)
      setActive({ ...active, value: active.value + 1 });
  };

  const onPrevious = () => {
    if (active.value > 0)
      setActive({ ...active, value: active.value - 1 });
  };

  const onChange = (index) => {
    if (index + 1 == Steps.length)
      index += 1;
    setActive({ ...active, value: index - 1 });
  };

  return (
    <TabContentContainer>
      <>
        <ItemContainer>
          <>
            {Steps.map((step, index) => {
              return (
                <FormItem active={active.value === index} key={index}>
                  <ContentTag dangerouslySetInnerHTML={{__html:StepContent[index]}} />
                  <ButtonNext index={index - 1} onClick={onNext}>
                    Next
                  </ButtonNext>
                  <ButtonPrev index={index - 1} onClick={onPrevious}>
                    Previous
                  </ButtonPrev>
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
            max={Steps.length - 1}
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