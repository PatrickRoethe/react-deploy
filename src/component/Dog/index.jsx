import localDogImage from "../../assets/dog.jpeg"; // 👈 Import fra src/assets/

export function Dog() {
  return (
    <div>
      <h2>Here is a dog:</h2>

      {/* 🌍 1️⃣ Bilde fra nettet (URL) */}
      <p>Image from URL</p>
      <img
        src="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg"
        alt="A cute dog from the internet"
        width="300"
      />

      {/* 📂 2️⃣ Bilde fra `src/assets/` (importert i React) */}
      <p>Image from Component (src/assets/)</p>
      <img
        src={localDogImage} // 👈 Importert bilde fra `src/assets/`
        alt="A dog from local storage"
        width="300"
      />

      {/* 🏗️ 3️⃣ Bilde fra `public/`-mappen */}
      <p>Image from Public Folder</p>
      <img
        src="/dog.jpeg" // 👈 Direkte referanse til bildet i `public/`
        alt="A dog from public folder"
        width="300"
      />
    </div>
  );
}
