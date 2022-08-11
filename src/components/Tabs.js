import React, { useState } from "react";
import {
  TabsContainer, TabsRow, Button, Content, TabContent, ContentTag, SimulationTab, SimulationButton
} from "../styles/TabsStyled";
import { tabObjDefault, tabObjOne, tabObjTwo, tabObjThree } from "../Data";
import TabFirst from "../components/TabFirst";

const TabsLabel = tabObjDefault.tabLabel;

const TabsComponent = () => {
  const [active, setActive] = useState(0);

  return (
    <TabsContainer>
        <TabsRow>
          {TabsLabel.map((tab, index) => (
            <Button active={active === index} onClick={() => setActive(index)} key={index}>
              {tab}
            </Button>
          ))}
        </TabsRow>
        <Content>
          <TabContent active={active}>{(active === null || active === 0) ? <TabFirst content={tabObjOne.content}></TabFirst> : active === 1 ? <ContentTag dangerouslySetInnerHTML={{__html:tabObjTwo.content}} /> : active === 2 ? <SimulationTab><SimulationButton onClick={() => window.open(tabObjThree.buttonLink, "_blank")}>{tabObjThree.buttonLabel}</SimulationButton></SimulationTab> : tabObjDefault.content}</TabContent>
        </Content>
    </TabsContainer>
  );
};

export default TabsComponent;