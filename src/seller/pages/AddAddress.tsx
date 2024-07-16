import React from "react";
import Label from "../../components/common/Label";
import HeadingTypo from "../../components/common/HeadingTypo";
import ParaTypo from "../../components/common/ParaTypo";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

const AddAddress = () => {
  return (
    <div>
      <HeadingTypo>Address Information</HeadingTypo>
      <ParaTypo>Store Address</ParaTypo>
      <Input type="text" placeholder="Country" />
      <Input type="text" placeholder="State" />
      <Input type="text" placeholder="Distict" />
      <Button>Next</Button>
    </div>
  );
};

export default AddAddress;
