# Usa a imagem oficial do Nginx como base
FROM nginx:latest

# Remove os arquivos padrão do Nginx (opcional)
RUN rm -rf /usr/share/nginx/html/*

# Copia os arquivos do projeto para o diretório padrão de conteúdo
COPY . /usr/share/nginx/html

# Expõe a porta 80 (porta padrão do Nginx)
EXPOSE 80

# Inicia o Nginx no primeiro plano
CMD ["nginx", "-g", "daemon off;"]

