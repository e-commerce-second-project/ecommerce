import React from "react";
import { Button, TextField } from "@mui/material";
import { FaPhoneSquare } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import Navbar from "./Navbar";
import Footer from "./footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white flex flex-row justify-center w-full">
        <div className="bg-bg w-[1437px] h-[500px] relative">
          <div className="absolute w-[800px] h-[457px] top-[100px] left-[504px] bg-primary rounded-[4px] overflow-hidden shadow-categogy-5">
            <div className="inline-flex flex-col items-end gap-[32px] relative top-[40px] left-[31px]">
              <div className="inline-flex flex-col items-start gap-[16px] relative flex-[0_0_auto]">
                <TextField type="text" placeholder="Your Name" />
                <TextField type="email" placeholder="Your Email" />
                <TextField type="tel" placeholder="Phone Number" />
              </div>
              {/* PlaceboxInfo component */}
              <div className="!h-[207px] !w-[737px]"></div>
              <Button button="primary" className="!flex-[0_0_auto] fill: #ef4444;" hover={false} text="Send Massage" />
            </div>
          </div>
          <div className="absolute w-[340px] h-[457px] top-[170px] left-[135px] bg-primary rounded-[4px] overflow-hidden shadow-categogy-5">
            <div className="inline-flex flex-col items-start gap-[32px] relative top-[40px] left-[35px]">
              <div className="inline-flex flex-col items-start gap-[24px] relative flex-[0_0_auto]">
                <div className="inline-flex items-center gap-[16px] relative flex-[0_0_auto]">
                  <FaPhoneSquare className="!relative !w-[40px] !h-[40px]" />
                  <div className="font-title-16px-medium">Call To Us</div>
                </div>
                <div>We are available 24/7, 7 days a week.</div>
                <div>Phone: +8801611112222</div>
              </div>
              <div className="inline-flex flex-col items-start gap-[24px] relative flex-[0_0_auto]">
                <div className="inline-flex items-center gap-[16px] relative flex-[0_0_auto]">
                  <GoMail className="!relative !w-[40px] !h-[40px] fill-red" />
                  <div className="font-title-16px-medium">Write To Us</div>
                </div>
                <div>Fill out our form and we will contact you within 24 hours.</div>
                <div>Emails: customer@exclusive.com</div>
                <div>Emails: support@exclusive.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
