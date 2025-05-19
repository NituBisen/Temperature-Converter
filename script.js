function convertTemperature() {
    const temp = parseFloat(document.getElementById("temperature").value);
    const unit = document.getElementById("unit").value;

    let celsius, fahrenheit, kelvin;

    if (isNaN(temp)) {
        alert("Please enter a valid number.");
        return;
    }

    switch (unit) {
        case "celsius":
            celsius = temp;
            fahrenheit = (temp * 9) / 5 + 32;
            kelvin = temp + 273.15;
            break;
        case "fahrenheit":
            celsius = ((temp - 32) * 5) / 9;
            fahrenheit = temp;
            kelvin = ((temp - 32) * 5) / 9 + 273.15;
            break;
        case "kelvin":
            celsius = temp - 273.15;
            fahrenheit = ((temp - 273.15) * 9) / 5 + 32;
            kelvin = temp;
            break;
        default:
            alert("Please select a valid unit.");
            return;
    }

    document.getElementById("celsius").textContent = `Celsius: ${celsius.toFixed(2)} °C`;
    document.getElementById("fahrenheit").textContent = `Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
    document.getElementById("kelvin").textContent = `Kelvin: ${kelvin.toFixed(2)} K`;
}