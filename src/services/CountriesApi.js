const BASE_URL = `https://restcountries.com/v3.1/all`;
// ?fields=name,capital,region,population
export async function getCountries() {
  try {
    const res = await fetch(
      `${BASE_URL}?fields=name,capital,region,population,flags`,
    );
    if (!res.ok)
      throw new Error("Something went wrong when getting the countries...");
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
