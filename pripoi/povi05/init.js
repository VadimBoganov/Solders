(async (productsSelector, productTypeSelector, itemsSelector) => {
            await GenerateHeader()
            await GenerateFooter()
            const products = await GenerateProductsLinks(productsSelector)
            let product = products.filter((item) => item.name === productsSelector)[0]
            await GenerateProductTypesLinks(product.id, productTypeSelector)
            await GenerateItems(itemsSelector)
        })('Припои и сплавы', 'Висмутовые', 'ПОВи-0.5')
