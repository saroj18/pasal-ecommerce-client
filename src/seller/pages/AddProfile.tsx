import HeadingTypo from "../../components/common/HeadingTypo";
import Label from "../../components/common/Label";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

const AddProfile = () => {
  return (
    <div>
      <HeadingTypo>
        Hey Seller, How about we get to know you better?
      </HeadingTypo>
      <div>
        <Label className="">Enter Your Store Name</Label>
        <Input type="text" placeholder="Enter your store name" />
        <Label className="">Email Address</Label>
        <Input type="text" placeholder="Enter your email" />
        <Label className="">Mobile Number</Label>
        <Input type="text" />
        <Button>Next</Button>
      </div>
    </div>
  );
};

export default AddProfile;
