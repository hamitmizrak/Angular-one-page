// https://www.typescriptlang.org/

/*
tsc -w
npm run nodemon
*/

// npm run typescript
// npm run nodemon
// tsc
// tsc -w

/*
Javascript Nedir ?

Betik dildir.
Tarayıcı tarafında çalışır.
Nodejs ile sunucu tarafında da çalışır.
OOP (interface,inheritance,abstract)

TypeScript Nedir ?

TS: Açık kaynak kodlu bir dildir.
TS: Esnektir.
TS: Js herşeyi kullanabilirsiniz.
TS: Microsoft ürünüdür. C# , Hejlberg 
TS: Javascript+...+ diğer özellikleri 
Javascript = TS

 TypeScript Özellikleri Nelerdir ?
TS: Esnektir
TS: Static type
TS: Derleme zamanı
TS: Yazılım kalitesini arttırır.
TS: Hata bulma kolaylığı
TS: Kod okunabilirliği
TS: Büyük projelerde kullanılır.
TS: Angular,React JS,Vue ile geliştirmeler yapabiliriz.
TS: Nodejs ile backend tarafında da kullanabiliriz.
TS: Javascript ile çalışır.
TS: Javascript kodlarını derler.
TS: Javascript'e dönüştürür.

TypeScript Neden Öğrenmeliyim ?
TypeScript Genel Bileşenleri Nelerdir ?
Ecmascript ile JavaScript Arasındaki Farklar Nelerdir ?
TypeScript ile JavaScript Arasındaki Farklar Nelerdir ?
TypeScript ile Ecmascript Arasındaki Farklar Nelerdir ?
TypeScript Kurulumu
TypeScript Compiler
Javascript Interpreter
Java: Interpreter and Compiler 
*/

// TypeScript Editor
// TypeScript İlk Program
// TypeScript Değişkenler

// ####  STATIC DATA TYPES #################################################
function staticDataTypes() {
  // TypeScript Veri Tipleri
  // Dynamics data types
  // let data=44;
  // console.log(data);
  // data="kelime";
  // console.log(data);
  // data=true;
  // console.log(data);

  // Data types: number,string,boolean
  // type Safe:
  // TS datatypes (number)
  let data1: number = 44;
  data1 = 99;
  console.log(data1);
  console.log(typeof data1);
  data1 = 99.88;
  console.log(data1);
  console.log(typeof data1);

  // TS datatypes (string)
  let data2: string = " ts ÖĞreniyorum ts";
  console.log(data2);
  data2 = data2.trim();
  console.log(data2);
  console.log(typeof data2);

  // TS datatypes (boolean)
  let data3: boolean = 3 > 1;
  console.log(data3);
  console.log(typeof data3);

  // Dikkat: const mutlaka başlangıç değeri vermelisiniz.
  // 'const' declarations must be initialized.
  // const data5:number;
  // console.log(data5);
}
//staticDataTypes();

// #### DYNAMICS DATA TYPES #################################################
const dynamicsDataTypes = function () {
  // Dynamics data types (any)
  // karşı taraftan(api,database,object) gelen veri türünü bilmiyorum.
  let data4: any = true; //44;   //"Malatya";
  console.log(data4);
  data4 = 44;
  console.log(data4);
  data4 = false;
  console.log(data4);

  // unknown

  // any ile unknown arasındaki farklar

  // null
  // undefined
};
//dynamicsDataTypes ();

// #### OPERATORS #################################################
// TypeScript Operatörler
// + - * / % && || ! > >= < <=

// #### CONDITION #################################################
// TypeScript Koşullu İfadeler
// if else if, ternary

// #### LOOP #################################################
// TypeScript Döngüler
// for() while() do-while() foreach() for-in() for-of()

// number,string,boolean,any
// #### ARRAY #################################################
// TypeScript Döngüler
let tsArray = () => {
  // TypeScript Diziler

  // 1.YOL
  let array_0: number[] = [1, 2, 9, 5, 3];

  // 2.YOL
  let array_1: Array<number> = [1, 2, 9, 5, 3];

  //console.log(array[0]);
  //array[5] = 23;
  //console.log(array[array.length - 1]);

  let array2: number[] = [1, 2, 9, 5, 3];
  let array3: string[] = ["İstanbul", "Ankara", "Adana"];
  let array4: boolean[] = [3 > 1, 44 < 1, true];
  let array5: any[] = [44, "str", true];

  // tuple: Veri olarak birden fazla datatypes tek bir bileşende göstermek için kullanıyoruz.
  let tuple1: [number, string] = [1, "Adana"];
  let result = `${tuple1[0]} => ${tuple1[1]}`;
  console.log(result);
  tuple1.push(2, "Adıyaman");
  tuple1.push(3, "Afyon");
  tuple1.push(4, "Bolu");
  tuple1.push(5, "Amasya");
  tuple1.forEach((temp) => {
    console.log(`${temp}`);
  });

  let tuple2: [number, string, boolean] = [44, "str", true];
};
//tsArray()

