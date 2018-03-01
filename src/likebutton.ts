export class LikeButton{
    private _state:boolean=false;
    constructor(private _likes: number)
    {

    }
    Like():void
    {
      this._likes++;
      this._state=true;
    }
    Unlike():void{
      this._likes--;
      this._state=false;
    }
    get likes()
    {
       return this._likes
    }
    get state()
    {
        return this._state;
    }
}