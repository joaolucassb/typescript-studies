// Singleton - GoF | Factory Method - GoF
export class DataBase {
  private static database: DataBase;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
  }

  static getDataBase(host: string, user: string, password: string): DataBase {
    if (DataBase.database) {
      console.log('Retornando instância já criada');
      return DataBase.database;
    }
    console.log('Criando nova instância');
    DataBase.database = new DataBase(host, user, password);
    return DataBase.database;
  }
}

const db1 = DataBase.getDataBase('localhost', 'root', '123456');
db1.connect();

const db2 = DataBase.getDataBase('localhost', 'root', '123456');
db2.connect();

const db3 = DataBase.getDataBase('localhost', 'root', '123456');
db3.connect();

const db4 = DataBase.getDataBase('localhost', 'root', '123456');
db4.connect();
