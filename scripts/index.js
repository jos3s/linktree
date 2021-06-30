const discord = document.getElementById("discord");
const discordNick = discord.innerHTML;

discord.addEventListener("click", () => {
  navigator.clipboard
    .writeText(discord.innerText)
    .then(() => {
      discord.innerText = "Copiado!";
      setTimeout(() => {
        discord.innerHTML = discordNick;
      }, 2000);
    })
    .catch((e) => alert(e.message));
});
