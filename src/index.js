const $links = document.getElementById('links')
const $name =document.querySelector('h1')

const data = {
  name: "Manuel Antonio",
  nickname: "manuelito",
  description: "...",
  avatar: "...",
  social: [
    {
      name: "twitter",
      url: "https://youtube.com/@manuelvp-i7l?si=cIRP67I_d8F0ZavN",
      username: "@Manuelitodev",
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/manuelito11_/",
      username: "@manuelito11_",
    },
  ],
  links: [
    {
      name: "Platzi",
      url: "https://platzi.com/p/manuel.vp.official/",
      color: "green",
      emoji: "📖",
    },
    {
      name: "Yotube",
      url: "https://youtube.com/@manuelvp-i7l?si=2MDg_CLSqg7VI090",
      color: "red",
      emoji: "💬",
    },
  ],
  footer: "Made with Love on Perú",
};

const main = ( ) => {
    let name = document.createTextNode(data?.name);
    let links = data?.links?.map((link)=>{
        return`
        <div class="bg-${link.color}-200 px-4 py-5 w-full flex justify-between">
        <a class="text-sm font-bold text-${link.color}-600 text-center hover:text-${link.color}-800 cursor-pointer"
        href="${link.url}" target="_blank">
        ${link.name}
        </a>
        <span>${link.emoji}</span>
        </div>`
    }).join('');
    let newItem = document.createElement("section");
    newItem.innerHTML=links;
    $links.appendChild(newItem);
    $name.appendChild(name)
}

main()