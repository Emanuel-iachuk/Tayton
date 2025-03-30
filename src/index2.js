class Rankeador {
    constructor(partidas = 84, derrotas = 3) {
      this.partidas = partidas;      
      this.derrotas = derrotas;      
      this.vitoriasVirtuais = this.partidas - this.derrotas; 
    }
  
    determinarRank() {
      const vitorias = this.vitoriasVirtuais;
      
      if (vitorias <= 10) return "Ferro";
      else if (vitorias <= 20) return "Bronze";
      else if (vitorias <= 50) return "Prata";
      else if (vitorias <= 80) return "Ouro";
      else if (vitorias <= 90) return "Diamante";
      else if (vitorias <= 100) return "Lendário";
      return "Imortal"
    }
  
    exibirRank() {
      const rank = this.determinarRank();
      console.log(`
        Partidas: ${this.partidas}
        Derrotas: ${this.derrotas}
        Vitórias Virtuais: ${this.vitoriasVirtuais}
        Seu rank: ${rank}
      `);
    }
  }
  
  
  
  const jogador = new Rankeador();
  jogador.exibirRank();
  