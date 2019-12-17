import {Address} from './Address';
import {Company} from './Company';


export class User{
    public id        : number;
    public name      : string;
    public userName  : string;
    public email     : string;
    public address   : Address;
    public phone     : string;
    public webSite   : string;
    public company   : Company;



    public getId(): number{
        return this.id
    }
    public setIdt(_id: number): void{
        this.id = _id
    }

    public getName(): string{
        return this.name;
    }

    public setName(_name: string): void{
        this.name = _name
    }

    public getUserName(): string{
        return this.userName
    }
    public setUserName(_userName: string): void{
        this.userName = _userName
    }
    public getEmail(): string{
        return this.email
    }
    public setEmail(_email: string): void{
        this.email = _email
    }
    public getAddress(): Address{
        return this.address
    }
    public setAddress(_address: Address): void{
        this.address = _address
    }
    public getPhone(): string{
        return this.phone
    }
    public setPhone(phone: string): void{
        this.phone = phone
    } 
    public getWebsite(): string{
        return this.webSite
    }
    public setWebsite(webSite: string): void{
        this.webSite = webSite
    }
    public getCompany(): Company{
        return this.company
    }
    public setCompany(company: Company): void{
        this.company = company
    }
    
}