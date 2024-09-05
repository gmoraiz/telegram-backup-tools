import { input } from "@inquirer/prompts";

const DEFAULT = '6416802187';
export default async function filtrarMensagensUsuarioCommand() {
  const userId = await input({
    message: 'Informe o id do usuário que você deseja extrair as mensagens',
    default: DEFAULT
  });
  return { msg: userId };
}
