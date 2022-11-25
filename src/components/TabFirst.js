import React from "react";
import {
  TabContentContainer, ContentContainer, ImageFirst, ImageFirstDiv
} from "../styles/TabFirstStyled";
import { ContentTag } from "../styles/TabsStyled";
import Diagram from "../components/DiagramFirst";
import { tabObjOne } from "../Data";

let TabOneContent1 = tabObjOne.content[0] + "<div style=\"height: 50px;\"></div>" + tabObjOne.content[1];
let TabOneContent2 = tabObjOne.content.splice(2, tabObjOne.content.length).join("<div style=\"height: 50px;\"></div>");

const TabContent = () => {

  return (
    <TabContentContainer>
      <>
        <ContentContainer>
          <ContentTag dangerouslySetInnerHTML={{__html:TabOneContent1}} />
          <ImageFirstDiv>
            <ImageFirst src={tabObjOne.img} />
            <ImageFirst src={tabObjOne.img2} />
            <ImageFirst src={tabObjOne.img3} />
          </ImageFirstDiv>
          <ContentTag dangerouslySetInnerHTML={{__html:TabOneContent2}} />
          <Diagram />
        </ContentContainer>
      </>
    </TabContentContainer>
  );
};

export default TabContent;