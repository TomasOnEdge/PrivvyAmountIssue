"use client"
import {PrivyProvider} from "@privy-io/react-auth";

export function Providers({children}) {

    return <PrivyProvider appId={"cm0aork0f0269qixmaz67yjrd"}>
        {children}
    </PrivyProvider>
}
