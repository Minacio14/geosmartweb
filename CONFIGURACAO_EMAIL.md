# Configuração do Sistema de Email - GeoSMART Website

## ✅ Alterações Implementadas

### 1. Título e Favicon do Site
- **Título atualizado**: "GeoSMART - Engineering the Ground, Enabling Sustainability"
- **Descrição**: Descrição profissional dos serviços
- **Favicon**: Logo da GeoSMART

### 2. Links de Contato Corrigidos
Todos os botões "Contact" e links de navegação (navbar e footer) agora funcionam perfeitamente em todas as páginas.

Páginas corrigidas:
- ✅ Navbar: Services, About Us, Contact
- ✅ Footer: Services, About Us, Contact
- ✅ Páginas de serviços (6 páginas)

### 3. Sistema de Email - SMTP TurboHost
O formulário de contato agora usa **nodemailer** com o servidor SMTP do próprio domínio (TurboHost).

---

## 📧 Configuração do Email no Vercel

### Passo 1: Obter Senha do Email

Você precisa da **senha do email info@geosmart-su.co.mz** do painel do TurboHost.

1. Acesse o cPanel do TurboHost
2. Vá em **Email Accounts**
3. Encontre: **info@geosmart-su.co.mz**
4. Copie ou redefina a senha

### Passo 2: Adicionar Variáveis de Ambiente no Vercel

1. Acesse: https://vercel.com/
2. Vá para o projeto **geosmartweb**
3. Clique em **Settings** → **Environment Variables**
4. Adicione estas 4 variáveis:

```
Key: SMTP_HOST
Value: mail.geosmart-su.co.mz
Environments: ✓ Production ✓ Preview ✓ Development

Key: SMTP_PORT
Value: 465
Environments: ✓ Production ✓ Preview ✓ Development

Key: SMTP_USER
Value: info@geosmart-su.co.mz
Environments: ✓ Production ✓ Preview ✓ Development

Key: SMTP_PASSWORD
Value: [senha do email info@geosmart-su.co.mz]
Environments: ✓ Production ✓ Preview ✓ Development
```

5. Clique em **Save** em cada uma

### Passo 3: Fazer Redeploy

1. Vá para a aba **Deployments**
2. Clique nos três pontos (...) no último deployment
3. Selecione **Redeploy**
4. Confirme o redeploy

---

## 🎨 Logo/Favicon

✅ **Completo!** O logo da GeoSMART já está configurado como favicon.

---

## 🧪 Testar o Formulário

Após configurar no Vercel:

1. Acesse o site: https://geosmart-su.co.mz
2. Vá para a seção "Contact" (de qualquer página)
3. Preencha o formulário
4. Clique em "Send Message"
5. Verifique o email **info@geosmart-su.co.mz**

---

## 📝 Checklist

- [x] Título do site atualizado
- [x] Logo/favicon da GeoSMART
- [x] Links de navegação corrigidos (navbar + footer)
- [x] Links de Contact nas páginas de serviços
- [x] Sistema de email configurado (nodemailer + SMTP)
- [ ] Adicionar variáveis SMTP no Vercel
- [ ] Fazer redeploy do site
- [ ] Testar envio de email

---

## 🆘 Troubleshooting

**Problema**: "Failed to send email. Please try again later."

**Solução**:
1. Verifique se as 4 variáveis SMTP estão configuradas no Vercel
2. Confirme que a senha do email está correta
3. Verifique se fez o redeploy após adicionar as variáveis
4. Teste o email manualmente no webmail do TurboHost

**Problema**: "Connection refused" ou "SMTP error"

**Solução**:
1. Confirme que o host é: `mail.geosmart-su.co.mz`
2. Confirme que a porta é: `465`
3. Verifique se o email existe no cPanel

---

## 📞 Configurações SMTP do TurboHost

```
Servidor SMTP: mail.geosmart-su.co.mz
Porta: 465 (SSL/TLS)
Usuário: info@geosmart-su.co.mz
Senha: [sua senha do cPanel]
Segurança: SSL/TLS
```
