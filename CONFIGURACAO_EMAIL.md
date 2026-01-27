# Configuração do Sistema de Email - GeoSMART Website

## ✅ Alterações Implementadas

### 1. Título e Favicon do Site
- **Título atualizado**: "GeoSMART - Engineering the Ground, Enabling Sustainability"
- **Descrição**: Descrição profissional dos serviços
- **Favicon**: Configurado para usar /favicon.ico (adicionar logo da empresa)

### 2. Links de Contato Corrigidos
Todos os botões "Contact Us" nas páginas de serviços agora redirecionam corretamente para `/#contato` na homepage, com scroll automático para a seção de contato.

Páginas corrigidas:
- ✅ Environment
- ✅ Geohydrology
- ✅ Geotechnics
- ✅ Mining
- ✅ Monitoring
- ✅ Training

### 3. Sistema de Email Configurado
O formulário de contato usa **Web3Forms** (serviço gratuito e confiável).

---

## 📧 Configuração do Email no Vercel

### Passo 1: Obter Access Key do Web3Forms

1. Acesse: https://web3forms.com/
2. Clique em **"Get Started Free"**
3. Insira o email: **info@geosmart-su.co.mz**
4. Verifique o email e copie o **Access Key**

### Passo 2: Adicionar Variável de Ambiente no Vercel

1. Acesse: https://vercel.com/
2. Vá para o seu projeto **geosmartweb**
3. Clique em **Settings** → **Environment Variables**
4. Adicione uma nova variável:
   - **Name**: `WEB3FORMS_ACCESS_KEY`
   - **Value**: [Cole o Access Key obtido do Web3Forms]
   - **Environment**: Selecione **Production**, **Preview** e **Development**
5. Clique em **Save**

### Passo 3: Fazer Redeploy

1. Vá para a aba **Deployments**
2. Clique nos três pontos (...) no último deployment
3. Selecione **Redeploy**
4. Confirme o redeploy

---

## 🎨 Adicionar Logo/Favicon

Para remover completamente o ícone do v0, adicione o logo da GeoSmart:

1. **Criar favicon**: Converta o logo para formato .ico ou .png (32x32 pixels)
2. **Colocar na pasta public**:
   - `public/favicon.ico` - Para browsers
   - `public/apple-icon.png` - Para dispositivos Apple (180x180 pixels)
   - `public/icon.svg` - Versão vetorial (opcional)

### Ferramentas para criar favicon:
- https://favicon.io/
- https://realfavicongenerator.net/

---

## 🧪 Testar o Formulário

Após configurar no Vercel:

1. Acesse o site: https://geosmart-su.co.mz
2. Vá para a seção "Contact"
3. Preencha o formulário
4. Clique em "Send Message"
5. Verifique o email **info@geosmart-su.co.mz**

---

## 📝 Checklist

- [x] Título do site atualizado
- [x] Links de Contact corrigidos
- [x] Sistema de email configurado
- [ ] Adicionar Access Key no Vercel
- [ ] Fazer redeploy do site
- [ ] Adicionar logo/favicon personalizado
- [ ] Testar envio de email

---

## 🆘 Troubleshooting

**Problema**: "Failed to send email. Please try again later."

**Solução**:
1. Verifique se a variável `WEB3FORMS_ACCESS_KEY` está configurada no Vercel
2. Confirme que fez o redeploy após adicionar a variável
3. Verifique se o Access Key está correto no Web3Forms

**Problema**: Email não chega

**Solução**:
1. Verifique a pasta de spam
2. Confirme que o email está verificado no Web3Forms
3. Teste com outro email para verificar se o problema é específico

---

## 💡 Alternativa: Resend (se preferir)

Se quiser usar outro serviço de email, pode configurar o **Resend**:

1. Crie conta em: https://resend.com/
2. Obtenha API Key
3. Configure no Vercel: `RESEND_API_KEY`
4. Atualize o arquivo `send-email.tsx` para usar Resend

---

## 📞 Suporte

Para qualquer dúvida:
- Email: info@geosmart-su.co.mz
- Telefone: +258 85 353 535 2
