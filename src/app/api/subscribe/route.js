import { NextResponse } from "next/server";
import { db } from "../../../../lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

export async function POST (req) {
    var emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    var collectionName = "emailList";

    try {
        const body = await req.json();
        var { email } = body;
    
        email = email.toString().trim();

        if (email === "") {
          return NextResponse.json({ error: "Missing data" }, { status: 400 });
        }
        if (!emailRegEx.test(email)) {
            return NextResponse.json({ error: "Invalid Email Format" }, { status: 400 });
        }

        //document exist?
        const docRef = doc(db, collectionName, email);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("email already exist");
            throw new Error("You've already Subscribed!");
        } else {
            //add email to list
            console.log("No such email!");
            const docRef = doc(db, collectionName, email);

            try {
                await setDoc(docRef, {
                    email: email,
                });
                console.log("Subscribed");
            } catch (e) {
                console.error("Error subscribing: ", e);
            }
        }

    
        return NextResponse.json({ success: true});
    } catch (err) {
        console.log(err);
        return NextResponse.json({error: `${err}`}, {status: 500});
    }
}