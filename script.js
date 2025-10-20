fetch("https://ipapi.co/json/")
  .then(response => response.json())
  .then(data => {
    console.log("IP:", data.ip);
    console.log("البلد:", data.country_name);
    console.log("المدينة:", data.city);
  });
