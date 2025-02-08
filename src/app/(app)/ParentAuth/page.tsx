"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSession } from "next-auth/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

const ParentPasswordInput = () => {
  const [password, setPassword] = useState("");
  const { data: session } = useSession();
  const router = useRouter();
  const username = session?.user.username;
  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/parentAuth", {
        username,
        password,
      });
      localStorage.setItem("Mode", "Parent Mode");
      // revalidatePath("/")
      router.replace("/");
      window.location.reload();
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  const Mode = localStorage.getItem("Mode");
  if (Mode === "Child Mode") {
    return (
      <div className="flex flex-col justify-center h-[60vh]">
        <div className="flex flex-col items-center gap-4 p-4 border rounded-lg shadow-md w-80 mx-auto">
          <p className="text-left font-semibold">
            Enter Password to log in as Parent
          </p>
          <Input
            type="password"
            placeholder="Enter Parent Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <Button onClick={handleLogin} className="w-full">
            Log In As Parent
          </Button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col justify-center h-[60vh]">
        <div className="flex flex-col items-center gap-4 p-4 border rounded-lg shadow-md w-80 mx-auto">
          <p className="text-left font-semibold">You are in Parent Mode</p>
          
          <div className="flex h-fit flex-col space-y-5">
          <Link href={"/"} className="w-full mx-auto">
            <Button>Go to Home</Button>
          </Link>
          <Button
            onClick={() => {
              localStorage.setItem("Mode", "Child Mode");
              window.location.reload();
            }}
            className=" h-fit"
          >
            Switch to Child Mode
          </Button>
          </div>
        </div>
      </div>
    );
  }
};

export default ParentPasswordInput;