// number,string,boolean,any
// #### OBJECT  #################################################
let tsObject = () => {
  // TypeScript Object
  console.log("TypeScript Object");

  // Normal object
  // let computer={
  //     computerName:"Msi Titan",
  //     trade:"msi",
  //     year:"2024"
  // }

  let computer: {
    computerName: string;
    trade: string;
    year: number;
    newVersion: boolean;
  } = {
    computerName: "Msi Titan",
    trade: "msi",
    year: 2024,
    newVersion: true,
  };
  console.log(computer.computerName);
  console.log(computer.trade);
  console.log(computer.year);
  console.log(computer.newVersion);
};
//tsObject();

// #### FUNCTIONS #################################################
// TypeScript Fonksiyonlar
// void: dönüşü olmayan (Yani işlem sonunda bana birşey döndermee)
/*
function tsFunction(x,y,z){
    console.log(`Normal: ${x} ${y} ${z}`); 
}
tsFunction(4,10,99);
*/

function tsFunction2(x: number, y: number, z: string) {
  console.log(`TS Function2: ${x} ${y} ${z}`);
}

//tsFunction2(4,10,"Merhabalar")

function tsFunction3(x: any, y: number, z: string) {
  console.log(`TS Function3: ${x} ${y} ${z}`);
}

//tsFunction3(44,10,"Merhabalar");
//tsFunction3(true,10,"Merhabalar");
//tsFunction3("Malatya",10,"Merhabalar");

// void: geriye bir şey dönderme
function tsFunction4(x: any, y: number, z: string): void {
  console.log(`TS Function4: ${x} ${y} ${z}`);
}

//tsFunction4("Malatya",10,"Merhabalar");

function tsFunction5(x: any, y: number, z: string): number {
  //console.log(`TS Function4: ${x} ${y} ${z}`);
  //return 10;
  //return Number(x)+y+Number(z);
  return parseInt(x) + y + parseFloat(z);
}

//const result5=tsFunction5("44",10,"99.12");
//console.log(result5);

// Bitirme Projesini PDF
// tsconfig.json
// tsc -w
// tsc -w index.ts
// nodemon
// Web pack
// live-server
// Babil
// Node JS Server- HTML- Document - URL - EXPRESS

// #### ENUM #################################################
// TypeScript Enum
let tsEnum = () => {
  console.log("Enum");
  // ENUM
  enum computerTrade {
    msi = "MSI",
    dell = "DELL",
    hp = "HP",
  }

  console.log(computerTrade.msi);
  let computerOtherTrade: computerTrade = computerTrade.dell;
  console.log(computerOtherTrade);
};
//tsEnum();

// #### CLASS #################################################
// TypeScript Sınıflar
// OOP
// this
let tsClass = () => {
  console.log("Class Examples");
  /* CLASS
    FIELD
    CONSTRUCTOR
    FUNCTION
     */

  class Computer {
    // DATA TYPES
    _computerName: string;
    _ram: number;
    _newVersion: boolean;

    // CONSTRUCTOR
    constructor(computerName: string, ram: number, newVersion: boolean) {
      this._computerName = computerName;
      this._ram = ram;
      this._newVersion = newVersion;
    }

    // FUNCTION
    computerInformation(): void {
      let result = `Information => Computer Name: ${this._computerName} Computer Ram: ${this._ram} Computer version: ${this._newVersion}`;
      console.log(result);
    } //end function
  } //end Computer

  // INSTANCE
  let computerIntance = new Computer("Msi", 8, true);
  console.log("NAME: " + computerIntance._computerName);
  console.log("RAM: " + computerIntance._ram);
  console.log("VERSION: " + computerIntance._newVersion);
}; //end common Function
//tsClass()

