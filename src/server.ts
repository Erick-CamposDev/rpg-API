import createApp from "./app";

const server = createApp();
const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${PORT}`);
});
