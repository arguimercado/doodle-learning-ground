import { auth } from "@clerk/nextjs/server";

export default function Home() {
	const {userId} = auth();
    return (
	 	<div className="h-[850px] w-full flex flex-col">
			<h1>Welcome {userId}</h1>
		</div>
	);
}
