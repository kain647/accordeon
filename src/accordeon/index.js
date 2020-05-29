import React, { useState } from "react";
import { Container, Block, BlockControl, BlockContent } from "./styles";

const Expandable = props => {
  const { content, name, isExpanded } = props;
  const [expanded, toggle] = useState(isExpanded);
  return (
    <Block>
      <BlockControl onClick={() => toggle(!expanded)}>{name}</BlockControl>
      {expanded && <BlockContent>{content}</BlockContent>}
    </Block>
  );
};

const Accord = () => {
  const [activeBlock, activate] = useState(0);
  return (
    <Container>
      <Expandable
        name={"First"}
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet
          ut metus et mattis. Cras purus justo, commodo mollis eros sed, varius
          maximus lacus. Fusce bibendum et sem eu aliquam. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Mauris orci urna, convallis a
          mattis sit amet, ultrices ut felis. Quisque semper ultricies nisl, nec
          ornare massa. Etiam molestie at mi eu pulvinar. Suspendisse at ipsum
          mauris. Sed molestie dolor diam, vitae vehicula neque commodo id."
      />
      <Expandable
        name={"Second"}
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet
          ut metus et mattis. Cras purus justo, commodo mollis eros sed, varius
          maximus lacus. Fusce bibendum et sem eu aliquam. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Mauris orci urna, convallis a
          mattis sit amet, ultrices ut felis. Quisque semper ultricies nisl, nec
          ornare massa. Etiam molestie at mi eu pulvinar. Suspendisse at ipsum
          mauris. Sed molestie dolor diam, vitae vehicula neque commodo id."
      />
      <Expandable
        name={"Third"}
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet
          ut metus et mattis. Cras purus justo, commodo mollis eros sed, varius
          maximus lacus. Fusce bibendum et sem eu aliquam. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Mauris orci urna, convallis a
          mattis sit amet, ultrices ut felis. Quisque semper ultricies nisl, nec
          ornare massa. Etiam molestie at mi eu pulvinar. Suspendisse at ipsum
          mauris. Sed molestie dolor diam, vitae vehicula neque commodo id."
      />
    </Container>
  );
};

export default Accord;
