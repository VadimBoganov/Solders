(async (productsSelector) => {
            await GenerateHeader()
            await GenerateFooter()
            const products = await GenerateProductsLinks(productsSelector)
            let product = products.filter((item) => item.name === productsSelector)[0]
            await GenerateTypeNav(product.id)
            await GenerateProductItemsList(product.id)
        })('Металлы')
