import { Grid, Card, Footer, Header } from "./components";

const countries = [
	{
		id: "1",
		country: "Brazil",
		capital: "Brasília",
		region: "South America",
		population: "213993437",
	},
	{
		id: "2",
		country: "Japan",
		capital: "Tokyo",
		region: "Asia",
		population: "125960000",
	},
	{
		id: "3",
		country: "Canada",
		capital: "Ottawa",
		region: "North America",
		population: "38246108",
	},
	{
		id: "4",
		country: "Germany",
		capital: "Berlin",
		region: "Europe",
		population: "83190556",
	},
	{
		id: "5",
		country: "India",
		capital: "New Delhi",
		region: "Asia",
		population: "1417173173",
	},
	{
		id: "6",
		country: "Australia",
		capital: "Canberra",
		region: "Oceania",
		population: "25788217",
	},
	{
		id: "7",
		country: "South Africa",
		capital: "Pretoria",
		region: "Africa",
		population: "60142978",
	},
	{
		id: "8",
		country: "France",
		capital: "Paris",
		region: "Europe",
		population: "65480710",
	},
];

export default function Home() {
	return (
		<>
			<Header />
			<main className="flex-1">
				<Grid>
					{countries.map(({ id, country, capital, region, population }) => (
						<Card
							key={id}
							country={country}
							capital={capital}
							region={region}
							population={population}
						/>
					))}
				</Grid>
			</main>
			<Footer />
		</>
	);
}
