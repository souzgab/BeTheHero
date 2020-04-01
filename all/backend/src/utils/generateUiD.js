const crypto = require('crypto'); // Além de Cryptografia, gera o id Aleatório em HexaDecimal

module.exports = { 
    generateUiD(){
        return crypto.randomBytes(4).toString('HEX');
    }   
}