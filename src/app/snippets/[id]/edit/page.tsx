import { db } from "@/db";
import { notFound } from "next/navigation";
import SnippetEditForm from "@/components/snippet-edit-form";

interface SnippetEditProps {
    params:{id: string}
}

export default async function SnippetEditPage(props: SnippetEditProps){
    const id = parseInt(props.params.id);
    const snippet = await db.snippet.findFirst({
        where: {id}
    });

    if (!snippet){
        return notFound()
    }
    return <div>
        
        <SnippetEditForm snippet={snippet}/>
    </div>
}