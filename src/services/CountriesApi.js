const BASE_URL = `https://restcountries.com/v3.1/`;
// ?fields=name,capital,region,population
export async function getCountries() {
  try {
    const res = await fetch(
      `${BASE_URL}all?fields=name,capital,region,population,flags,cca2,cioc`,
    );
    if (!res.ok)
      throw new Error("Something went wrong when getting the countries...");
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getCountry(code) {
  try {
    const res = await fetch(
      `${BASE_URL}alpha/${code}?fields=name,capital,region,subregion,population,flags,capital,languages,currencies,tld,borders`,
    );
    if (!res.ok)
      throw new Error("Something went wrong when getting this country...");
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
}
