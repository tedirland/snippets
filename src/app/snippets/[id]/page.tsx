import { notFound } from "next/navigation";
import { db } from "@/db"

interface ShowPageProps {
    params: {
        id: string
    }
}

export default async function SnippetShowPage(props:ShowPageProps){
    const snippet = await db.snippet.findFirst({
        where: {id : parseInt(props.params.id)}
    });

    if(!snippet){
        return notFound()
    }
    
   
    return <div>{snippet.title}</div>
}