const login = () => {
	return (
		<button
			onClick={() => {
				document.cookie = "token=1234; path=/";
			}}
			className="bg-orange-600 h-auto w-auto p-2 rounded text-white"
		>
			Login
		</button>
	);
};

export default login;
