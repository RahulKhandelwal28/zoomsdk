import React, { useEffect } from "react";

const Meeting = ({ payload }) => {
  useEffect(() => {
    const initializeZoomSDK = async () => {
      try {
        const { ZoomMtg } = await import("@zoomus/websdk");

        ZoomMtg.setZoomJSLib("https://source.zoom.us/lib", "/av");
        ZoomMtg.preLoadWasm();
        ZoomMtg.prepareWebSDK();


        ZoomMtg.generateSDKSignature({
          meetingNumber: payload.meetingNumber,
          role: payload.role,
          sdkKey: payload.sdkKey,
          sdkSecret: payload.sdkSecret,
          success: (signature) => {
            ZoomMtg.init({
              leaveUrl: payload.leaveUrl,
              success: (data) => {
                ZoomMtg.join({
                  meetingNumber: payload.meetingNumber,
                  sdkKey: payload.sdkKey,
                  signature: signature.result,
                  userName: payload.userName,
                  userEmail: payload.userEmail,
                  password: payload.password,
                  tk: '',
                  success: () => {
                    console.log('--Joined--');
                  },
                  error: (error) => {
                    console.error("Error joining Zoom meeting:", error);
                  },
                });
              },
              error: (error) => {
                console.error("Error initializing Zoom:", error);
              },
            });
          },
          error: (error) => {
            console.error("Error generating Zoom SDK signature:", error);
          },
        });
      } catch (error) {
        console.error("Error loading Zoom SDK:", error);
      }
    };

    initializeZoomSDK();

    
  }, [payload]); 

  return <></>;
};

export default Meeting;
