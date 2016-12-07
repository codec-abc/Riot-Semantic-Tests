function counter(this : any, opts : any) : void
{
    this.init = () =>
    {
        this.currentValue = opts.initialValue;
    }

    this.clickPlus = (e : any) =>
    {
        this.currentValue++;
    };
    
    this.clickMinus = (e : any) =>
    {
        this.currentValue--;
    };

    this.init();
}