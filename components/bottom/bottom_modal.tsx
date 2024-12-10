"use client"

import { EmailRounded, Facebook, Instagram, Twitter } from "@material-ui/icons"
import { Divider } from "@nextui-org/react"

export function FooterModal(){
    return <div className="bg-blue-950 py-4 px-10 space-y-2">
    <FooterModalHeading/>
    <Divider/>
    <span className="text-white font-normal text-xs">© 2006-2024 Fareportal, Inc. All rights reserved. All users of our services are subject to our Privacy Policy and agree to our Terms and Conditions. California: CST #2073455, Florida: ST37449, Iowa: SOT #967, Nevada : SOT #2007-1137, Washington: WASOT #602755832 (affiliate of Travelong, Inc.)</span>
  </div>
  }
  
  function FooterModalHeading(){
    return <div className="flex justify-between">
    <h2 className="font-bold text-2xl text-white">Easy Access</h2>
    <div className="flex space-x-6">
      <span className="font-bold text-2xl text-white">Connect with Us</span>
      <div className="space-x-1.5" style={{color:"white"}}>
        <Facebook />
        <Twitter/>
        <Instagram/>
        <EmailRounded/>
      </div>
    </div>
  </div>
  }