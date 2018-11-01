module.exports = plugin =>{
    const nvim = plugin.nvim;

    plugin.setOptions({
        dev:true
    });

    function  onBufWrite(){
        console.log("Buffer")   
    }

    
    const toAsync = fn =>{
        console.log(fn)

    }

    plugin.registerCommand("toAsync", nextChar, {
        sync: false,
        range: "",
        nargs: "*",
    });
}