// #### OPTIONAL #################################################
// TypeScript Sınıflar
let tsOptionalClass = () => {
  console.log("TypeScript Optional Class");
  class Computer {
    // DATA TYPES
    _computerName: string;
    _ram: number;
    _newVersion: boolean;
    // eğer Veri eklensin mi eklenmesin mi ? diye soruyorsak burada optiona(?)
    _copilot?: boolean;

    // CONSTRUCTOR
    constructor(
      computerName: string,
      ram: number,
      newVersion: boolean,
      copilot?: boolean
    ) {
      this._computerName = computerName;
      this._ram = ram;
      this._newVersion = newVersion;
      // Optional(?)
      this._copilot = copilot;
    }

    // FUNCTION
    computerInformation(): void {
      let result = `Information => Computer Name: ${this._computerName} Computer Ram: ${this._ram} Computer version: ${this._newVersion}`;
      console.log(result);
    } //end function

    // Optional(?:)
    everyComputerCopilot() {
      if (this._copilot !== undefined) {
        console.error("YES AI computer available");
        const other = `Computer Name: ${this._computerName} Computer Ram: ${this._ram} Computer version: ${this._newVersion}`;
        const data = other + `Copilot: ${this._copilot}`;
        console.log(data);
      } else {
        console.error("No AI computer available");
        const other = `Computer Name: ${this._computerName} Computer Ram: ${this._ram} Computer version: ${this._newVersion}`;
        console.log(other);
      }
    }
  } //end Computer

  // INSTANCE
  // copilot: argüman eklenebilinirde eklenmeyebilirde
  let computerIntance1 = new Computer("Msi", 8, true);
  computerIntance1.everyComputerCopilot();

  let computerIntance2 = new Computer("Msi", 8, true, true);
  computerIntance2.everyComputerCopilot();
};
//tsOptionalClass();

// #### ACCESS MODIFIER #################################################
// TypeScript Sınıflar
// OOP
// this
let tsAccessModifierClass = () => {
  // CLASS
  class Computer {
    // Access Modifier
    // public : Her yerde erişebilirsiniz (default)
    // private: Sadece o classta erişim yapabilirsiniz
    // protected: Eğer extends değilse sadece o classta erişim sağlarsınız

    // FIELD
    _mainCard: string; // Access: birşey yazmazsam zaten public
    public _cpu: string;
    public _ram: number;
    private _harddisk: string; // encapsulation
    protected _newVersion: boolean;

    // CONSTRUCTOR
    constructor(
      mainCard: string,
      cpu: string,
      ram: number,
      harddisk: string,
      newVersion: boolean
    ) {
      this._mainCard = mainCard;
      this._cpu = cpu;
      this._ram = ram;
      this._harddisk = harddisk;
      this._newVersion = newVersion;
    }

    // FUNCTION
    computerInformation(): void {
      let result = `Information => MainCard: ${this._mainCard} Cpu: ${this._cpu} Ram: ${this._ram} Harddisk: ${this._harddisk} NewVersion: ${this._newVersion}`;
      console.log(result);
    }
  } //end class Computer

  // 2.CLASS (MSI)
  // protected: subClass alanda çalışır.
  class Msi extends Computer {
    // Field
    _usb: string;

    // Constructor
    constructor(
      mainCard: string,
      cpu: string,
      ram: number,
      harddisk: string,
      newVersion: boolean,
      usb: string
    ) {
      //super: üst atadan gelen bilgileri gösterir
      super(mainCard, cpu, ram, harddisk, newVersion);

      //this global state gösterir.
      this._usb = usb;
    }

    // function
    computerInformation(): void {
      let result = `Information => MainCard: ${this._mainCard} Cpu: ${this._cpu} Ram: ${this._ram}  NewVersion: ${this._newVersion} USB: ${this._usb}`;
      console.log(result);
    }
  }

  // INTANCE (Computer)
  const computerInstance = new Computer("Computer", "i7", 8, "1TB", false);
  console.log("MAIN CARD: " + computerInstance._mainCard);
  console.log("CPU: " + computerInstance._cpu);
  console.log("RAM: " + computerInstance._ram);
  //console.log("HARD DISK: " + computerInstance._harddisk);
  //console.log("Version: " + computerInstance._newVersion);
  computerInstance.computerInformation();
  console.log("**********************************************");

  // INSTANCE (MSI)
  const msiInstance = new Msi("Msi", "i9", 16, "4TB", true, "Usb2");
  console.log("MAIN CARD: " + msiInstance._mainCard);
  console.log("CPU: " + msiInstance._cpu);
  console.log("RAM: " + msiInstance._ram);
  //console.log("HARD DISK: " + msiInstance._harddisk);
  //console.log("Version: " + msiInstance._newVersion);
  console.log("USB: " + msiInstance._usb);
  msiInstance.computerInformation();
  console.log("**********************************************");

  // console.log("RAM: " + computerIntance._ram); //private: sadece o classta çalışır
  // console.log("VERSION: " + computerIntance._newVersion); // protected extends değilse sadece o classta çalışır
};
//tsAccessModifierClass()

