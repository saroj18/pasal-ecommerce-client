import { useContextProvider } from "@/context/Context";
import React, { useEffect, useRef, useState } from "react";

const VideoChats = () => {
  const { rtcConnection, socketServer, setLocalStream } = useContextProvider();
  const [remoteStream] = useState(new MediaStream());
  const remoteVideoRef = useRef<HTMLVideoElement | null>(null);
  const localVideoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const handleMessage = async (info: MessageEvent) => {
      const serverData = JSON.parse(info.data);

      if (rtcConnection) {
        const stream = await navigator.mediaDevices.getDisplayMedia();
        stream.getTracks().forEach((track) => {
          rtcConnection.addTrack(track, stream);
        });
          
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = stream;
        }
        setLocalStream(stream);
        if (serverData.type == "ice-candidate") {
          console.log(serverData);
          
          if (serverData.candidate) {
            rtcConnection.addIceCandidate(
              new RTCIceCandidate(serverData.candidate),
            );
          }
          console.log("ice fireddddddddddd");
        }

        // if (
        //   serverData.type == "error" &&
        //   serverData.errorName == "chatWithVendorAndCustomer"
        // ) {
        //   setError(serverData.message);
        // }
      }
    };

    if (socketServer && rtcConnection) {
      socketServer.addEventListener("message", handleMessage);
      rtcConnection.ontrack = (event) => {
        console.log("video receive");

        event.streams[0].getTracks().forEach((track) => {
          remoteStream.addTrack(track as MediaStreamTrack);
          if (remoteVideoRef.current) {
            remoteVideoRef.current.srcObject = remoteStream;
          }
        });
      };
    }

    return () => {
      if (socketServer) {
        socketServer.removeEventListener("message", handleMessage);
      }
    };
  }, [socketServer, rtcConnection]);

  return (
    <div>
      <video
        style={{ height: "200px", width: "200px" }}
        autoPlay
        ref={localVideoRef}
        src=""
      ></video>
      <video
        style={{ height: "200px", width: "200px" }}
        autoPlay
        ref={remoteVideoRef}
        src=""
      ></video>
    </div>
  );
};

export default VideoChats;
