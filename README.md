# 🛒 React-Mobile-Loja

Aplicativo mobile desenvolvido em **React Native** utilizando o **Expo Go**, como parte do projeto da disciplina **Programação para Dispositivos Móveis** da **Faculdade Estácio – Polo Nova Iguaçu**.

O app simula o funcionamento de um **mercadinho de bairro**, permitindo que o usuário navegue por produtos, visualize preços e adicione itens ao carrinho — trazendo uma experiência simples e intuitiva de compra.

---

## 👥 Integrantes do Grupo

- **Leandra**
- **João Pedro**
- **Tarcisio Carneiro**
- **Luiz Guilherme**
- **Victor**

---

## 🚀 Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo Go](https://expo.dev/go)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [React Navigation](https://reactnavigation.org/)
- [Expo Router](https://expo.dev/router)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

---

## 🧭 Funcionalidades Principais

- 🛍️ **Listagem de produtos:** exibe os produtos disponíveis no mercado.  
- 💰 **Visualização de preços:** mostra o valor atualizado de cada item.  
- 🧺 **Carrinho de compras:** o usuário pode adicionar e remover produtos.  
- 🔎 **Busca de produtos:** pesquisa rápida por nome ou categoria.  
- 📱 **Interface responsiva:** adaptada para diferentes tamanhos de tela.

---

## ⚙️ Como executar o projeto

### 🔹 1. Clonar o repositório

```bash
git clone https://github.com/serya012/React-Mobile-Loja.git
```

### 🔹 2. Acessar o diretório do projeto

```bash
cd React-Mobile-Loja
```

### 🔹 3. Instalar as dependências

```bash
npm install
```

### 🔹 4. Iniciar o aplicativo

```bash
npx expo start
```

---

## 🎯 **Tutorial Completo de Instalação e Configuração**

### **📥 Pré-requisitos: Instalar Node.js**

1. **Acesse:** [https://nodejs.org/](https://nodejs.org/)
2. **Baixe a versão LTS** (recomendada)
3. **Execute o instalador** e siga as instruções padrão
4. **Verifique a instalação** abrindo um novo terminal:
   ```bash
   node --version
   npm --version
   ```

### **🛠️ Solução de Problemas Comuns**

#### **Problema: Erro de execução de scripts no PowerShell**
```
npm : O arquivo C:\Program Files\nodejs\npm.ps1 não pode ser carregado...
```

**Solução 1: Usar Command Prompt (CMD)**
- Abra o **CMD** (Win + R → digite `cmd`)
- Navegue até a pasta do projeto e use os comandos npm

**Solução 2: Habilitar scripts no PowerShell**
```powershell
# Execute como Administrador
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

#### **Problema: Comandos npm/npx não reconhecidos**
- **Reinicie o computador** após instalar o Node.js
- Ou **feche e reabra o terminal**

### **📱 Como testar no celular**

1. **Instale o Expo Go:**
   - **Android:** [Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
   - **iOS:** [App Store](https://apps.apple.com/br/app/expo-go/id982107779)

2. **Execute o projeto:**
   ```bash
   npx expo start
   ```

3. **Escaneie o QR Code:**
   - **Android:** Use o app Expo Go para escanear
   - **iOS:** Use a câmera do iPhone

### **🔧 Comandos úteis durante o desenvolvimento**

```bash
# Instalar dependências
npm install

# Iniciar o app
npx expo start

# Limpar cache (se necessário)
npx expo start --clear

# Instalar uma nova dependência
npm install nome-da-dependencia
```

### **❌ Se encontrar erros**

1. **Delete a pasta `node_modules`:**
   ```bash
   rm -rf node_modules
   ```

2. **Reinstale as dependências:**
   ```bash
   npm install
   ```

3. **Reinicie o Metro Bundler:**
   ```bash
   npx expo start --clear
   ```

---

## 📲 Como testar no celular (usando o Expo Go)

1. Instale o app **Expo Go** na **Play Store** ou **App Store**.
2. No terminal, execute o comando `npx expo start`.
3. Escaneie o **QR Code** exibido no terminal ou no navegador com o **Expo Go**.
4. O aplicativo abrirá automaticamente no seu dispositivo.

---

## 🏁 Status do Projeto

📊 **Progresso:** ▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░ 60%

Atualmente estamos desenvolvendo a **estrutura base e a navegação entre telas**.
As próximas etapas incluem o design da interface, a integração do carrinho e o cadastro de produtos de forma dinâmica.

---

## 📚 Referências

* [Documentação do Expo](https://docs.expo.dev/)
* [Documentação do React Native](https://reactnative.dev/docs/getting-started)
* [React Navigation](https://reactnavigation.org/docs/getting-started/)
* [Guia de instalação do Expo CLI](https://docs.expo.dev/get-started/installation/)

---

## 🎓 Faculdade Estácio de Sá

**Curso:** Análise e Desenvolvimento de Sistemas

**Polo:** Nova Iguaçu

**Disciplina:** Programação para Dispositivos Móveis

**Ano/Semestre:** 2025.2

---

## 📞 Suporte

Se encontrar problemas durante a instalação ou execução do projeto, verifique:
1. Se todas as dependências foram instaladas corretamente
2. Se a versão do Node.js é compatível
3. Se o dispositivo mobile está na mesma rede que o computador

---

**Desenvolvido com ❤️ pelo Grupo React-Mobile-Loja**
