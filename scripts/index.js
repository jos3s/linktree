const discord = document.getElementById("discord");
const discordNick = "Iordbrack#6142";

discord.addEventListener("click", () => {
  const discordContent = discord.innerHTML;
  navigator.clipboard
    .writeText(discordNick)
    .then(() => {
      discord.innerText = "Copiado!";
      setTimeout(() => {
        discord.innerHTML = discordContent;
      }, 1500);
    })
    .catch((e) => alert(e.message));
});
