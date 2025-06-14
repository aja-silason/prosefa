# Prosefa Mobile – Validação de Selo Fiscal



### Prosefa

Este app simula a funcionalidade de validação de selos fiscais como na plataforma oficial Prosefa, usada em Angola para gestão de Selos Fiscais de Alta Segurança (SFAS).

## ✅ Pré-requisitos


- [Node.js](https://nodejs.org/) e [npm](https://www.npmjs.com/)
- eas-cli

   ```
      npm install -g eas-cli
   ```




## ⚙️ Como configurar o projeto

1. Clone o repositório:

   ```
   git clone https://github.com/aja-silason/prosefa.git
   cd prosefa
   
   ```

2. Instale as dependências do Projecto:

   ```
      npm intall
   ```

## Como rodar o App
   
   ```
      npm run start
      
      ou 

      npx expo start
   ```

Se quiser rodar a app offline:

   ```
      npm run start -- --offline
   ```

Caso precise rodar e limpar o cache:

   ```
      npm run start -c
   ```

Caso precise rodar e limpar o cache estando offline:

   ```
      npm run start -- --offline -c
   ```


##  A URL do Projecto estará assim

   ```
      http://sua-rede:8081
   ```

Certifique-se de ter o Expo instalado no dispositivo, ter uma conta na expo, cole a url ou Scaneio o QrCode, na aplicação do Expo


 [Expo](https://expo.dev/)


##  Build do projecto


Para executar o mesmo, terá que ter as credencias da expo em sua máquina

```
   eas build -p android --profile production
```



## 📄 Licença

Este projeto está licenciado sob a MIT License.
