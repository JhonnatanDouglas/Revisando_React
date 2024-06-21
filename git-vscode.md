<!--  -->

git config --global user.name "Seu Nome"
git config --global user.email "seuemail@example.com"

<!--  -->

<!--  -->

ssh-keygen -t ed25519 -C "seuemail@example.com"

<!--  -->

<!--  -->

eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

<!--  -->

<!--  -->

cat ~/.ssh/id_ed25519.pub

<!-- Isso exibirá a chave pública no terminal. Copie o texto. -->

<!--  -->

Em seguida, vá para o GitHub, faça login em sua conta, e vá para Settings > SSH and GPG keys > New SSH key. Cole a chave pública no campo "Key" e dê um nome no campo "Title". Clique em Add SSH key.

<!--  -->

<!--  -->

Pronto, agora o GitHub e o VsCode estao linkados.

<!--  -->
