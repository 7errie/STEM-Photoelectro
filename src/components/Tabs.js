import React, { useState } from "react";
import {
  TabsContainer, TabsRow, Button, Content, TabContent, SimulationTab, SimulationButton
} from "../styles/TabsStyled";
import { tabObjDefault, tabObjOne, tabObjTwo, tabObjThree } from "../Data";

const TabsLabel = tabObjDefault.tabLabel;

const TabsComponent = () => {
  const [active, setActive] = useState(0);

  return (
    <TabsContainer>
        <TabsRow>
          {TabsLabel.map((tab, index) => (
            <Button active={active === index} onClick={() => setActive(index)}>
              {tab}
            </Button>
          ))}
        </TabsRow>
        <Content>
          <TabContent active={active}>{active === null ? tabObjOne.content : active === 0 ? tabObjOne.content : active === 1 ? tabObjTwo.content : active === 2 ? <SimulationTab><SimulationButton onClick={() => window.open(tabObjThree.buttonLink, "_blank")}>{tabObjThree.buttonLabel}</SimulationButton></SimulationTab> : tabObjDefault.content}</TabContent>
        </Content>
    </TabsContainer>
  );
};

export default TabsComponent;