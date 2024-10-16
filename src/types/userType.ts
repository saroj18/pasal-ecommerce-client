import { UserLocationType } from "./UserLocationType";

export type UserType = {
  _id: string;
  fullname: string;
  email: string;
  password: string;
  role: string;
  refreshToken: string;
  address: UserLocationType;
  gender: string;
  username: string;
  verify: Boolean;
  comparePassword: (password: string) => boolean;
  generateAccessToken: () => string;
  generateRefreshToken: () => string;
  mobile: string;
  dob: string;
  shopVerify: boolean;
  buyProduct: string;
  signUpAs: string;
  block: boolean;
  socketInfo: WebSocket;
  online: boolean;
  oAuthLogin: boolean;
  verifyToken: null | string;
  verifyTokenExpiry: number | null;
  createdAt: string;
};
