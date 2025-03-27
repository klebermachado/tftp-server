# Servidor TFTP para Atualização de Firmware

Este é um pequeno software que cria um servidor TFTP utilizando a biblioteca `node-tftp`. Ele foi projetado para facilitar a atualização de firmware de rádios Siemens, servindo o arquivo de imagem necessário para o dispositivo.

## Pré-requisitos

- **Node.js** instalado na sua máquina (versão recomendada: LTS mais recente).
- Uma interface de rede configurada corretamente no IP `192.168.1.10`.

## Instalação

1. Clone ou baixe este repositório para o seu computador.
2. Abra o terminal na pasta do projeto e instale as dependências com o comando:
   ```bash
   npm install
   ```

## Configuração

### Configuração de Rede:

Certifique-se de que sua máquina está configurada com o endereço IP `192.168.1.10` na interface de rede usada pelo servidor TFTP.

> Nota: O IP `192.168.1.1` será atribuído ao dispositivo (rádio wireless) após a atualização do firmware, então não utilize esse IP para o servidor.

### Arquivo de Firmware:

Coloque o arquivo de imagem do firmware na pasta `/lib`.
O arquivo deve ser nomeado exatamente como `1401A9C0.img`. Esse é o nome que o rádio Siemens procurará ao realizar a atualização.

## Como Executar

1. Na pasta do projeto, execute o seguinte comando no terminal como **root**:

```bash
sudo node server.js
```

> Se você não executar o servidor como root, ele não será capaz de subir o servidor na porta 69.

2. O servidor TFTP será iniciado automaticamente no IP 192.168.1.10 e estará pronto para atender às solicitações do rádio Siemens.

## Funcionamento

- Após executar o `server.js`, o servidor TFTP estará ativo e aguardando a conexão do dispositivo.
- O rádio Siemens buscará o arquivo `1401A9C0.img` na pasta `/lib` para realizar a atualização de firmware.

- Certifique-se de que o dispositivo está configurado para se conectar ao servidor TFTP no IP `192.168.1.10`.

> **Observação:** Em alguns sistemas operacionais, a rede não sobe caso a placa de rede não encontre uma conexão na outra ponta. Não se preocupe, enquanto o servidor não encontrar uma conexão, ele irá lançar uma mensagem de erro; porém, assim que a conexão ficar ativa, o servidor irá subir automaticamente.

## Solução de Problemas

- Erro de conexão: Verifique se o IP `192.168.1.10` está corretamente configurado na sua máquina e se não há conflitos de rede.
- Arquivo não encontrado: Confirme que o arquivo na pasta `/lib` está nomeado exatamente como `1401A9C0.img`.
- Servidor não inicia: Certifique-se de que as dependências foram instaladas corretamente com `npm install`.

## Contribuições

Sinta-se à vontade para sugerir melhorias ou reportar problemas abrindo uma issue neste repositório.
