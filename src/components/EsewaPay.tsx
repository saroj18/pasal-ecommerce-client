import { useEffect, useRef } from "react";

type ObjectData = {
  data: { [key: string]: string };
};

const EsewaPay = ({ data }: ObjectData) => {
  const btnRef = useRef<HTMLInputElement>(null);
  console.log("sar", data?.product_delivery_charge);

  useEffect(() => {
    btnRef.current?.click();
  }, []);
  return (
    <form
      hidden
      action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
      method="POST"
    >
      <input type="text" id="amount" name="amount" value={data.amount} />
      <input type="text" id="tax_amount" name="tax_amount" value="0" />
      <input
        type="text"
        id="total_amount"
        name="total_amount"
        value={data.total_amount}
      />
      <input
        type="text"
        id="transaction_uuid"
        name="transaction_uuid"
        value={data.transaction_uuid}
      />
      <input
        type="text"
        id="product_code"
        name="product_code"
        value="EPAYTEST"
      />
      <input
        type="text"
        id="product_service_charge"
        name="product_service_charge"
        value="0"
      />
      <input
        type="text"
        id="product_delivery_charge"
        name="product_delivery_charge"
        value={data?.product_delivery_charge}
      />
      <input
        type="text"
        id="success_url"
        name="success_url"
        value={data.success_url}
      />
      <input
        type="text"
        id="failure_url"
        name="failure_url"
        value={data.failure_url}
      />
      <input
        type="text"
        id="signed_field_names"
        name="signed_field_names"
        value="total_amount,transaction_uuid,product_code"
      />
      <input
        type="text"
        id="signature"
        name="signature"
        value={data.signature}
      />
      <input ref={btnRef} value="Submit" type="submit" />
    </form>
  );
};

export default EsewaPay;
