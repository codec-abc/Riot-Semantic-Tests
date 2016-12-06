function counter(opts : any) : void
{
    this.init = () =>
    {
        this.currentValue = opts.initialValue;
    }

    this.clickPlus = (e) =>
    {
        this.currentValue++;
    };
    
    this.clickMinus = (e) =>
    {
        this.currentValue--;
    };

    this.init();
}