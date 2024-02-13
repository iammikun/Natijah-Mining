import React, { useEffect } from "react";
import Form from "../../Components/Contact/Form/Form";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div>
        <Form />
      </div>
    </div>
  );
};

export default Contact;
