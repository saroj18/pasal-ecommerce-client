import { NoInternetConnection } from "@/components/NoInternetConnection";
import React, { createContext, useContext, useEffect, useState } from "react";
type RtcOfferType = {
  sdp: RTCSessionDescriptionInit;
  type: string;
  sender: string;
  receiver: string;
};

type ProvideProps = {
  sidebar: boolean;
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  accountSideBar: boolean;
  setAccountSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  zodError: { [key: string]: string };
  setZodError: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
  verifyPopup: boolean;
  setVerifyPopup: React.Dispatch<React.SetStateAction<boolean>>;
  socketServer: WebSocket | null;
  cart: number;
  setCart: React.Dispatch<React.SetStateAction<number>>;
  wishList: number;
  setWishList: React.Dispatch<React.SetStateAction<number>>;
  rtcConnection: RTCPeerConnection | null;
  setRtcConnection: React.Dispatch<
    React.SetStateAction<RTCPeerConnection | null>
  >;
  rtcOffer: RtcOfferType | null;
  setRtcOffer: React.Dispatch<React.SetStateAction<RtcOfferType | null>>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setLocalStream: React.Dispatch<React.SetStateAction<MediaStream>>;
  localStream: MediaStream;
};

const ContextProvider = createContext<ProvideProps | null>(null);

export const Context = ({ children }: { children: React.ReactNode }) => {
  const [sidebar, setSidebar] = useState<boolean>(false);
  const [verifyPopup, setVerifyPopup] = useState<boolean>(false);
  const [accountSideBar, setAccountSideBar] = useState<boolean>(false);
  const [zodError, setZodError] = useState<{ [key: string]: string }>({});
  const [socketServer, setSocketServer] = useState<WebSocket | null>(null);
  const [cart, setCart] = useState(0);
  const [wishList, setWishList] = useState(0);
  const [open, setOpen] = useState(false);
  const [rtcConnection, setRtcConnection] = useState<RTCPeerConnection | null>(
    null,
  );
  const [rtcOffer, setRtcOffer] = useState<RtcOfferType | null>(null);
  const [localStream, setLocalStream] = useState<MediaStream>(
    new MediaStream(),
  );
  const[isOnline,setIsOnline]=useState(navigator.onLine)

  useEffect(() => {
    if (socketServer) return;
    const socket = new WebSocket(import.meta.env.VITE_SOCKET_URL);
    socket.addEventListener("open", () => {
      console.log("socket connect with server successfully");
    });
    setSocketServer(socket);

    const offlineHandler = () => setIsOnline(false)
    const onlineHandler = () => setIsOnline(true)

    window.addEventListener("offline", offlineHandler);
    window.addEventListener("online", onlineHandler);

    return () => {
      socket.close();
      window.removeEventListener("offline", offlineHandler);
      window.removeEventListener("online", onlineHandler);
    };
  }, []);

  if (!isOnline) {
    return <NoInternetConnection/>
  }

  // useEffect(() => {
  //   const peer = new RTCPeerConnection({
  //     iceServers: [
  //       {
  //         urls: [
  //           "stun:stun.l.google.com:19302",
  //           "stun:global.stun.twilio.com:3478",
  //         ],
  //       },
  //     ],
  //   });
  //   setRtcConnection(peer);
  // }, []);

  return (
    <ContextProvider.Provider
      value={{
        sidebar,
        setSidebar,
        accountSideBar,
        setAccountSideBar,
        zodError,
        setZodError,
        verifyPopup,
        setVerifyPopup,
        socketServer,
        setCart,
        cart,
        wishList,
        setWishList,
        rtcConnection,
        setRtcConnection,
        rtcOffer,
        setRtcOffer,
        open,
        setOpen,
        localStream,
        setLocalStream,
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

export const useContextProvider = () => {
  const context = useContext(ContextProvider);
  if (!context) {
    throw new Error("You are outside from provider");
  }

  return context;
};

export default Context;
