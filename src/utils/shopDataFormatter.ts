export const shopDataFormatter = (data: any) => {
  console.log(data);
  const heading = [
    "shopName",
    "shopAddress",
    "category",
    "monthlyTurnover",
    "createdAt",
    "mobile",
    "dob",
    "email",
    "gender",
    "citiNumber",
    "fullname",
    "username",
  ];
  const shopInfo: { [key: string]: string } = {};
  if (!data) return;

  Object.entries(data).forEach(([key, value]: [string, any]) => {
    if (typeof value == "object") {
      let info = shopDataFormatter(value);
      Object.assign(shopInfo, info);
    }
    if (heading.includes(key)) {
      shopInfo[key] = value;
    }
  });

  return shopInfo;
};
