class Heroi {
    constructor(nome, xp) {
      this.nome = nome;
      this.xp = xp;
    }
  
    determinarNivel() {
      switch(true) {
        case (this.xp <= 1000):
          return "Ferro";
        case (this.xp >= 1001 && this.xp <= 2000):
          return "Bronze";
        case (this.xp >= 2001 && this.xp <= 5000):
          return "Prata";
        case (this.xp >= 5001 && this.xp <= 7000):
          return "Ouro";
        case (this.xp >= 7001 && this.xp <= 8000):
          return "Platina";
        case (this.xp >= 8001 && this.xp <= 9000):
          return "Ascendente";
        case (this.xp >= 9001 && this.xp <= 10000):
          return "Imortal";
        case (this.xp >= 10001):
          return "Radiante";
        default:
          return "Desconhecido";
      }
    }
  
    exibirNivel() {
      const nivel = this.determinarNivel();
      console.log(`O herói ${this.nome} está no nível ${nivel}`);
    }
  }
  
 
  const heroi1 = new Heroi("Emanuel iachuk", );
  heroi1.exibirNivel(); 
  