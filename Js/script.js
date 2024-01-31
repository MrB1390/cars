
const quotedata = async (apiUrl) => {
    const details = await fetch(apiUrl);
    const data = await details.json();
    console.log(data);
    return data;
  };
  
  document.addEventListener("DOMContentLoaded", function () {
    quotedata("https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos/5940/anos")
    .then((quotes) => {
      const cardTexts = document.querySelectorAll(".card-body .card-text");
      const cardVariants = document.querySelectorAll(".card-body .card-value");
  
      quotes.forEach((quote, index) => {
        cardTexts[index].innerHTML = `Released: ${quote.codigo}`;
        cardVariants[index].innerHTML = `Variant: ${quote.nome}`;
      });
    });
  });
  