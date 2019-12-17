export class Company{
    public name:  string;
    public catchPhrase: string;
    public bs: string;
   

    public getName(): string{
        return this.name
    }
    public setName(nome: string): void{
        this.name = nome
    }

    public getCatchPhrase(): string{
        return this.catchPhrase
    }
    public setCatchphrase(catchPhrase: string): void{
        this.catchPhrase = catchPhrase
    }

    public getBs(): string{
        return this.bs
    }
    public setBs(bs: string): void{
        this.bs = bs
    }
}
