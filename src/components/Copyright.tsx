import Link from "next/link";

export const Copyright = () => {
	return (
		<div className="text-center flex flex-cols gap-1">
			{"Copyright © "}
			<Link color="inherit" href="/">
				Choi JS
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</div>
	);
};