// #### ENCAPSULATION #################################################
// Encapsulation: private
/*
 Encapsulation(Kapsulleme) bir sınıf içerisinde bazı verileri erişim kısıtlaması getirir.
Amaç: Verinin dış dünyalayla kapalı olmasını sağlamak ancak sadece bizim belirlediğimiz arayüzde kullanabilelim.
Encapsulation Kısaca: iç yapısı dış dünyayadan gizlenir. böylelikle veri güvenliğini sağlamış oluruz.
 */

let tsEncapsulationClass = () => {
  // CLASS
  class Computer {
    // FIELD
    _mainCard: string; // Access: birşey yazmazsam zaten public
    public _cpu: string;
    public _ram: number;
    public _harddisk: string;
    private _newVersion: boolean;

    // CONSTRUCTOR
    constructor(
      mainCard: string,
      cpu: string,
      ram: number,
      harddisk: string,
      newVersion: boolean
    ) {
      this._mainCard = mainCard;
      this._cpu = cpu;
      this._ram = ram;
      this._harddisk = harddisk;
      this._newVersion = newVersion;
    }

    // ENCAPSULATION (private)
    // GET (Veriyi getir, okuma)
    // GET: veri döndeririz
    get encapsulationNewVersion(): boolean {
      return this._newVersion;
    }

    // SET (Veriyi manipulation, yani değiştirme)
    // SET: veri dönderilmezzzz
    set encapsulationNewVersion(version: boolean) {
      this._newVersion = version;
    }

    // FUNCTION
    computerInformation(): void {
      let result = `Information => MainCard: ${this._mainCard} Cpu: ${this._cpu} Ram: ${this._ram} Harddisk: ${this._harddisk} NewVersion: ${this._newVersion}`;
      console.log(result);
    }
  } //end class Computer

  // Encapsulation (Computer)
  const computerInstance = new Computer("Computer", "i7", 8, "1TB", false);
  console.log("MAIN CARD: " + computerInstance._mainCard);
  console.log("CPU: " + computerInstance._cpu);
  console.log("RAM: " + computerInstance._ram);
  console.log("HARD DISK: " + computerInstance._harddisk);

  // private böyle yazamazsınız sadece encapsulation olarak private kullanabilirsin.
  // Encapsulation(SET)
  computerInstance.encapsulationNewVersion = true;
  // Encapsulation(GET)
  console.log("Version: " + computerInstance.encapsulationNewVersion);

  //console.log("Version: " + computerInstance._newVersion);
  computerInstance.computerInformation();
  console.log("**********************************************");
};
//tsEncapsulationClass()

