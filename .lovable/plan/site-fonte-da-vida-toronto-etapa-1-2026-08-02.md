# Site Fonte da Vida Toronto — Etapa 1

Cinco páginas essenciais, em português, com identidade visual da logo (azul royal + azul claro sobre branco) e formulários salvos no banco.

## Escopo desta etapa

- **Home** — hero, informações rápidas, horários de culto, resumo "quem somos", chamada de oração, mapa
- **Visite-nos** — como chegar, estacionamento/TTC, o que esperar, FAQ
- **Sobre** — história, missão, visão, valores, nossa fé (sem liderança)
- **Pedido de oração** — formulário salvo no banco
- **Contato** — dados, redes sociais, mapa e formulário salvo no banco

Ministérios, mensagens, eventos, contribua, notícias, blog, busca, versão em inglês e painel administrativo ficam para as próximas etapas (a estrutura já será preparada para recebê-los).

## Dados confirmados

- Endereço: 1224 Lawrence Ave W, North York ON M6A 1E3
- Cultos (português): Dom 10h Culto da Família · Ter 19h30 Encontro de Mulheres · Qua 19h30 Quarta do Resgate · Sex 19h30 Culto de Jovens e Adolescentes
- Telefone/WhatsApp: (437) 770-7282 · E-mail: fontetoronto@gmail.com
- Instagram e YouTube oficiais

## Passo a passo

1. **Identidade visual** — tokens de cor extraídos da logo (azul royal #1B4F9C aprox., azul claro, cinza neutro, branco), tipografia condensada/geométrica para títulos, tema claro. Logo adicionada como asset.
2. **Estrutura base** — cabeçalho com navegação (Home, Visite-nos, Sobre, Pedido de Oração, Contato) e menu mobile; rodapé com endereço, horários, contatos, redes sociais e links legais.
3. **Home** — todas as seções listadas acima, com Google Maps incorporado e botões para Visite-nos e YouTube.
4. **Visite-nos** — mapa, horários, o que esperar, duração, vestimenta, estacionamento, transporte público, idioma, acessibilidade e FAQ em acordeão.
5. **Sobre** — história, missão, visão, valores, declaração de fé e menção ao Ministério Fonte da Vida.
6. **Backend (Lovable Cloud)** — tabelas `prayer_requests` e `contact_messages` com RLS: qualquer visitante pode enviar, apenas administradores leem. Validação com Zod no cliente e no servidor.
7. **Pedido de oração** — nome, e-mail, telefone (opcional), pedido, privado (sim/não), urgência; mensagem de acolhimento após envio.
8. **Contato** — formulário (nome, e-mail, assunto, mensagem) + blocos de WhatsApp, e-mail, Instagram, YouTube, endereço e horários.
9. **SEO, acessibilidade e performance** — título/descrição/Open Graph por página, JSON-LD de igreja (`Church` schema), sitemap, robots, alt text, contraste, navegação por teclado, imagens otimizadas com lazy loading.
10. **Revisão final** — teste em mobile e desktop, verificação dos envios de formulário e ajustes.

## O que preciso de você durante o processo

- **Fotos**: fachada, interior/auditório, momentos de culto e pessoas (você disse que tem — envie quando eu pedir; até lá uso imagens temporárias marcadas para troca).
- **Texto institucional**: história da igreja, missão, visão, valores e declaração de fé (se não tiver, escrevo uma versão inicial para você revisar).
- **Detalhes práticos** para Visite-nos: estacionamento, ponto de ônibus/metrô mais próximo, se há ministério infantil e em qual horário, duração média do culto, acessibilidade do prédio.
- **Quem recebe** os pedidos de oração e mensagens de contato (nesta etapa ficam salvos no banco; e-mail de notificação e painel entram na próxima).

Vou perguntar item a item conforme chegar em cada página, em vez de pedir tudo de uma vez.

## Notas técnicas

- TanStack Start com uma rota por página (`/`, `/visite-nos`, `/sobre`, `/pedido-de-oracao`, `/contato`), `head()` próprio em cada uma.
- Design tokens semânticos em `src/styles.css` (nada de cores fixas nos componentes).
- Envio dos formulários via server functions com validação Zod; tabelas com GRANTs e políticas RLS explícitas.
- URLs em português agora; ao ativar o inglês na etapa 2, os equivalentes `/visit-us`, `/about` etc. serão adicionados com redirecionamentos.
