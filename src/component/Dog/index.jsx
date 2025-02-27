import dogImage from "./assets/dog.jpg"; // 👈 Bytt "dog.jpg" med riktig navn om nødvendig

export function Dog() {
  return (
    <div>
      <h2>Here is a dog:</h2>

      {/* Bildet fra nettet */}
      <img
        src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"
        alt="A cute dog from the internet"
        width="300"
      />

      {/* Lokalt bilde fra src/assets/ */}
      <img
        src={dogImage} // 👈 Bruk den importerte variabelen
        alt="A dog from local storage"
        width="300"
      />
    </div>
  );
}
