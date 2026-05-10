const countries = [
    { name: "Afghanistan", code: "AF" }, { name: "Albania", code: "AL" },
    { name: "Algeria", code: "DZ" }, { name: "Andorra", code: "AD" },
    { name: "Angola", code: "AO" }, { name: "Argentina", code: "AR" },
    { name: "Armenia", code: "AM" }, { name: "Australia", code: "AU" },
    { name: "Austria", code: "AT" }, { name: "Azerbaijan", code: "AZ" },
    { name: "Bahamas", code: "BS" }, { name: "Bahrain", code: "BH" },
    { name: "Bangladesh", code: "BD" }, { name: "Belarus", code: "BY" },
    { name: "Belgium", code: "BE" }, { name: "Belize", code: "BZ" },
    { name: "Benin", code: "BJ" }, { name: "Bhutan", code: "BT" },
    { name: "Bolivia", code: "BO" }, { name: "Bosnia and Herzegovina", code: "BA" },
    { name: "Botswana", code: "BW" }, { name: "Brazil", code: "BR" },
    { name: "Brunei", code: "BN" }, { name: "Bulgaria", code: "BG" },
    { name: "Burkina Faso", code: "BF" }, { name: "Burundi", code: "BI" },
    { name: "Cambodia", code: "KH" }, { name: "Cameroon", code: "CM" },
    { name: "Canada", code: "CA" }, { name: "Cape Verde", code: "CV" },
    { name: "Central African Republic", code: "CF" }, { name: "Chad", code: "TD" },
    { name: "Chile", code: "CL" }, { name: "China", code: "CN" },
    { name: "Colombia", code: "CO" }, { name: "Comoros", code: "KM" },
    { name: "Congo", code: "CG" }, { name: "Costa Rica", code: "CR" },
    { name: "Croatia", code: "HR" }, { name: "Cuba", code: "CU" },
    { name: "Cyprus", code: "CY" }, { name: "Czech Republic", code: "CZ" },
    { name: "Denmark", code: "DK" }, { name: "Djibouti", code: "DJ" },
    { name: "Dominican Republic", code: "DO" }, { name: "Ecuador", code: "EC" },
    { name: "Egypt", code: "EG" }, { name: "El Salvador", code: "SV" },
    { name: "Equatorial Guinea", code: "GQ" }, { name: "Eritrea", code: "ER" },
    { name: "Estonia", code: "EE" }, { name: "Eswatini", code: "SZ" },
    { name: "Ethiopia", code: "ET" }, { name: "Fiji", code: "FJ" },
    { name: "Finland", code: "FI" }, { name: "France", code: "FR" },
    { name: "Gabon", code: "GA" }, { name: "Gambia", code: "GM" },
    { name: "Georgia", code: "GE" }, { name: "Germany", code: "DE" },
    { name: "Ghana", code: "GH" }, { name: "Greece", code: "GR" },
    { name: "Guatemala", code: "GT" }, { name: "Guinea", code: "GN" },
    { name: "Guinea-Bissau", code: "GW" }, { name: "Guyana", code: "GY" },
    { name: "Haiti", code: "HT" }, { name: "Honduras", code: "HN" },
    { name: "Hungary", code: "HU" }, { name: "Iceland", code: "IS" },
    { name: "India", code: "IN" }, { name: "Indonesia", code: "ID" },
    { name: "Iran", code: "IR" }, { name: "Iraq", code: "IQ" },
    { name: "Ireland", code: "IE" }, { name: "Israel", code: "IL" },
    { name: "Italy", code: "IT" }, { name: "Jamaica", code: "JM" },
    { name: "Japan", code: "JP" }, { name: "Jordan", code: "JO" },
    { name: "Kazakhstan", code: "KZ" }, { name: "Kenya", code: "KE" },
    { name: "Kuwait", code: "KW" }, { name: "Kyrgyzstan", code: "KG" },
    { name: "Laos", code: "LA" }, { name: "Latvia", code: "LV" },
    { name: "Lebanon", code: "LB" }, { name: "Lesotho", code: "LS" },
    { name: "Liberia", code: "LR" }, { name: "Libya", code: "LY" },
    { name: "Liechtenstein", code: "LI" }, { name: "Lithuania", code: "LT" },
    { name: "Luxembourg", code: "LU" }, { name: "Madagascar", code: "MG" },
    { name: "Malawi", code: "MW" }, { name: "Malaysia", code: "MY" },
    { name: "Maldives", code: "MV" }, { name: "Mali", code: "ML" },
    { name: "Malta", code: "MT" }, { name: "Mauritania", code: "MR" },
    { name: "Mauritius", code: "MU" }, { name: "Mexico", code: "MX" },
    { name: "Moldova", code: "MD" }, { name: "Monaco", code: "MC" },
    { name: "Mongolia", code: "MN" }, { name: "Montenegro", code: "ME" },
    { name: "Morocco", code: "MA" }, { name: "Mozambique", code: "MZ" },
    { name: "Myanmar", code: "MM" }, { name: "Namibia", code: "NA" },
    { name: "Nepal", code: "NP" }, { name: "Netherlands", code: "NL" },
    { name: "New Zealand", code: "NZ" }, { name: "Nicaragua", code: "NI" },
    { name: "Niger", code: "NE" }, { name: "Nigeria", code: "NG" },
    { name: "North Korea", code: "KP" }, { name: "North Macedonia", code: "MK" },
    { name: "Norway", code: "NO" }, { name: "Oman", code: "OM" },
    { name: "Pakistan", code: "PK" }, { name: "Panama", code: "PA" },
    { name: "Papua New Guinea", code: "PG" }, { name: "Paraguay", code: "PY" },
    { name: "Peru", code: "PE" }, { name: "Philippines", code: "PH" },
    { name: "Poland", code: "PL" }, { name: "Portugal", code: "PT" },
    { name: "Qatar", code: "QA" }, { name: "Romania", code: "RO" },
    { name: "Russia", code: "RU" }, { name: "Rwanda", code: "RW" },
    { name: "Saudi Arabia", code: "SA" }, { name: "Senegal", code: "SN" },
    { name: "Serbia", code: "RS" }, { name: "Sierra Leone", code: "SL" },
    { name: "Singapore", code: "SG" }, { name: "Slovakia", code: "SK" },
    { name: "Slovenia", code: "SI" }, { name: "Somalia", code: "SO" },
    { name: "South Africa", code: "ZA" }, { name: "South Korea", code: "KR" },
    { name: "South Sudan", code: "SS" }, { name: "Spain", code: "ES" },
    { name: "Sri Lanka", code: "LK" }, { name: "Sudan", code: "SD" },
    { name: "Sweden", code: "SE" }, { name: "Switzerland", code: "CH" },
    { name: "Syria", code: "SY" }, { name: "Taiwan", code: "TW" },
    { name: "Tajikistan", code: "TJ" }, { name: "Tanzania", code: "TZ" },
    { name: "Thailand", code: "TH" }, { name: "Togo", code: "TG" },
    { name: "Trinidad and Tobago", code: "TT" }, { name: "Tunisia", code: "TN" },
    { name: "Turkey", code: "TR" }, { name: "Turkmenistan", code: "TM" },
    { name: "Uganda", code: "UG" }, { name: "Ukraine", code: "UA" },
    { name: "United Arab Emirates", code: "AE" }, { name: "United Kingdom", code: "GB" },
    { name: "United States", code: "US" }, { name: "Uruguay", code: "UY" },
    { name: "Uzbekistan", code: "UZ" }, { name: "Venezuela", code: "VE" },
    { name: "Vietnam", code: "VN" }, { name: "Yemen", code: "YE" },
    { name: "Zambia", code: "ZM" }, { name: "Zimbabwe", code: "ZW" }
];


window.onload = function () {

    const select =  document.getElementById("Country");
    countries.forEach(country => {

        const option = document.createElement("option");

        option.value = country.code;
        option.textContent =  country.name;

        select.appendChild(option);

    }) ;

};


async function Fetch_Data() {

   try {

       const City = document.getElementById("City").value.toLowerCase()

       const URL = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=3955cb95e9939350197b8a07ee77f4bd&units=metric`

       let response = await fetch(URL);

       

       if(!response.ok) {

        throw new Error("Could not fetch resource")
       }

       

       

       let Data = await response.json();

       document.getElementById("Name_of_City").innerHTML = "📍" + Data.name

       document.getElementById("Temp").innerHTML = "🌡️Temperature ;- " + Data.main.temp + "C"

       document.getElementById("Weather").innerHTML = "☁️weather - " + Data.weather[0].main;

       document.getElementById("Humidity").innerHTML = "💧Humidity - " + Data.main.humidity;

       document.getElementById("Wind").innerHTML = "🌬️Wind - " + Data.wind.speed;

       



    }
   catch (error){

    console.error(error);


   }
   
    


}
