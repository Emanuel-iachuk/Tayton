class Pessoa {
  constructor(pessoa) {
    this.pessoa = pessoa;
  }

  responder() {
    switch(this.pessoa) {
      case 'cleusa bomfim':
        console.log('Oi amor da minha vida como vc está? Toma uma banana! 🍌');
        break;
      
      case 'desconhecida':
        console.log('Sai daqui sua broxa, não tá vendo que eu sou casado não!');
        break;
        
      default:
        console.log('Quem é você? Não te conheço...');
    }
  }
}

const conversa = new Pessoa('desconhecida');
conversa.responder();