


class ProductControler{

    show=(req,res)=>{
        res.render('product',{
            title:"product"
        })
    }

    

}

module.exports=new ProductControler()