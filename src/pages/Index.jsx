import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-lg mx-auto shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">Profile Page</CardTitle>
          <CardDescription className="text-center text-gray-500">Manage your profile information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center space-y-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://via.placeholder.com/150" alt="Profile Picture" />
              <AvatarFallback>PP</AvatarFallback>
            </Avatar>
            <div className="w-full">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="John Doe" className="mt-1" />
            </div>
            <div className="w-full">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john.doe@example.com" className="mt-1" />
            </div>
            <div className="w-full">
              <Label htmlFor="bio">Bio</Label>
              <Textarea id="bio" placeholder="A brief bio about yourself" className="mt-1" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;