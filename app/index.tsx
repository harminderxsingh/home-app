import { AuthContext } from "@/contexts/AuthContext";
import { Redirect } from "expo-router";
import { useContext } from "react";

export default function Index() {
//   const { userToken } = useContext(AuthContext);
//   console.log('1userToken', userToken)
  return (
    <Redirect href="/welcome" />
  );
}
