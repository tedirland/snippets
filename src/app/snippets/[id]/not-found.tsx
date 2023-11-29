import Link from "next/link"
export default function SnippetNotFound(){
    return <div>
        <h1 className="text-xl bold">
            Hmm... that snippet was not not found.
            Please navigate back to the home page and try again
        </h1>
        <Link href="/">Go Home</Link>
    </div>
}