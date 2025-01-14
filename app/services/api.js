//ApiClient recebe a baseUrl(url padrao da api) + o endpoint especificado no countriesApi
const ApiClient = (baseUrl) => ({
	async get(endpoint) {
		try {
			const response = await fetch(`${baseUrl}${endpoint}`);

			if (!response.ok) {
				return [null, `HTTP error! Status: ${response.status}`];
			}
			const data = await response.json();
			return [data, null];
		} catch (error) {
			console.error("API request failed:", error);
			return [null, error.message];
		}
	},
});

const api = ApiClient("https://restcountries.com/v3.1");
//O countriesApi faz a conexao com a instancia do apiclient =
const baseFields = "cca3,flags,name,capital,region,population";
const countriesApi = {
	getAll: () => api.get(`/all?fields=${baseFields}`), //Metodo para pegar todas essas informacoes especificas
	getCountry: (id) =>
		api.get(
			`/alpha/${id}?fields=${baseFields},languages,currencies, tld, borders`,
		),
};

export { countriesApi };
