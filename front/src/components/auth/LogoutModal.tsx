"use client";
import React, { Dispatch, SetStateAction } from 'react';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
  } from "@/components/ui/alert-dialog";
import {signOut} from "next-auth/react"



export default function LogoutModal({open , setOpen}:{open:boolean , 
setOpen:Dispatch<SetStateAction<boolean>>}) {

  //method
  const handleLogout = () => {
    signOut({
      redirect:true,
      callbackUrl:"/"
    })
  }

  return (
    <div>
      <AlertDialog open={open} onOpenChange={setOpen}>
  
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your 
        current session from your device.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction onClick={handleLogout}>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

    </div>
  )
}