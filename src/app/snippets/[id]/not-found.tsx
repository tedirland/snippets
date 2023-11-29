import Link from "next/link"
export default function SnippetNotFound(){
    return <div>
        <h1 className="text-xl bold">
            Snippet not found
            Please navigate back to the home page and try again
        </h1>
        <Link className="text-decoration-line: underline hover:bg-sky-700" href="/">Go Home</Link>
    </div>
} 