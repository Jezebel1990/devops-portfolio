const express = require("express");
const router = express.Router();

//  Rota simples retornando artigos manuais
router.get("/posts", (req, res) => {
  const articles = [
    {
      title: "Escalando aplicações Azure Kubernetes Service (AKS)",
      description: "Escalonamento automático no AKS, com análise em tempo real via Metrics Server, Grafana e Prometheus, utilizando HPA para ajustar réplicas de pods e Cluster Autoscaler para gerenciar a capacidade dos nós.",
      link: "https://www.linkedin.com/pulse/escalando-aplica%C3%A7%C3%B5es-azure-kubernetes-service-aks-com-jezebel-guedes-x0luf/",
      image: "https://res.cloudinary.com/dlaw6ehvn/image/upload/v1763639706/1762562602545_wm4bj3.png",
      date: "2025-11-10"
    },
    {
      title: "Instalando Serviço NGINX em VM Linux no Azure",
      description: "Configuração de uma VM Linux no Azure com instalação do NGINX, abordando conceitos de IaaS, gerenciamento de servidores, acesso via SSH e deploy básico de serviços na nuvem",
      link: "https://www.linkedin.com/pulse/instalando-servi%C3%A7o-nginx-em-uma-m%C3%A1quina-virtual-linux-jezebel-guedes-ijone",
      image: "https://res.cloudinary.com/dlaw6ehvn/image/upload/v1763639853/1761864878102_ygsgnz.png",
      date: "2025-11-03"
    }
  ];

  res.json({ elements: articles });
});

module.exports = router;
