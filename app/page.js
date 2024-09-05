"use client"
import styles from "./page.module.css";
import {useState} from "react";
import {PrivyProvider, useFundWallet} from "@privy-io/react-auth";
import {SimpleModal} from "@/app/SimpleModal";

export default function Home() {
    const {fundWallet} = useFundWallet();

    const [inputAmount, setInputAmount] = useState(0.1);

    const topUp = async () => {
        await fundWallet(
            "0x149E9bc2f1a75F9266C450249E103d777Cf5c386",
            {
                amount: 0.4
            }
        );
    }

    return (
        <PrivyProvider appId={"cm0aork0f0269qixmaz67yjrd"} clientId={"client-WY5avK6HW86c1yoyQ2CjVmZR7USnSJ1dFZoFSo3TDBUMN"}>
            <div className={styles.page}>
                <main className={styles.main}>


                    <SimpleModal title={"Deposit Crypto"} visible={true} content={<div className={"fc gap-2"}>
                    <div className={styles.ctas}>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <span>Amount:</span>
                            <input style={{fontSize: "18px"}} value={inputAmount}
                                   onChange={(e) => setInputAmount(e.target.value)}/>
                        </div>
                        <a
                            onClick={topUp}
                            className={styles.primary}
                        >

                            Top Up
                        </a>
                    </div>
                    </div>}/>
                </main>

            </div>
        </PrivyProvider>
    );
}
