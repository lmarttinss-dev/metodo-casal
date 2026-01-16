# 🤝 Guia de Contribuição

Obrigado por considerar contribuir para o projeto **Casa Financeiramente Inteligente**! Este documento fornece as diretrizes para contribuições.

## 📋 Código de Conduta

Este projeto adota um Código de Conduta para assegurar um ambiente acolhedor para todos. Esperamos que todos os contribuintes sigam este código.

### Nossa Promessa

No interesse de promover um ambiente aberto e acolhedor, nós, como contribuintes e mantenedores, nos comprometemos a tornar a participação em nosso projeto e nossa comunidade uma experiência livre de assédio para todos.

## 🚀 Como Começar

### Reportar Bugs

Antes de criar um relatório de bug, verifique a lista de issues, pois talvez o problema já tenha sido reportado. Se você encontrar seu bug na lista, abra um comentário na issue existente em vez de abrir uma nova.

**Não abra uma issue sobre um bug de segurança publicamente.** Em vez disso, envie um email para a equipe de segurança.

### Sugerindo Melhorias

Sugestões de melhorias são sempre bem-vindas! Para sugerir uma melhoria:

1. Use um título claro e descritivo
2. Forneça uma descrição detalhada da melhoria sugerida
3. Forneça exemplos específicos para demonstrar os passos
4. Descreva o comportamento atual e o comportamento esperado

## 💻 Processo de Pull Request

1. **Fork o repositório** e crie sua branch a partir de `main`
2. **Clone seu fork localmente**:
   ```bash
   git clone https://github.com/seu-usuario/casa-financeiramente-inteligente.git
   cd casa-financeiramente-inteligente
   ```

3. **Crie uma branch descritiva**:
   ```bash
   git checkout -b feature/sua-feature-incrivel
   # ou
   git checkout -b fix/corrigir-bug-especifico
   ```

4. **Faça suas alterações** seguindo os padrões do projeto

5. **Teste suas mudanças** localmente:
   - Abra a página no navegador
   - Teste em diferentes tamanhos de tela
   - Verifique funcionalidades interativas

6. **Commit com mensagens claras**:
   ```bash
   git commit -m "Adiciona nova funcionalidade X"
   git commit -m "Corrige bug em Y"
   ```

7. **Push para seu fork**:
   ```bash
   git push origin feature/sua-feature-incrivel
   ```

8. **Abra um Pull Request** com uma descrição clara do que foi feito

## 📝 Padrões de Código

### HTML
- Use HTML semântico
- Mantenha a indentação consistente (2 espaços)
- Adicione comentários para seções principais

### CSS
- Use classes em vez de IDs sempre que possível
- Mantenha a especificidade baixa
- Use nomes descritivos para classes
- Organize propriedades em grupos lógicos

### JavaScript
- Use `const` e `let` em vez de `var`
- Mantenha funções pequenas e focadas
- Adicione comentários para lógica complexa
- Use nomes descritivos para variáveis e funções

## 📚 Estrutura de Commits

Use a seguinte convenção para mensagens de commit:

```
tipo(escopo): descrição breve

Descrição mais longa, se necessário. Explique o problema
e a solução em uma ou duas frases.

Closes #123
```

### Tipos:
- `feat`: Uma nova funcionalidade
- `fix`: Uma correção de bug
- `docs`: Mudanças apenas em documentação
- `style`: Mudanças que não afetam significado do código (formatação, etc)
- `refactor`: Mudança de código que não adiciona feature nem corrige bug
- `perf`: Mudança que melhora performance
- `test`: Adicionar testes ou atualizar testes existentes

## 🎨 Diretrizes de Design

- Manter o design limpo e moderno
- Garantir acessibilidade (contrast de cores, tamanho de fontes, etc)
- Testar em mobile, tablet e desktop
- Usar a paleta de cores existente quando possível

## ✅ Checklist para PR

Antes de submeter um Pull Request, certifique-se de:

- [ ] Meu código segue os padrões de estilo do projeto
- [ ] Testei as mudanças em múltiplos navegadores
- [ ] Testei em diferentes tamanhos de tela (mobile, tablet, desktop)
- [ ] Minha descrição de PR é clara e bem formatada
- [ ] Meus commits têm mensagens descritivas
- [ ] Adicionei/atualizei documentação, se necessário
- [ ] Não há warnings ou erros no console do navegador

## 📞 Perguntas?

Sinta-se livre para:
- Abrir uma issue com a tag `question`
- Usar a seção de Discussões
- Entrar em contato com a comunidade

---

**Obrigado por contribuir!** 🎉

Suas contribuições fazem este projeto melhor para todos!
