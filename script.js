const categorias = {
    "manpu": { pasta: "desenhos/manpu", total: 6, idImg: "manpu",  zIndex: 4},
    "parte-supe": { pasta: "desenhos/roupas/parte-supe", total: 10, idImg: "parte-supe",  zIndex: 3 },
    "parte-infe": { pasta: "desenhos/roupas/parte-infe", total: 6, idImg: "parte-infe",  zIndex: 2 },
    "sapato": { pasta: "desenhos/sapatos", total: 8, idImg: "sapato", zIndex: 1 },
    "oculos": { pasta: "desenhos/oculos", total: 3, idImg: "oculos", zIndex: 2 },
    "chapeu": { pasta: "desenhos/chapeu", total: 11, idImg: "chapeu",  zIndex: 3 },
    "face": { pasta: "desenhos/faces", total: 15, idImg: "face",  zIndex: 1 },
    "vestido": { pasta: "desenhos/roupas/corpo-inte", total: 15, idImg: "vestido",  zIndex: 4 }
  };
  
  const itemConfigs = {
    manpu: {
      "1.png": { width: "50%", top: "10px", left: "130px" },
      "2.png": { width: "50%", top: "-20px", left: "0px" },
      "3.png": { width: "30%", top: "-10px", left: "200px"},
      "4.png": { width: "30%", top: "50px", left: "190px" },
      "5.png": { width: "30%", top: "50px", left: "190px" },
      "6.png": { width: "30%", top: "50px", left: "190px" },
    },
    "parte-supe": {
      "1.png": { width: "60%", top: "278px", left: "62px" },
      "2.png": { width: "65%", top: "278px", left: "55px" },
      "3.png": { width: "65%", top: "278px", left: "55px" },
      "4.png": { width: "50%", top: "278px", left: "79px" },
      "5.png": { width: "70%", top: "265px", left: "40px" },
      "6.png": { width: "65%", top: "278px", left: "55px" },
      "7.png": { width: "70%", top: "278px", left: "45px" },
      "8.png": { width: "65%", top: "278px", left: "55px" },
      "9.png": { width: "70%", top: "278px", left: "45px" },
      "10.png": { width: "75%", top: "125px", left: "45px" },
      // ...
    },
    "parte-infe": {
      "1.png": { width: "50%", top: "350px", left: "79px" },
      "2.png": { width: "55%", top: "350px", left: "79px" },
      "3.png": { width: "53%", top: "350px", left: "79px" },
      "4.png": { width: "50%", top: "350px", left: "79px" },
      "5.png": { width: "55%", top: "230px", left: "79px" },
      "6.png": { width: "60%", top: "230px", left: "62px" },
      // ...
    },
    sapato: {
      "1.png": { width: "53%", top: "400px", left: "80px" },
      "2.png": { width: "50%", top: "400px", left: "80px" },
      "3.png": { width: "50%", top: "405px", left: "80px" },
      "4.png": { width: "53%", top: "230px", left: "75px" },
      "5.png": { width: "70%", top: "155px", left: "45px" },
      "6.png": { width: "83%", top: "100px", left: "30px" },
      "7.png": { width: "62%", top: "250px", left: "60px" },
      "8.png": { width: "62%", top: "250px", left: "45px" },
      // ...
    },
    oculos: {
      "1.png": { width: "65%", top: "65px", left: "60px" },
      "2.png": { width: "65%", top: "95px", left: "60px" },
      "3.png": { width: "65%", top: "95px", left: "60px" },
    },
    chapeu: {
      "1.png": { width: "80%", top: "-10px", left: "38px" },
      "2.png": { width: "80%", top: "20px", left: "30px" },
      "3.png": { width: "70%", top: "50px", left: "45px" },
      "4.png": { width: "75%", top: "10px", left: "45px" },
      "5.png": { width: "75%", top: "30px", left: "45px" },
      "6.png": { width: "80%", top: "-10px", left: "38px" },
      "7.png": { width: "80%", top: "-10px", left: "38px" },
      "8.png": { width: "100%", top: "-190px", left: "10px" },
      "9.png": { width: "120%", top: "-130px", left: "-30px" },
      "10.png": { width: "100%", top: "-20px", left: "0px" },
      "11.png": { width: "80%", top: "-50px", left: "35px" },
      // ...
    },
    face: {
      "1.png": { width: "55%", top: "90px", left: "80px" },
      "2.png": { width: "55%", top: "100px", left: "80px" },
      "3.png": { width: "55%", top: "90px", left: "80px" },
      "4.png": { width: "55%", top: "100px", left: "80px" },
      "5.png": { width: "55%", top: "100px", left: "80px" },
      "6.png": { width: "55%", top: "100px", left: "80px" },
      "7.png": { width: "55%", top: "100px", left: "80px" },
      "8.png": { width: "90%", top: "-70px", left: "20px" },
      "9.png": { width: "50%", top: "140px", left: "90px" },
      "10.png": { width: "55%", top: "90px", left: "80px" },
      "11.png": { width: "50%", top: "140px", left: "90px" },
      "12.png": { width: "55%", top: "90px", left: "80px" },
      "13.png": { width: "55%", top: "90px", left: "80px" },
      "14.png": { width: "55%", top: "90px", left: "80px" },
      "15.png": { width: "55%", top: "90px", left: "80px" },
      // ...
    },
    vestido: {
      "1.png": { width: "80%", top: "90px", left: "30px" },
      "2.png": { width: "95%", top: "-50px", left: "-10px" },
      "3.png": { width: "55%", top: "155px", left: "70px" },
      "4.png": { width: "110%", top: "-130px", left: "-40px" },
      "5.png": { width: "75%", top: "120px", left: "30px" },
      "6.png": { width: "80%", top: "110px", left: "30px" },
      "7.png": { width: "70%", top: "280px", left: "50px" },
      "8.png": { width: "70%", top: "270px", left: "50px"},
      "9.png": { width: "70%", top: "270px", left: "50px" },
      "10.png": { width: "70%", top: "270px", left: "50px"  },
      "11.png": { width: "70%", top: "270px", left: "50px"  },
      "12.png": { width: "70%", top: "270px", left: "50px"  },
      "13.png": { width: "70%", top: "270px", left: "50px"  },
      "14.png": { width: "80%", top: "80px", left: "30px"  },
      "15.png": { width: "70%", top: "270px", left: "50px"  },
      // ...
    }
  };
  
  const botoes = document.querySelectorAll(".btn-categoria");
  const painelItensContainer = document.getElementById("painel-itens-container");
  const historicoAcoes = [];
  
  // Adiciona evento aos botões para abrir painel
  botoes.forEach(btn => {
    btn.addEventListener("click", () => {
      abrirPainel(btn.dataset.categoria);
    });
  });
  
  function abrirPainel(categoria) {
    // Marca botão ativo
    botoes.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.categoria === categoria);
    });
  
    painelItensContainer.innerHTML = ""; // limpa painel
    painelItensContainer.style.display = "flex";
  
    const config = categorias[categoria];
    if (!config) return;
  
    for (let i = 1; i <= config.total; i++) {
      const itemImg = document.createElement("img");
      itemImg.src = `${config.pasta}/${i}.png`;
      itemImg.alt = `${categoria} ${i}`;
      itemImg.className = "painel-aba";
      itemImg.title = `${categoria} ${i}`;
      itemImg.style.width = "70px";
      itemImg.style.cursor = "pointer";
  
      // Ao clicar no item, aplica no personagem
      itemImg.onclick = () => {
        aplicarItem(categoria, `${i}.png`);
      };
  
      painelItensContainer.appendChild(itemImg);
    }
  }
  
  function aplicarItem(categoria, nomeArquivo) {
    const camada = document.getElementById(categorias[categoria].idImg);
    if (!camada) return;
  
    // Salva no histórico antes de mudar
    historicoAcoes.push({
      categoria,
      anteriorSrc: camada.src,
      anteriorStyle: {
        top: camada.style.top,
        left: camada.style.left,
        width: camada.style.width,
      }
    });
  
    camada.src = `${categorias[categoria].pasta}/${nomeArquivo}`;
  
    const config = itemConfigs[categoria]?.[nomeArquivo] || {};
  
    camada.style.position = "absolute";
    camada.style.top = config.top || "0px";
    camada.style.left = config.left || "0px";
    camada.style.width = config.width || "100%";
    camada.style.height = "auto";
    camada.style.zIndex = categorias[categoria].zIndex ?? 10;
  }
  
  // Salvar personagem como imagem PNG
  document.getElementById("btn-salvar").onclick = () => {
    const canvas = document.createElement("canvas");
    const largura = 360;
    const altura = 540;
    canvas.width = largura;
    canvas.height = altura;
    const ctx = canvas.getContext("2d");
  
    // Ordem para desenhar
    const idsCamadas = [
      "personagem",
      "vestido",
      "parte-supe",
      "parte-infe",
      "sapato",
      "oculos",
      "chapeu",
      "manpu",
      "face"
    ];
  
    function desenharImagem(idx) {
        if (idx >= idsCamadas.length) {
          const link = document.createElement("a");
          link.download = "personagem.png";
          link.href = canvas.toDataURL("image/png");
          link.click();
          return;
        }
      
        const imgElem = document.getElementById(idsCamadas[idx]);
        if (!imgElem || !imgElem.src) {
          desenharImagem(idx + 1);
          return;
        }
      
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => {
          // Pegamos a área do container do personagem para referência
          const containerRect = document.getElementById("game-container").getBoundingClientRect();
          const imgRect = imgElem.getBoundingClientRect();
      
          // Calcula posição relativa ao container
          const x = imgRect.left - containerRect.left;
          const y = imgRect.top - containerRect.top;
          const w = imgRect.width;
          const h = imgRect.height;
      
          ctx.drawImage(img, x, y, w, h);
      
          desenharImagem(idx + 1);
        };
        img.onerror = () => {
          desenharImagem(idx + 1);
        };
        img.src = imgElem.src;
      }
      
  
    desenharImagem(0);
  };

  document.getElementById("btn-undo").addEventListener("click", () => {
    if (historicoAcoes.length === 0) return;
  
    const ultima = historicoAcoes.pop();
    const camada = document.getElementById(categorias[ultima.categoria].idImg);
  
    if (!camada) return;
  
    camada.src = ultima.anteriorSrc;
  
    camada.style.top = ultima.anteriorStyle.top || "0px";
    camada.style.left = ultima.anteriorStyle.left || "0px";
    camada.style.width = ultima.anteriorStyle.width || "100%";
  });
  