import { ArcherContainer, ArcherElement } from 'react-archer';
import {
  DiagramContainer, RowFirst, RowSecond, BoxDiv
} from "../styles/DiagramFirstStyled";
import { ContentTag } from "../styles/TabsStyled";
import { tabObjOne } from "../Data";

const boxContent = tabObjOne.dataFlowDiagram;

const FlowDiagram = () => {
  return (
    <DiagramContainer>
      <ArcherContainer strokeColor="#5c001e">
        <RowFirst>
          <ArcherElement
            id="element0"
            relations={[
              {
                targetId: "element1",
                targetAnchor: 'left',
                sourceAnchor: 'right',
                style: { strokeColor: "#5c001e", strokeWidth: 2 }
              },
            ]}
            key={0}
          >
            <BoxDiv><ContentTag dangerouslySetInnerHTML={{__html:boxContent[0]}} /></BoxDiv>
          </ArcherElement>
          <ArcherElement
            id="element1"
            relations={[
              {
                targetId: "element2",
                targetAnchor: 'left',
                sourceAnchor: 'right',
                style: { strokeColor: "#5c001e", strokeWidth: 2 }
              },
            ]}
            key={1}
          >
            <BoxDiv>{boxContent[1]}</BoxDiv>
          </ArcherElement>
          <ArcherElement
            id="element2"
            relations={[
              {
                targetId: "element3",
                targetAnchor: 'left',
                sourceAnchor: 'right',
                style: { strokeColor: "#5c001e", strokeWidth: 2 }
              },
            ]}
            key={2}
          >
            <BoxDiv>{boxContent[2]}</BoxDiv>
          </ArcherElement>
          <ArcherElement
            id="element3"
            relations={[
              {
                targetId: "element4",
                targetAnchor: 'top',
                sourceAnchor: 'bottom',
                style: { strokeColor: "#5c001e", strokeWidth: 2 }
              },
            ]}
            key={3}
          >
            <BoxDiv>{boxContent[3]}</BoxDiv>
          </ArcherElement>
        </RowFirst>

        <RowSecond>
          <ArcherElement
            id="element4"
            relations={[
              {
                targetId: "element5",
                targetAnchor: 'left',
                sourceAnchor: 'right',
                style: { strokeColor: "#5c001e", strokeWidth: 2 }
              },
            ]}
            key={4}
          >
            <BoxDiv>{boxContent[4]}</BoxDiv>
          </ArcherElement>
          <ArcherElement
            id="element5"
            relations={[
              {
                targetId: "element6",
                targetAnchor: 'left',
                sourceAnchor: 'right',
                style: { strokeColor: "#5c001e", strokeWidth: 2 }
              },
            ]}
            key={5}
          >
            <BoxDiv><ContentTag dangerouslySetInnerHTML={{__html:boxContent[5]}} /></BoxDiv>
          </ArcherElement>
          <ArcherElement
            id="element6"
            key={6}
          >
            <BoxDiv><ContentTag dangerouslySetInnerHTML={{__html:boxContent[6]}} /></BoxDiv>
            </ArcherElement>
        </RowSecond>
      </ArcherContainer>
    </DiagramContainer>
  );
};

export default FlowDiagram;