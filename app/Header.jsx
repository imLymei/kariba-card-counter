function Header() {
	const animation = (id) => {
		return { animation: `textColor 6s linear ${id}s infinite` };
	};

	return (
		<header className='bg-white/[0.01] border-gray-900 py-3 text-center border-b'>
			<h1 className='text-2xl'>Probabilidade de cartas para</h1>
			<h1 className='text-5xl'>
				<span className='header' style={animation(0)}>
					K
				</span>
				<span className='header' style={animation(1)}>
					A
				</span>
				<span className='header' style={animation(2)}>
					R
				</span>
				<span className='header' style={animation(3)}>
					I
				</span>
				<span className='header' style={animation(4)}>
					B
				</span>
				<span className='header' style={animation(5)}>
					A
				</span>
			</h1>
		</header>
	);
}

export default Header;
