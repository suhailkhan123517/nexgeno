"use client";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function Whatsapp() {
  return (
    <>
      <div className="floating-whatsapp">
        <FloatingWhatsApp
          phoneNumber="7045772660"
          accountName="Nexgeno Technology Pvt Ltd"
          allowEsc
          //   notification="true"
          notificationSound
          avatar="/favicon.jpg"
          statusMessage="Typically replies within 1 day"
          buttonClassName="floating-whatsapp-button"
          notificationClassName="floating-whatsapp-notification"
        />
      </div>
    </>
  );
}
