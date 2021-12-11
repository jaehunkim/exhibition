import React from "react";
// reactstrap components
import { Button, FormGroup, Input, Modal } from "reactstrap";

function EModal() {
  const [scrollingLongContent, setScrollingLongContent] = React.useState(false);
  return(
    <>
      <Button
        color="primary"
        type="button"
        onClick={() => setScrollingLongContent(true)}
      >
        Launch demo modal
      </Button>
      
    </>
  );
}

export default EModal;