// #### INHERITANCE #################################################
// TypeScript Inheritance
// this
// super
const tsInheritance = () => {
  console.log("TypeScript Inheritance Class");
  // 1.CLASS (COMMON CLASS)
  class Computer {
    // FIELD
    _mainCard: string;
    _cpu: string;
    _ram: number;
    _harddisk: string;
    _newVersion: boolean;

    // CONSTRUCTOR
    constructor(
      mainCard: string,
      cpu: string,
      ram: number,
      harddisk: string,
      newVersion: boolean
    ) {
      this._mainCard = mainCard;
      this._cpu = cpu;
      this._ram = ram;
      this._harddisk = harddisk;
      this._newVersion = newVersion;
    }

    // FUNCTION
    computerInformation(): void {
      let result = `Information => MainCard: ${this._mainCard} Cpu: ${this._cpu} Ram: ${this._ram} Harddisk: ${this._harddisk} NewVersion: ${this._newVersion}`;
      console.log(result);
    }
  } //end class Computer

  // 2.CLASS (MSI)
  class Msi extends Computer {
    // Field
    _usb: string;

    // Constructor
    constructor(
      mainCard: string,
      cpu: string,
      ram: number,
      harddisk: string,
      newVersion: boolean,
      usb: string
    ) {
      //super: üst atadan gelen bilgileri gösterir
      super(mainCard, cpu, ram, harddisk, newVersion);

      //this global state gösterir.
      this._usb = usb;
    }

    // function
    computerInformation(): void {
      let result = `Information => MainCard: ${this._mainCard} Cpu: ${this._cpu} Ram: ${this._ram} Harddisk: ${this._harddisk} NewVersion: ${this._newVersion} USB: ${this._usb}`;
      console.log(result);
    }
  }

  // 3.CLASS (ASUS)
  class Asus extends Computer {
    // Field
    _typeC: string;

    // Constructor
    constructor(
      mainCard: string,
      cpu: string,
      ram: number,
      harddisk: string,
      newVersion: boolean,
      typeC: string
    ) {
      //super: üst atadan gelen bilgileri gösterir
      super(mainCard, cpu, ram, harddisk, newVersion);

      //this global state gösterir.
      this._typeC = typeC;
    }

    // function
    computerInformation(): void {
      let result = `Information => MainCard: ${this._mainCard} Cpu: ${this._cpu} Ram: ${this._ram} Harddisk: ${this._harddisk} NewVersion: ${this._newVersion} USB: ${this._typeC}`;
      console.log(result);
    }
  }

  // INTANCE (Computer)
  const computerInstance = new Computer("Computer", "i7", 8, "1TB", false);
  console.log("MAIN CARD: " + computerInstance._mainCard);
  console.log("CPU: " + computerInstance._cpu);
  console.log("RAM: " + computerInstance._ram);
  console.log("HARD DISK: " + computerInstance._harddisk);
  console.log("Version: " + computerInstance._newVersion);
  computerInstance.computerInformation();
  console.log("**********************************************");

  // INSTANCE (MSI)
  const msiInstance = new Msi("Msi", "i9", 16, "4TB", true, "Usb2");
  console.log("MAIN CARD: " + msiInstance._mainCard);
  console.log("CPU: " + msiInstance._cpu);
  console.log("RAM: " + msiInstance._ram);
  console.log("HARD DISK: " + msiInstance._harddisk);
  console.log("Version: " + msiInstance._newVersion);
  console.log("USB: " + msiInstance._usb);
  msiInstance.computerInformation();
  console.log("**********************************************");

  // INSTANCE (ASUS)
  const asusInstance = new Asus("Asus", "i9", 32, "2TB", false, "TypeC");
  console.log("MAIN CARD: " + asusInstance._mainCard);
  console.log("CPU: " + asusInstance._cpu);
  console.log("RAM: " + asusInstance._ram);
  console.log("HARD DISK: " + asusInstance._harddisk);
  console.log("Version: " + asusInstance._newVersion);
  console.log("TypeC: " + asusInstance._typeC);
  asusInstance.computerInformation();
};
//tsInheritance();

// #### ABSTRACT #################################################
// TypeScript Abstract
// super
let abstractFunction = () => {
  // abstract class( Genel Ortak Özellikler )
  abstract class bilgisayarOrtakOzellikler {
    // FIELD

    // CONSTRUCTOR
    constructor() {}

    // FUNCTION
    // Gövdeli Function
    anakart(): void {
      console.log("Anakart");
    }

    // Gövdesiz Method
    abstract cpu(): void;
  } //end class abstract bilgisayarOrtakOzellikler

  // MSI
  class msiTitan extends bilgisayarOrtakOzellikler {
    //FIELD

    // CONSTRUCTOR
    constructor() {
      super(); // abstract class almak
    }

    // Override
    anakart(): void {
      console.log("Anakart Msi");
    }

    // NOT: abstract yazdığımız gövdesiz metodu extends ettiğimiz classta yazmak zorundayız.
    cpu(): void {
      console.log("MSI CPU");
    }
  } //end class msiTitan

  /////////////////////////
  // abstract class instance yapamazsınız.
  // let bilgisayarOrtakOzellik = new bilgisayarOrtakOzellikler();

  let msiVersion1 = new msiTitan();
  msiVersion1.anakart();
  msiVersion1.cpu();
};
abstractFunction();

// #### GENERICS #################################################
// TypeScript Generics

// #### ASSERTIONS (CAST #################################################
// TypeScript Type Assertions
// TypeScript Type Aliases
function typeAssertionsFunction() {
  console.log("type Assertions:  Tür değiştirme");
  let data;

  // bu yazımda otomatik any
  data = "Merhabalar";

  //any: string, number,boolean

  // 1. YOL
  let value1 = data.length;
  console.log(value1);

  // 2. YOL (Assertions)
  let value2 = (<string>data).length;
  console.log(value2);

  // 3. YOL (Assertions)
  let value3 = (data as string).length;
  console.log(value3);
}
typeAssertionsFunction();

// #### INTERFACE #################################################
// TypeScript Interface


// ###############################################################
// TypeScript Never
// TypeScript Decorators
// TypeScript Mixins
// TypeScript Interfaces vs Types
// TypeScript Modules
// TypeScript Namespaces vs Modules
// TypeScript Ambient Namespaces
// TypeScript Ambient Modules
// TypeScript Inference
// TypeScript Type Compatibility
// TypeScript Intersection Types
