import {GEO} from './GEO'


export class Address{
    public streat: string;
    public suite: string;
    public city: string;
    public zipcode: string;
    public geo: GEO;


    public getStreat(): string{
        return this.streat
    }
    public setStreat(streat: string): void{
        this.streat = streat
    }

    public getSuite(): string{
        return this.suite
    }
    public setSuite(suite: string): void{
        this.suite = suite
    }

    public getCity(): string{
        return this.city
    }
    public setCity(city: string): void{
        this.city = city
    }
    public getZipcode(): string{
        return this.zipcode
    }
    public setZipcode(zipcode: string): void{
        this.zipcode = zipcode
    }
    public getGeo(): GEO{
        return this.geo
    }
    public setGeo(geo: GEO): void{
        this.geo = geo
    }
}