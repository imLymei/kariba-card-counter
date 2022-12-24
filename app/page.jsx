'use client';

import { useState } from 'react';

export default function Home() {
	// * Default card amount
	let cards = [8, 8, 8, 8, 8, 8, 8, 8, 1];
	// * Cards names
	let cardsName = [
		'Rato',
		'Suricato',
		'Zebra',
		'Girafa',
		'Avestruz',
		'Onça',
		'Rinoceronte',
		'Elefante',
		'Camaleão',
	];
	// * Card amount + chameleon
	let totalDeck = 65;

	// * Function to calculate factorial
	const factorial = (num) => {
		if (num < 0) return -1; // ? prevents negatives
		else if (num == 0) return 1; // ? 0 factorial is equal to 1 (0! = 1)
		else {
			return num * factorial(num - 1); // ? Multiply the actual number for the next number until reaches 0 (5 * 4 * 3 * 2 * 1 * 0!)
		}
	};

	// * Function to calculate combination
	const combination = (total, fraction) => {
		return Math.round(
			factorial(total) / (factorial(fraction) * factorial(total - fraction)) // ? n! / (x! * (n-x)!)
		);
	};

	// * Function to round a number a specific amounts of decimal values
	const round = (number) => {
		let factor = 10 ** 2; // ? Gets 10 powered to two making the number have two decimal values (52.21)

		return Math.round(number * 100 * factor) / factor; // ? Multiply the number for the factor, gets it's fully approximated value and divide for the factor (multiply for 100 to make it percentage)
	};

	// * Function to calculate the probability of specific card being in the oponente's hand
	const probability = (total, cardNumbers) => {
		// ? prevents NaN response in the last hand possible
		if (total > 5) {
			return 1 - combination(total - cardNumbers, 5) / combination(total, 5); // ? 1 - C(n-x,5)/C(n,5)
		} else return 1; // ? return 100% for the last 5 cards
	};

	// * Function to get the card's odds
	const percentageMaker = (cardNumbers, total) => {
		// ? Prevents NaN response if the number of cards remaining is 0
		if (cardNumbers != 0 && total != 0) {
			return round(probability(total, cardNumbers)); // ? Gets card odd
		} else return 0;
	};

	// * Checks if the card clicked is the array and above 0
	const handleCards = (index) => {
		// ? Create a new map for change the clicked card's odd
		const nextCard = cardsInDeck.map((card, i) => {
			// ? Checks if the index received is equal of the actual array index and the number of cards is above 0
			if (i === index && card > 0) {
				setDeck(deck - 1); // ? Remove 1 card of the deck
				return card - 1; // ? Return the new number of cards in this index
			} else {
				return card; // ? Return the actual number of cards in this index
			}
		});
		setCardsInDeck(nextCard); // ? Save the new card's numbers
	};

	// * Styles for the card's div background
	const cardsStyles = [
		{
			backgroundColor: '#ef6173',
		},
		{
			backgroundColor: '#eb3645',
		},
		{
			backgroundColor: '#f28e48',
		},
		{
			backgroundColor: '#f3cd46',
		},
		{
			backgroundColor: '#b0bc5a',
		},
		{
			backgroundColor: '#84a6d4',
		},
		{
			backgroundColor: '#2a4294',
		},
		{
			backgroundColor: '#bb478d',
		},
		{
			background:
				'linear-gradient(135deg,#f00,#00f,#0f0,#f00,#00f,#0f0,#f00,#00f,#0f0,#f00,#00f,#0f0,#f00)',
			backgroundSize: '400% 400%',
			animation: 'gradient 5s linear infinite',
		},
	];

	// * useState for update realtime the number of cards array
	const [cardsInDeck, setCardsInDeck] = useState(cards);
	// * useState for update realtime the number of cards in the deck + opponent's hand
	const [deck, setDeck] = useState(totalDeck);

	return (
		<div className='w-[100vw] flex justify-center p-[3.5rem]'>
			<div className='w-[85vw] grid grid-cols-2 sm:grid-cols-4 justify-items-center text-center gap-8'>
				{cardsInDeck.map((cardsInDeck, index) => (
					<div
						className='cards'
						key={index}
						onClick={() => {
							handleCards(index);
						}}
						style={cardsStyles[index]}>
						<p className='number'>{cardsInDeck}</p>
						<h1 className='animal'>{cardsName[index]}</h1>
						<p className='percentage'>{percentageMaker(cardsInDeck, deck)}%</p>
					</div>
				))}
				<div
					className='cards'
					onClick={() => {
						setCardsInDeck(cards);
						setDeck(totalDeck);
					}}>
					<p className='text-black'>0</p>
					<h1 className='animal'>Reset</h1>
					<p className='text-black'>0</p>
				</div>
			</div>
		</div>
	);
}
