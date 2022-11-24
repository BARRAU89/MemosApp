export class Memo {
    public id: number
    public message: string 
    public time: Date | null 
    public sender: string 
    public subject: string 

    constructor (id:number, message: string, time: Date | null, sender: string, subject: string) {
        this.id = id
        this.message = message
        this.time = time
        this.sender = sender
        this.subject = subject


    }
}